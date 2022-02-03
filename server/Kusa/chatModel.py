# Chat model inspired by - http://legionscript.com/
# https://www.youtube.com/watch?v=oxrQdZ5KqW0&list=PLPSM8rIid1a3TkwEmHyDALNuHhqiUiU5A&index=16

from djongo import models
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class ThreadModel(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='+')
	receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='+')

class MessageModel(models.Model):
	thread = models.ForeignKey('ThreadModel', related_name='+', on_delete=models.CASCADE, blank=True, null=True)
	sender_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='+')
	receiver_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='+')
	body = models.CharField(max_length=1000)
	#image = models.ImageField(upload_to='uploads/message_photos', blank=True, null=True)
	date = models.DateTimeField(default=timezone.now)
	is_read = models.BooleanField(default=False)