from django.contrib import admin
from .models import Enquiry


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'email', 'phone', 'department', 'status', 'created_at']
    list_filter = ['status', 'department', 'created_at']
    search_fields = ['first_name', 'email', 'phone', 'department', 'comments']
    ordering = ['-created_at']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('first_name', 'email', 'phone')
        }),
        ('Enquiry Details', {
            'fields': ('department', 'comments', 'status')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )
    
    actions = ['mark_as_contacted', 'mark_as_resolved']
    
    def mark_as_contacted(self, request, queryset):
        queryset.update(status='contacted')
    mark_as_contacted.short_description = "Mark selected as Contacted"
    
    def mark_as_resolved(self, request, queryset):
        queryset.update(status='resolved')
    mark_as_resolved.short_description = "Mark selected as Resolved"
