# Generated by Django 3.2.9 on 2022-02-25 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Kusa', '0002_auto_20220224_2352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='steamuser',
            name='weekly_hours',
            field=models.JSONField(default=[]),
        ),
    ]
