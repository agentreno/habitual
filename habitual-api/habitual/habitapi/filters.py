from rest_framework import filters, exceptions
from django.contrib.auth.models import AnonymousUser


class IsOwnerFilterBackend(filters.BaseFilterBackend):
    """
    Filter that only allows users to see their own objects
    """
    def filter_queryset(self, request, queryset, view):
        if isinstance(request.user, AnonymousUser):
            raise exceptions.NotAuthenticated
        return queryset.filter(owner=request.user)
