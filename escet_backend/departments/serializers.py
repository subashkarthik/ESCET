from rest_framework import serializers
from .models import Department


class DepartmentSerializer(serializers.ModelSerializer):
    """Serializer for Department model"""
    
    class Meta:
        model = Department
        fields = ['id', 'name', 'short_name', 'hod', 'description', 'labs', 'image', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

    def validate_labs(self, value):
        """Ensure labs is a list"""
        if not isinstance(value, list):
            raise serializers.ValidationError("Labs must be a list of strings")
        return value
