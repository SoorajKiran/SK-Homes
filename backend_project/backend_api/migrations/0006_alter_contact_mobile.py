# Generated by Django 4.1.5 on 2023-02-07 03:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0005_alter_contact_mobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='mobile',
            field=models.PositiveBigIntegerField(null=True),
        ),
    ]
