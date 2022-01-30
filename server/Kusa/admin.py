from django.contrib import admin
from .models import Gamer
from Kusa.models import FriendsList, FriendRequest

# Register your models here.

# class FriendsListAdmin(admin.ModelAdmin):
#     list_display = ('name','steamid')

#Register models here

# admin.site.register(FriendsList, FriendsListAdmin)

class GamerAdmin(admin.ModelAdmin):
    list_display = ('UserID','Name','Email','SteamID','Achievements','Blocked','Friends','FriendsRequest','ProfilePic')


admin.site.register(Gamer, GamerAdmin)    

class FriendsListAdmin(admin.ModelAdmin):
    list_filter = ['Gamer']
    list_display = ['Gamer']
    search_fields = ['Gamer']
    readonly_fields = ['Gamer']

    class Meta:
        model = FriendsList
admin.site.register(FriendsList, FriendsListAdmin)

class FriendRequestAdmin(admin.ModelAdmin):
    list_filter = ['sender', 'receiver']
    list_display = ['sender', 'receiver']
    search_fields = ['sender__UserID', 'sender__Email', 'receiver', 'receiver__email']

    class Meta:
        model = FriendRequest
admin.site.register(FriendRequest, FriendRequestAdmin)