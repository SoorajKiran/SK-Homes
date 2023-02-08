# Generated by Django 4.1.5 on 2023-02-05 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Seller',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('mobile', models.PositiveIntegerField()),
                ('email', models.EmailField(max_length=250)),
                ('purpose', models.CharField(max_length=20)),
                ('details', models.CharField(max_length=255)),
            ],
        ),
    ]