# Generated by Django 3.2.9 on 2022-03-13 06:43

from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('Kusa', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Conversation',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('members', djongo.models.fields.JSONField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conversationID', models.CharField(default='null', max_length=50)),
                ('senderID', models.CharField(default='null', max_length=30)),
                ('text', models.CharField(max_length=1000)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('avatar', models.CharField(max_length=255)),
            ],
        ),
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
        migrations.AddField(
            model_name='steamuser',
            name='achievements',
            field=djongo.models.fields.JSONField(default=[]),
        ),
        migrations.AddField(
            model_name='steamuser',
            name='daily_hours',
            field=djongo.models.fields.JSONField(default=[]),
        ),
        migrations.AddField(
            model_name='steamuser',
            name='email',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='steamuser',
            name='emailsEnabled',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='steamuser',
            name='goal',
            field=models.IntegerField(default=40),
        ),
    ]