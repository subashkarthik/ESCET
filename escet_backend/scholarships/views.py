from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Scholarship
from .serializers import ScholarshipSerializer


class ScholarshipViewSet(viewsets.ModelViewSet):
    """ViewSet for Scholarship CRUD operations"""
    queryset = Scholarship.objects.filter(is_active=True)
    serializer_class = ScholarshipSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description', 'eligibility']
    ordering_fields = ['name', 'created_at']
    ordering = ['name']
