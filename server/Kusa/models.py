from djongo import models
# Create your models here.


# class User(models.Model):
#     email = models.CharField('User Email')
#     password = models.CharField('User Password')
#     date = models.DateField('Time Registered')
#     steamname = models.CharField('Steam Account Username')
#     class Meta:
#         app_label = 'Kusa'

class User(models.Model):
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    date = models.DateField(default="something")
    steamname = models.CharField(max_length=30)
    class Meta:
        app_label = 'Kusa'




class Friends(models.Model):
    name = models.CharField(max_length=30)

class game(models.Model):
    FPS = models.CharField(max_length=30)