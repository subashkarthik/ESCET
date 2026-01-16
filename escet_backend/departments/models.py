from django.db import models


class Department(models.Model):
    """
    Model for academic departments
    """
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=200)
    short_name = models.CharField(max_length=20)
    hod = models.CharField(max_length=100, verbose_name='Head of Department')
    description = models.TextField()
    labs = models.JSONField(default=list, help_text='List of laboratory names')
    image = models.URLField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'departments'
        ordering = ['name']
        verbose_name = 'Department'
        verbose_name_plural = 'Departments'

    def __str__(self):
        return f"{self.short_name} - {self.name}"
