from django.contrib import admin
from .models import DoctorProfile, Message


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


class MessageAdmin(admin.ModelAdmin):
    list_display = ("message", "doctor", "patient", "sent", "is_patient")
    search_fields = ("message", "doctor__name", "patient__name")
    list_filter = ("sent", "is_patient")


admin.site.register(Message, MessageAdmin)
