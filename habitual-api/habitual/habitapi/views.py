from habitapi.models import Habit
from habitapi.serializers import HabitSerializer
from rest_framework import generics


# Create your views here.
class HabitList(generics.ListCreateAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer
