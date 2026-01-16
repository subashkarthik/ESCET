from rest_framework import serializers
from .models import ManagementMember


class ManagementMemberSerializer(serializers.ModelSerializer):
    """Serializer for ManagementMember model"""
    
    class Meta:
        model = ManagementMember
        fields = ['id', 'name', 'role', 'image', 'message', 'path', 'order', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']
