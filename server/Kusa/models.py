from django import models
# Create your models here.


class User(models.Model):
    email = models.CharField('User Email')
    password = models.CharField('User Password')
    date = models.DateField('Time Registered')
    steamname = models.CharField('Steam Account Username')
    class Meta:
        app_label = 'Kusa'
