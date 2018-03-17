from habitapi.models import Habit, Activity, Tag
from habitapi.serializers import HabitSerializer, ActivitySerializer, TagSerializer
from habitapi.generics import NestedCollectionMixin
from rest_framework import generics


class HabitList(generics.ListCreateAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


class HabitActivityList(NestedCollectionMixin, generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    collection_field = 'habit'
    serializer_class = ActivitySerializer


class HabitActivityDetail(NestedCollectionMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Activity.objects.all()
    collection_field = 'habit'
    lookup_url_kwarg = 'pk2'
    serializer_class = ActivitySerializer


class HabitTagList(NestedCollectionMixin, generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    collection_field = 'habit'
    serializer_class = TagSerializer


class HabitTagDetail(NestedCollectionMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    collection_field = 'habit'
    lookup_url_kwarg = 'pk2'
    serializer_class = TagSerializer


class ActivityList(generics.ListCreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer


class ActivityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer


class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
