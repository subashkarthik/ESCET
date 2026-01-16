from django.db import models


class ManagementMember(models.Model):
    """
    Model for management team members (Chairman, Principal, etc.)
    """
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    image = models.URLField(max_length=500)
    message = models.TextField()
    path = models.CharField(max_length=200, help_text='Frontend route path')
    order = models.IntegerField(default=0, help_text='Display order')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'management_members'
        ordering = ['order', 'name']
        verbose_name = 'Management Member'
        verbose_name_plural = 'Management Members'

    def __str__(self):
        return f"{self.name} - {self.role}"
