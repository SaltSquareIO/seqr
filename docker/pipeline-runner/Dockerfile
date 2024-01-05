FROM gcr.io/seqr-project/pipeline-runner:gcloud-prod

RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    pip3 install --upgrade pip && \
    pip3 install awscli && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /data/input_vcfs/

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["aws s3 cp s3://test-seqr-bucket/homo_sapiens_vep_99_GRCh38.tar.gz /data/input_vcfs/GRCh38 && exec \"$@\"", "--"]
