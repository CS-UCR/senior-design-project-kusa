from rest_framework import serializers
from Kusa.models import Test

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('Name', 'FriendList', 'SteamID')