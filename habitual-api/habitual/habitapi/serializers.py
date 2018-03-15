from rest_framework import serializers
from habitapi.models import Habit, Activity


class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = ('id', 'name', 'description', 'frequency', 'progress')


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('habit', 'date')
