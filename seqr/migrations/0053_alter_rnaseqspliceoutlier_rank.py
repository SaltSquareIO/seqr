# Generated by Django 3.2.18 on 2023-06-12 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('seqr', '0052_rnaseqspliceoutlier_rank'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rnaseqspliceoutlier',
            name='rank',
            field=models.IntegerField(),
        ),
    ]
