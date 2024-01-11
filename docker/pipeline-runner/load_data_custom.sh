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

# download VEP cache
mkdir -p /vep_data/homo_sapiens
cd /vep_data
CACHE_FILE=homo_sapiens_vep_99_GRCh${BUILD_VERSION}.tar.gz
aws s3 cp s3://test-seqr-bucket/homo_sapiens_vep_99_GRCh38.tar.gz homo_sapiens_vep_99_GRCh${BUILD_VERSION}.tar.gz
tar xzf "${CACHE_FILE}"
rm "${CACHE_FILE}"

cd /vep_data/homo_sapiens
FTP_PATH=$([[ "${BUILD_VERSION}" == "37" ]] && echo '/grch37' || echo '')
aws s3 cp s3://test-seqr-bucket/Homo_sapiens.GRCh${BUILD_VERSION}.dna.primary_assembly.fa.gz Homo_sapiens.GRCh${BUILD_VERSION}.dna.primary_assembly.fa.gz
gzip -d Homo_sapiens.GRCh${BUILD_VERSION}.dna.primary_assembly.fa.gz
bgzip Homo_sapiens.GRCh${BUILD_VERSION}.dna.primary_assembly.fa

# download loftee reference data
mkdir -p "/vep_data/loftee_data/GRCh${BUILD_VERSION}"
cd "/vep_data/loftee_data/GRCh${BUILD_VERSION}"
LOFTEE_FILE=GRCh${BUILD_VERSION}.tar
gsutil cp "gs://seqr-reference-data/vep_data/loftee-beta/${LOFTEE_FILE}" .
tar xf "${LOFTEE_FILE}"
rm "${LOFTEE_FILE}"

# download seqr reference data
REF_DATA_HT=combined_reference_data_grch${BUILD_VERSION}.ht
CLINVAR_HT=clinvar.GRCh${BUILD_VERSION}.ht

wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.deb
sudo apt-get install -y ./mount-s3.deb

mount-s3 cp s3://test-seqr-bucket /dataset

aws s3 cp s3://test-seqr-bucket/1kg_30variants.vcf.gz /input_vcfs/1kg_30variants.vcf.gz

SOURCE_FILE=/input_vcfs/1kg_30variants.vcf.gz
DEST_FILE="${SOURCE_FILE/.*/}".mt

python3 -m seqr_loading SeqrMTToESTask --local-scheduler \
    --reference-ht-path "/dataset/seqr-reference-data/${FULL_BUILD_VERSION}/combined_reference_data_grch${BUILD_VERSION}.ht" \
    --clinvar-ht-path "/dataset/seqr-reference-data/${FULL_BUILD_VERSION}/clinvar.${FULL_BUILD_VERSION}.ht" \
    --vep-config-json-path "/vep_configs/vep-${FULL_BUILD_VERSION}-loftee.json" \
    --es-host "${ELASTICSEARCH_SERVICE_HOSTNAME}" \
    --es-port "${ELASTICSEARCH_SERVICE_PORT}" \
    --es-index-min-num-shards 1 \
    --sample-type "${SAMPLE_TYPE}" \
    --es-index "${INDEX_NAME}" \
    --genome-version "${BUILD_VERSION}" \
    --source-paths "${SOURCE_FILE}" \
    --dest-path "${DEST_FILE}"
