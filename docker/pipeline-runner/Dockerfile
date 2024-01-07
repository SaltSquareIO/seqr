FROM gcr.io/seqr-project/pipeline-runner:gcloud-prod

RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    pip3 install --upgrade pip && \
    pip3 install awscli && \
    apt-get clean && \
    wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.deb && \
    sudo apt-get install -y ./mount-s3.deb && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /input_vcfs/data

COPY docker/pipeline-runner/*.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/load_data_custom.sh

ENTRYPOINT ["/bin/sh", "-c"]
