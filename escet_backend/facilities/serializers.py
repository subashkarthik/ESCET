from rest_framework import serializers
from .models import Facility


class FacilitySerializer(serializers.ModelSerializer):
    """Serializer for Facility model"""
    
    class Meta:
        model = Facility
        fields = ['id', 'name', 'icon', 'description', 'images', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']
