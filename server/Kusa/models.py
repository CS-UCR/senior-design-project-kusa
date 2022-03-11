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

    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    FriendList = models.JSONField(default=[])
    FriendRequest = models.JSONField(default=[])
    
    
    
    objects = SteamUserManager()

    def get_short_name(self):
        return self.personaname

    def get_full_name(self):
        return self.personaname



# class Test(models.Model):
#     Name = models.CharField(default='null',max_length=30)
#     SteamID = models.CharField(default='null',max_length=30)
#     FriendList = models.JSONField(default=[])
#     FriendRequest = models.JSONField(default=[])
    

