FROM gcr.io/seqr-project/pipeline-runner:gcloud-prod

RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    pip3 install --upgrade pip && \
    pip3 install awscli && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /input_vcfs/data
RUN echo "vpc-seqr-opensearch-or3qlqfwca4rzpe2f5k5up4tny.us-east-1.es.amazonaws.com elasticsearch" >> /etc/hosts

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["aws s3 cp s3://test-seqr-bucket/homo_sapiens_vep_99_GRCh38.tar.gz /input_vcfs/data/GRCh38 && exec \"$@\"", "--"]
