from django.contrib import admin
from .models import Scholarship


@admin.register(Scholarship)
class ScholarshipAdmin(admin.ModelAdmin):
    list_display = ['name', 'amount', 'application_deadline', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'description', 'eligibility']
    ordering = ['name']
    readonly_fields = ['created_at', 'updated_at']
