from rest_framework import serializers
from .models import News


class NewsSerializer(serializers.ModelSerializer):
    """Serializer for News model"""
    
    class Meta:
        model = News
        fields = ['id', 'title', 'description', 'date', 'category', 'image', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']
