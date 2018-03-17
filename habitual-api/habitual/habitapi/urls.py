from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from habitapi import views

urlpatterns = [
    url(r'^habits/$', views.HabitList.as_view()),
    url(r'^habits/(?P<pk>[0-9]+)/$', views.HabitDetail.as_view()),
    url(r'^habits/(?P<pk>[0-9]+)/activity/$', views.HabitActivityList.as_view()),
    url(r'^habits/(?P<pk1>[0-9]+)/activity/(?P<pk2>[0-9]+)/$', views.HabitActivityDetail.as_view()),
    url(r'^activity/$', views.ActivityList.as_view()),
    url(r'^activity/(?P<pk>[0-9]+)/$', views.ActivityDetail.as_view()),
    url(r'^tag/$', views.TagList.as_view()),
    url(r'^tag/(?P<pk>[0-9]+)/$', views.TagDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
