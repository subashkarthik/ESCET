from django.contrib import admin
from .models import ManagementMember


@admin.register(ManagementMember)
class ManagementMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'order', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'role']
    ordering = ['order', 'name']
    readonly_fields = ['created_at', 'updated_at']
