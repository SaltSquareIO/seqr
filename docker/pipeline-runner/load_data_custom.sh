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

cd /
mkdir -p /dataset
mount-s3 test-seqr-bucket /dataset

cp -r /dataset/1kg.vcf /input_vcfs/1kg_30variants.vcf

SOURCE_FILE=/input_vcfs/1kg_30variants.vcf
DEST_FILE="${SOURCE_FILE/.*/}".mt

python3 -m seqr_loading SeqrMTToESTask --local-scheduler \
    --source-paths  "${SOURCE_FILE}" \
    --genome-version 37 \
    --sample-type WES \
    --dest-path "${DEST_FILE}" \
    --reference-ht-path  gs://seqr-reference-data/GRCh37/all_reference_data/combined_reference_data_grch37.ht \
    --clinvar-ht-path gs://seqr-reference-data/GRCh37/clinvar/clinvar.GRCh37.ht \
    --es-host "${ELASTICSEARCH_SERVICE_HOSTNAME}" \
    --es-port "${ELASTICSEARCH_SERVICE_PORT}" \
    --es-index-min-num-shards 3
