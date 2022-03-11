from rest_framework import serializers
from Kusa.models import SteamUser

class SteamUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SteamUser
        fields = ('id','personaname','profileurl','avatar','avatarmedium','avatarfull','date_joined','is_active','is_staff', 'email', 'emailsEnabled', 'daily_hours','achievements')
        

# class AchievementSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Achievement
#         fields = ('id','date_achieved','progress')