from django.contrib import admin
from .models import FriendsList
# Register your models here.

class FriendsListAdmin(admin.ModelAdmin):
    list_display = ['name']

#Register models here

admin.site.register(FriendsList, FriendsListAdmin)