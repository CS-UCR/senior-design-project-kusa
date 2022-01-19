from django.contrib import admin

from Kusa.models import SteamUser


@admin.register(SteamUser)
class SteamUserAdmin(admin.ModelAdmin):
    pass