from djongo import models
# Create your models here.


# class User(models.Model):
#     email = models.CharField('User Email')
#     password = models.CharField('User Password')
#     date = models.DateField('Time Registered')
#     steamname = models.CharField('Steam Account Username')
#     class Meta:
#         app_label = 'Kusa'


#defining friendsList model
class FriendsList(models.Model):
    name = models.CharField(max_length=120)
    