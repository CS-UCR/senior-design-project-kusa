# Generated by Django 3.2.8 on 2022-03-11 04:58

from django.db import migrations
import djongo.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('Kusa', '0002_auto_20220227_0619'),
    ]

    operations = [
        migrations.AddField(
            model_name='steamuser',
            name='FriendList',
            field=djongo.models.fields.JSONField(default=[]),
        ),
        migrations.AddField(
            model_name='steamuser',
            name='FriendRequest',
            field=djongo.models.fields.JSONField(default=[]),
        ),
    ]
