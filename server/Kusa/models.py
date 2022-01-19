from djongo import models
# Create your models here.


class User(models.Model):
    _id = models.ObjectIdField(editable=False)
    email = models.CharField()
    emailsEnabled = models.BooleanField()
    password = models.CharField()
    date = models.DateField()
    steamname = models.CharField()
    class Meta:
        app_label = 'Kusa'
