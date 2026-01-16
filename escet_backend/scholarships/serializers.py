from rest_framework import serializers
from .models import Scholarship


class ScholarshipSerializer(serializers.ModelSerializer):
    """Serializer for Scholarship model"""
    
    class Meta:
        model = Scholarship
        fields = ['id', 'name', 'description', 'eligibility', 'amount', 'application_deadline', 'link', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']
