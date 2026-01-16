from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .models import GalleryImage, GalleryVideo
from .serializers import GalleryImageSerializer, GalleryVideoSerializer


class GalleryImageViewSet(viewsets.ModelViewSet):
    """ViewSet for GalleryImage with category filtering"""
    queryset = GalleryImage.objects.filter(is_active=True)
    serializer_class = GalleryImageSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['title', 'description']
    ordering_fields = ['created_at', 'title']
    ordering = ['-created_at']


class GalleryVideoViewSet(viewsets.ModelViewSet):
    """ViewSet for GalleryVideo"""
    queryset = GalleryVideo.objects.filter(is_active=True)
    serializer_class = GalleryVideoSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title']
    ordering_fields = ['created_at', 'title']
    ordering = ['-created_at']
