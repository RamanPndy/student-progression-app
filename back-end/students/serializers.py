from rest_framework import serializers
from .models import ScoreCard
from django.contrib.auth.models import User

class ScoreCardSerializer(serializers.ModelSerializer):
  class Meta:
    model = ScoreCard
    fields = ('id', 'college', 'university', 'sponsored')

class UserSerializer(serializers.ModelSerializer):
   class Meta:
     model = User
     fields = ('firstname', 'lastname', 'email', 'mobile', 'password')