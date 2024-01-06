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

SOURCE_FILE=/input_vcfs/${INPUT_FILE_PATH}
DEST_FILE="${SOURCE_FILE/.*/}".mt

python3 seqr_loading.py SeqrMTToESTask --local-scheduler \
    --source-paths  gs://seqr-datasets/GRCh37/1kg/1kg.vcf.gz \
    --genome-version 37 \
    --sample-type WES \
    --dest-path gs://seqr-datasets/GRCh37/1kg/1kg.mt \
    --reference-ht-path  gs://seqr-reference-data/GRCh37/all_reference_data/combined_reference_data_grch37.ht \
    --clinvar-ht-path gs://seqr-reference-data/GRCh37/clinvar/clinvar.GRCh37.ht \
    --es-host "${ELASTICSEARCH_SERVICE_HOSTNAME}" \
    --es-port "${ELASTICSEARCH_SERVICE_PORT}" \
    --es-index new-es-index-name \ 
    --es-index-min-num-shards 1
