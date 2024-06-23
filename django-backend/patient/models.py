from django.db import models

# from doctors.models import DoctorProfile
from django.conf import settings


class PatientProfile(models.Model):
    name = models.CharField(max_length=100)
    profile_img = models.URLField()
    age = models.IntegerField()
    phone_number = models.CharField(max_length=20)
    GENDER = (
        ("male", "male"),
        ("female", "female"),
        ("others", "others"),
    )
    gender = models.CharField(max_length=10, choices=GENDER)
    patient = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="patient"
    )


class Appointment(models.Model):
    patient = models.ForeignKey(
        PatientProfile, on_delete=models.CASCADE, related_name="appointment_patient"
    )
    doctor = models.ForeignKey(
        "doctors.DoctorProfile",
        on_delete=models.CASCADE,
        related_name="appointment_doctor",
    )
    appointment_date = models.DateField()  # set by the patient
    appointment_time = models.TimeField(blank=True, null=True)  # set by the doctor
    problem_description = models.CharField(max_length=500)

    STATUS = (
        ("pending", "pending"),
        ("approved", "approved"),
        ("cancelled", "cancelled"),
    )
    appointment_status = models.CharField(
        max_length=50, choices=STATUS, default="pending"
    )
    emailed = models.BooleanField(default=False)
