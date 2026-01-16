from rest_framework import serializers
from .models import Enquiry


class EnquirySerializer(serializers.ModelSerializer):
    """Serializer for Enquiry model"""
    
    class Meta:
        model = Enquiry
        fields = ['id', 'first_name', 'email', 'phone', 'department', 'comments', 'status', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_email(self, value):
        """Validate email format"""
        if not value:
            raise serializers.ValidationError("Email is required")
        return value.lower()

    def validate_phone(self, value):
        """Validate phone number"""
        if not value.replace('+', '').replace('-', '').replace(' ', '').isdigit():
            raise serializers.ValidationError("Invalid phone number format")
        return value
