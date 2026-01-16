from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import ManagementMember
from .serializers import ManagementMemberSerializer


class ManagementMemberViewSet(viewsets.ModelViewSet):
    """ViewSet for ManagementMember"""
    queryset = ManagementMember.objects.filter(is_active=True)
    serializer_class = ManagementMemberSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'role']
    ordering_fields = ['order', 'name']
    ordering = ['order']
