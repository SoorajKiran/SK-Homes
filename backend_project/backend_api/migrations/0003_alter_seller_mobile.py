# Generated by Django 4.1.5 on 2023-02-07 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0002_seller'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seller',
            name='mobile',
            field=models.PositiveBigIntegerField(),
        ),
    ]
