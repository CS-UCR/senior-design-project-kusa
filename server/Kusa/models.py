from email.policy import default
from django.forms import CharField
from django.contrib.postgres.fields import ArrayField
from djongo import models
# Create your models here.


class Gamer(models.Model):
    UserID = models.CharField(default='000000',max_length=30)
    Name = models.CharField(default='null',max_length=30)
    Email = models.CharField(default='123@123',max_length=30)
    SteamID = models.CharField(default='7890',max_length=30)
    Achievements = models.CharField(default='null',max_length=120)
    Blocked = models.CharField(default='null',max_length=120)
    Friends = models.CharField(default='null',max_length=120)
    FriendsRequest = models.CharField(default='null',max_length=120)
    ProfilePic = models.CharField(default='whatever',max_length=120)
    # class Meta:
    #     app_label = 'Gamer'


# #defining friendsList model
# class FriendsList(models.Model):
#     name = models.CharField(default='KUSA', max_length=120)
#     steamid = models.CharField(default='000000',max_length=120)
#     # def _str_(self):
#     #     return self.name

class Test(models.Model):
    Name = models.CharField(default='null',max_length=30)
    SteamID = models.CharField(default='null',max_length=30)
    FriendList = models.JSONField(default=[])
    FriendRequest = models.JSONField(default=[])
    #FavoriteList = models.JSONField(default=[])

    # def _str_(self):
    #     return self.Name