class NestedCollectionMixin:
    def get_queryset(self):
        collection_id = self.kwargs.get('pk', self.kwargs.get('pk1', None))
        query_filter = {
            f'{self.collection_field}__id': collection_id
        }
        return self.queryset.filter(**query_filter)
