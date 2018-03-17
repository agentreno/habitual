from rest_framework import serializers
from habitapi.models import Habit, Activity, Tag


class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = ('id', 'name', 'description', 'frequency', 'progress')


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('habit', 'date')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', 'habit')
