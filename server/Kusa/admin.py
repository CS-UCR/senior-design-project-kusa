from django.contrib import admin
from .models import Gamer

# Register your models here.

# class FriendsListAdmin(admin.ModelAdmin):
#     list_display = ('name','steamid')

#Register models here

# admin.site.register(FriendsList, FriendsListAdmin)

class GamerAdmin(admin.ModelAdmin):
    list_display = ('UserID','Name','Email','SteamID','Achievements','Blocked','Friends','FriendsRequest','ProfilePic')


admin.site.register(Gamer, GamerAdmin)    


from Kusa.models import SteamUser


@admin.register(SteamUser)
class SteamUserAdmin(admin.ModelAdmin):
    pass
