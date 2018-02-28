from rest_framework import serializers
from habitapi.models import Habit


class HabitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habit
        fields = ('id', 'name', 'description', 'frequency', 'progress')