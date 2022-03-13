from rest_framework import serializers
from Kusa.models import SteamUser, Conversation, Message


class SteamUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SteamUser
        fields = ('id','personaname','profileurl','avatar','avatarmedium','avatarfull','date_joined','is_active','is_staff', 'email', 'emailsEnabled', 'daily_hours', 'goal', 'steamid', 'achievements')

class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = ('__all__')

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('conversationID','senderID','text','timestamp')

