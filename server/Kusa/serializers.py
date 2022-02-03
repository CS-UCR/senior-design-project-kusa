from rest_framework import serializers
from Kusa.models import SteamUser 

class SteamUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SteamUser
        # fields = ('id','personaname','profileurl','avatar','avatar_medium','avatar_full','achievements','blocked','friends','friend_requests','date_joined','is_active','is_staff')
        fields = ('id','personaname','profileurl','avatar','avatarmedium','avatarfull','date_joined','is_active','is_staff')