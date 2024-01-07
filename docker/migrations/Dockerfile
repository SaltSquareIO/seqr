# Use an official Python runtime as a parent image
FROM python:3.8

# Set the working directory to /app
WORKDIR /app

# Clone the seqr repository
RUN git clone https://github.com/broadinstitute/seqr.git

# Change the working directory to /app/seqr
WORKDIR /app/seqr

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Run the necessary commands
RUN python -m manage makemigrations
RUN python -m manage migrate
RUN python -m manage loaddata variant_tag_types || true
RUN python -m manage loaddata variant_searches || true
RUN python -m manage reload_saved_variant_json

# Set environment variables for PostgreSQL
ENV PGUSER postgres
ENV PGDATABASE postgres

# Drop and create the reference_data_db database
RUN psql -c "drop database if exists reference_data_db" -U $PGUSER $PGDATABASE
RUN psql -c "create database reference_data_db" -U $PGUSER $PGDATABASE

# Set environment variable for the backup file
ENV REFERENCE_DATA_BACKUP_FILE gene_reference_data_backup.gz

# Download the backup file
RUN wget -N https://storage.googleapis.com/seqr-reference-data/gene_reference_data_backup.gz -O ${REFERENCE_DATA_BACKUP_FILE}

# Restore the backup into reference_data_db
RUN gunzip -c ${REFERENCE_DATA_BACKUP_FILE} | psql -U $PGUSER reference_data_db

# Remove the downloaded backup file
RUN rm ${REFERENCE_DATA_BACKUP_FILE}
