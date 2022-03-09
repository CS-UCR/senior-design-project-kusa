from email.policy import default
from django.forms import CharField
from django.contrib.postgres.fields import ArrayField
from djongo import models
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django import forms
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from django.contrib.postgres.fields import ArrayField
class SteamUserManager(BaseUserManager):
    def _create_user(self, id, password, **extra_fields):
        """
        Creates and saves a User with the given steamid and password.
        """
        try:
            # python social auth provides an empty email param, which cannot be used here
            del extra_fields['email']
        except KeyError:
            pass
        if not id:
            raise ValueError('The given steamid must be set')
        user = self.model(id=id, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, id, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(id, password, **extra_fields)

    def create_superuser(self, id, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(id, password, **extra_fields)

class SteamUser(AbstractBaseUser, PermissionsMixin):
    USERNAME_FIELD = 'id'
    id = models.CharField(max_length=17, unique=True,primary_key=True)
    steamid = models.CharField(max_length=17, unique=True)
    personaname = models.CharField(max_length=255)
    profileurl = models.CharField(max_length=300)
    avatar = models.CharField(max_length=255)
    avatarmedium = models.CharField(max_length=255)
    avatarfull = models.CharField(max_length=255)

    #Kusa-signup specific fields
    email=models.CharField(max_length=255, default="")
    emailsEnabled = models.BooleanField(default=True)
    daily_hours=models.JSONField(default=[])
    goal = models.IntegerField(default=40)

    # achievements = ArrayField(models.CharField(max_length=10, blank=True),size=8)
    # blocked = ArrayField(models.CharField(max_length=10, blank=True),size=8) 
    # friends = ArrayField(models.CharField(max_length=10, blank=True),size=8)
    # friend_requests = ArrayField(models.CharField(max_length=10, blank=True),size=8)
    # Add the other fields that can be retrieved from the Web-API if required
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = SteamUserManager()

    def get_short_name(self):
        return self.personaname

    def get_full_name(self):
        return self.personaname

# class Gamer(models.Model):
#     UserID = models.CharField(default='000000',max_length=30)
#     Name = models.CharField(default='null',max_length=30)
#     Email = models.CharField(default='123@123',max_length=30)
#     SteamID = models.CharField(default='7890',max_length=30)
#     Achievements = models.CharField(default='null',max_length=120)
#     Blocked = models.CharField(default='null',max_length=120)
#     Friends = models.CharField(default='null',max_length=120)
#     FriendsRequest = models.CharField(default='null',max_length=120)
#     ProfilePic = models.CharField(default='whatever',max_length=120)
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
class User(models.Model):
    # _id = models.ObjectIdField(editable=False)
    email = models.CharField(max_length=255)
    emailsEnabled = models.BooleanField(max_length=255)
    password = models.CharField(max_length=255)
    date = models.DateField(max_length=255)
    steamname = models.CharField(max_length=255)
    class Meta:
        app_label = 'Kusa'

class Conversation(models.Model):
    _id = models.UUIDField(primary_key=True, unique=True)
    members = models.JSONField(null=True)

class Message(models.Model):
    conversationID = models.CharField(default='null', max_length=50)
    senderID = models.CharField(default='null', max_length=30)
    text = models.CharField(max_length=1000)
    timestamp = models.DateTimeField(auto_now_add=True)
