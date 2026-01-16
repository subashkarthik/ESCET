from django.db import models


class Facility(models.Model):
    """
    Model for college facilities
    """
    name = models.CharField(max_length=200)
    icon = models.CharField(max_length=50, help_text='Icon name from lucide-react')
    description = models.TextField()
    images = models.JSONField(default=list, help_text='List of image URLs')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'facilities'
        ordering = ['name']
        verbose_name = 'Facility'
        verbose_name_plural = 'Facilities'

    def __str__(self):
        return self.name
