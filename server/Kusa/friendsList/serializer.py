from rest_framework import serializers
from Kusa.models import Gamer


#need serializers to convert model instances to JSON so that the frontend can work with the received data
# class FriendsListSerializer(serializers.ModelSerializer):
#     name = serializers.PrimaryKeyRelatedField(queryset=FriendsList.objects.all())
#     class Meta:
#         model = FriendsList
#         fields = ('id','name','steamid')

class GamerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gamer
        fields = ('UserID','Name','Email','SteamID','Achievements','Blocked','Friends','FriendsRequest','ProfilePic')