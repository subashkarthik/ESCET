from rest_framework import serializers
from .models import GalleryImage, GalleryVideo


class GalleryImageSerializer(serializers.ModelSerializer):
    """Serializer for GalleryImage model"""
    
    class Meta:
        model = GalleryImage
        fields = ['id', 'title', 'url', 'category', 'description', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class GalleryVideoSerializer(serializers.ModelSerializer):
    """Serializer for GalleryVideo model"""
    
    class Meta:
        model = GalleryVideo
        fields = ['id', 'title', 'thumbnail', 'url', 'duration', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']
