# yourapp/tasks.py
from celery import shared_task
from django.core.mail import send_mail
from django.utils import timezone
from datetime import timedelta
from patient.models import Appointment
from django_celery_beat.models import PeriodicTask, IntervalSchedule
import pytz


@shared_task
def send_appointment_reminders():
    target_timezone = pytz.timezone("Asia/Dhaka")
    now = timezone.now().astimezone(target_timezone)
    ten_minutes_later = now + timedelta(minutes=10)

    # print(now)
    # print(ten_minutes_later)

    appointments = Appointment.objects.filter(
        appointment_status="approved",
        appointment_date=now.date(),
        appointment_time__gte=now.time(),
        appointment_time__lte=ten_minutes_later.time(),
        emailed=False,
    )

    for appointment in appointments:
        patient_email = appointment.patient.patient.email
        subject = "Appointment Reminder"
        message = f"Dear {appointment.patient.name},\n\nThis is a reminder for your appointment with Dr. {appointment.doctor.name} scheduled at {appointment.appointment_time}."
        print(message)
        send_mail(
            subject,
            message,
            "noreply.service.tanimsk@gmail.com",  # Replace with your email
            [patient_email],
            fail_silently=False,
        )
        appointment.emailed = True
        appointment.save()

    return "reminder email sent!"


schedule, created = IntervalSchedule.objects.get_or_create(
    every=10,
    period=IntervalSchedule.SECONDS,
)
# Schedule the periodic task programmatically
PeriodicTask.objects.get_or_create(
    name="Send Reminders",
    task="doctors.tasks.send_appointment_reminders",
    interval=schedule,
    # args=json.dumps(["hello"]),
)
