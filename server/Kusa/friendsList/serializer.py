from rest_framework import serializers
from Kusa.models import FriendsList


#need serializers to convert model instances to JSON so that the frontend can work with the received data
class FriendsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendsList
        fields = ['name']

