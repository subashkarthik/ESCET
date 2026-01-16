from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    """Serializer for Contact model"""
    
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'phone', 'subject', 'message', 'is_read', 'created_at']
        read_only_fields = ['id', 'created_at', 'is_read']
