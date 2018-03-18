from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status


class NestedCollectionMixin:
    def get_queryset(self):
        collection_id = self.kwargs.get('pk', self.kwargs.get('pk1', None))
        query_filter = {
            f'{self.collection_field}__id': collection_id
        }
        return self.queryset.filter(**query_filter)


class NestedResourceDetailMixin(NestedCollectionMixin):
    """
    Changes the behaviour of a nested resource detail endpoint:
    - DELETE /parent/:id/child/:id removes the association between child and
      parent but does not destroy the child instance
    - POST /parent/:id/child/:id creates an association between a parent and an
      existing child, it does not create a new instance
    """
    def perform_destroy(self, instance):
        # Instead of deleting the instance, take it out of the parent
        # resource's manytomany relationship
        relation_manager = getattr(instance, self.collection_field)
        parent_queryset = relation_manager.model
        parent_instance = parent_queryset.objects.get(pk=self.kwargs['pk1'])
        relation_manager.remove(parent_instance)
        return

    def post(self, request, *args, **kwargs):
        # Find the existing child instance
        child_instance = get_object_or_404(self.queryset, pk=self.kwargs['pk2'])

        # Find the existing parent instance
        relation_manager = getattr(child_instance, self.collection_field)
        parent_queryset = relation_manager.model
        parent_instance = parent_queryset.objects.get(pk=self.kwargs['pk1'])

        # Add an association from the child to the parent
        relation_manager.add(parent_instance)

        # Return a representation of the newly added Tag
        serializer = self.get_serializer(child_instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class NestedResourceListMixin(NestedCollectionMixin):
    """
    Changes the behaviour of a nested resource list endpoint:
    - POST /parent/:id/child/ creates a child entity with association to parent built in
    """
    def perform_create(self, serializer):
        new_child = serializer.save()
        relation_manager = getattr(new_child, self.collection_field)
        parent_queryset = relation_manager.model
        parent_instance = parent_queryset.objects.get(pk=self.kwargs['pk'])
        relation_manager.add(parent_instance)
        return
