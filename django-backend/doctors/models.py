from django.db import models
from django.conf import settings

# from patient.models import PatientProfile


class DoctorProfile(models.Model):
    name = models.CharField(max_length=100)
    profile_img = models.URLField()
    specialization = models.CharField(max_length=100)
    from_time = models.TimeField()
    to_time = models.TimeField()
    available_days = models.CharField(max_length=100, default="0123456")
    description = models.TextField(blank=True, null=True)

    doctor = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="doctor"
    )


class Message(models.Model):
    message = models.TextField()
    doctor = models.ForeignKey(
        DoctorProfile, on_delete=models.CASCADE, related_name="message_doctor"
    )
    patient = models.ForeignKey(
        "patient.PatientProfile",
        on_delete=models.CASCADE,
        related_name="message_patient",
    )
    sent = models.DateTimeField(auto_now_add=True)
    is_patient = models.BooleanField(default=False)


class MedicalRecord(models.Model):
    file_url = models.URLField()
    doctor = models.ForeignKey(
        DoctorProfile, on_delete=models.CASCADE, related_name="medical_record_doctor"
    )
    patient = models.ForeignKey(
        "patient.PatientProfile",
        on_delete=models.CASCADE,
        related_name="medical_record_patient",
    )
    uploaded_on = models.DateTimeField(auto_now_add=True)
