from django.contrib import admin
from .models import PatientProfile, Appointment


class PatientProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "age", "gender", "patient", "phone_number")
    search_fields = ("name", "patient__username")
    list_filter = ("gender",)


class AppointmentAdmin(admin.ModelAdmin):
    list_display = (
        "patient",
        "doctor",
        "appointment_date",
        "appointment_time",
        "appointment_status",
    )
    search_fields = ("patient__name", "doctor__name", "problem_description")
    list_filter = ("appointment_status", "appointment_date", "appointment_time")
    date_hierarchy = "appointment_date"


admin.site.register(PatientProfile, PatientProfileAdmin)
admin.site.register(Appointment, AppointmentAdmin)
