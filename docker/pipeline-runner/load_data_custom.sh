#!/usr/bin/env bash

set -x -e

BUILD_VERSION=$1
SAMPLE_TYPE=$2
INDEX_NAME=$3
INPUT_FILE_PATH=$4

case ${BUILD_VERSION} in
  38)
    FULL_BUILD_VERSION=GRCh38
    ;;
  37)
    FULL_BUILD_VERSION=GRCh37
    ;;
  *)
    echo "Invalid build '${BUILD_VERSION}', should be 37 or 38"
    exit 1
esac

export HOST=$(curl -s 169.254.169.254/latest/meta-data/local-ipv4)
export LOCAL_IP=$(curl -s 169.254.169.254/latest/meta-data/local-ipv4)
export SPARK_MASTER_HOST=localhost
export SPARK_LOCAL_IP="127.0.0.1"
echo "localhost $LOCAL_IP" >> /etc/hosts
cat /etc/hosts

echo "spark.es.nodes.wan.only true" >> /usr/local/lib/python3.10/site-packages/pyspark/conf/spark-defaults.conf

cd /
mkdir -p /dataset
mount-s3 test-seqr-bucket /dataset

# download VEP cache
mkdir -p /vep_data/homo_sapiens
#cd /vep_data
#CACHE_FILE=homo_sapiens_vep_99_GRCh${BUILD_VERSION}.tar.gz
cp -r /dataset/homo_sapiens /vep_data/homo_sapiens
#tar xzf "${CACHE_FILE}"
#rm "${CACHE_FILE}"

cd /vep_data/homo_sapiens
FTP_PATH=$([[ "${BUILD_VERSION}" == "37" ]] && echo '/grch37' || echo '')
cp -r /dataset/Homo_sapiens.GRCh${BUILD_VERSION}.dna.primary_assembly.fa.gz /vep_data/homo_sapiens/Homo_sapiens.GRCh${BUILD_VERSION}.dna.primary_assembly.fa.gz
gzip -d Homo_sapiens.GRCh${BUILD_VERSION}.dna.primary_assembly.fa.gz
bgzip Homo_sapiens.GRCh${BUILD_VERSION}.dna.primary_assembly.fa

# download loftee reference data
mkdir -p "/vep_data/loftee_data/GRCh${BUILD_VERSION}"
cd "/vep_data/loftee_data/GRCh${BUILD_VERSION}"
LOFTEE_FILE=GRCh${BUILD_VERSION}.tar
cp -r /dataset/loftee-beta/${LOFTEE_FILE} /vep_data/loftee_data/GRCh${BUILD_VERSION}/${LOFTEE_FILE}
tar xf "${LOFTEE_FILE}"
rm "${LOFTEE_FILE}"

# download seqr reference data
REF_DATA_HT=combined_reference_data_grch${BUILD_VERSION}.ht
CLINVAR_HT=clinvar.GRCh${BUILD_VERSION}.ht

cp -r /dataset/1kg.vcf /input_vcfs/1kg_30variants.vcf
bgzip -f /input_vcfs/1kg_30variants.vcf

SOURCE_FILE=/input_vcfs/1kg_30variants.vcf.gz
DEST_FILE="${SOURCE_FILE/.*/}".mt

python3 -m seqr_loading SeqrMTToESTask --local-scheduler \
    --reference-ht-path "/dataset/${FULL_BUILD_VERSION}/combined_reference_data_grch${BUILD_VERSION}.ht" \
    --clinvar-ht-path "/dataset/${FULL_BUILD_VERSION}/clinvar.${FULL_BUILD_VERSION}.ht" \
    --vep-config-json-path "/vep_configs/vep-${FULL_BUILD_VERSION}-loftee.json" \
    --es-host "${ELASTICSEARCH_SERVICE_HOSTNAME}" \
    --es-port "${ELASTICSEARCH_SERVICE_PORT}" \
    --es-index-min-num-shards 1 \
    --sample-type "${SAMPLE_TYPE}" \
    --es-index "${INDEX_NAME}" \
    --genome-version "${BUILD_VERSION}" \
    --dont-validate \
    --source-paths "${SOURCE_FILE}" \
    --dest-path "${DEST_FILE}" \
    --grch38-to-grch37-ref-chain "/dataset/grch38_to_grch37.over.chain.gz"
