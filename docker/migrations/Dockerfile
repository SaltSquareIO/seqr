FROM gcr.io/seqr-project/pipeline-runner:gcloud-prod

RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    apt-get install -y postgresql-client && \
    pip3 install --upgrade pip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


COPY docker/migrations/*.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/migrations.sh

ENTRYPOINT ["/bin/sh", "-c"]
