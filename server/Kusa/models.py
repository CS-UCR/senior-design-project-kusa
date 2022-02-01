from email.policy import default
from django.forms import CharField
from django.contrib.postgres.fields import ArrayField
from djongo import models
from django.conf import settings
from django.db import models
from django.utils import timezone
# Create your models here.


class Gamer(models.Model):
    UserID = models.CharField(default='000000',max_length=30)
    Name = models.CharField(default='null',max_length=30)
    Email = models.CharField(default='123@123',max_length=30)
    SteamID = models.CharField(default='7890',max_length=30)
    Achievements = models.CharField(default='null',max_length=120)
    Blocked = models.CharField(default='null',max_length=120)
    Friends = models.CharField(default='null',max_length=120)
    FriendRequest = models.CharField(default='null',max_length=120)
    ProfilePic = models.CharField(default='whatever',max_length=120)
    is_active = models.BooleanField(default=True)
    
    def _str_(self):
        return self.Gamer.UserID
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

    # def _str_(self):
    #     return self.Name

class FriendsList(models.Model):
    Gamer = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="Gamer") #OneToOne = one friendslist per user
    Friends = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name="Friends") #List of users
    def _str_(self):
        return self.Gamer.UserID

    def add_friend(self, account): # add new friend 
        if not account in self.Friends.all():
            self.Friends.add(account)
            self.save()
        
    def remove_friend(self, account):   # remove friend
        if account in self.Friends.all():
            self.Friends.remove(account)
            self.save()

    def unfriend(self, removee):    # start unfriending process
        remover_friends_list = self # person starting the removal
        remover_friends_list.remove_friend(removee)

        #remove friend from removee friend list
        friends_list = FriendsList.objects.get(user=removee)
        friends_list.remove_friend(self.user)

    def are_friends(self, friend):  # check if user are friends
        if friend in self.friends.all():
            return True
        return False    

class FriendRequest(models.Model):
    # Sender
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="sender")
    # Receiver
    receiver = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="receiver")
    is_pending = models.BooleanField(blank = True, null = False, default = True) # when true, request is pending
    timestamp = models.DateTimeField(auto_now_add = True)
    def _str_(self):
        return self.sender.UserID

    def accept(self):  # accept a friend request, then update sender and receiver friendslists
        receiver_friendslist = FriendsList.objects.get(Gamer=self.receiver)
        if receiver_friendslist:
            receiver_friendslist.add_friend(self.sender)
            sender_friendslist = FriendsList.objects.get(Gamer=self.sender)
            if sender_friendslist:
                sender_friendslist.add_friend(self.receiver)
                self.is_pending = False
                self.save()

    def decline(self): # decline a friend request by setting is_pending to false
        self.is_pending = False
        self.save()

    def cancel(self):# cancel a friend request by setting is_pending to false (for notifications)
        self.is_pending = False
        self.save()
        