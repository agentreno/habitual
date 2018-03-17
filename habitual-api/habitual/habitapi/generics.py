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
        # TODO: Instead of deleting the instance, take it out of the parent
        # resource's manytomany relationship
        relation_manager = getattr(instance, self.collection_field)
        parent_queryset = relation_manager.model
        parent_instance = parent_queryset.objects.get(pk=self.kwargs['pk1'])
        relation_manager.remove(parent_instance)
        return

    def post(self, request, *args, **kwargs):
        import pdb
        pdb.set_trace()
        return


class NestedResourceListMixin(NestedCollectionMixin):
    """
    Changes the behaviour of a nested resource list endpoint:
    - POST /parent/:id/child/ creates a child entity with association to parent built in
    """
    def perform_create(self, serializer):
        import pdb
        pdb.set_trace()
        return
