from django.contrib import admin
from .models import DoctorProfile


class DoctorProfileAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "specialization",
        "from_time",
        "to_time",
        "available_days",
        "doctor",
        "description",
    )
    search_fields = ("name", "specialization", "doctor__username")
    list_filter = ("specialization", "available_days")


admin.site.register(DoctorProfile, DoctorProfileAdmin)
