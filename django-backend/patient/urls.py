from django.urls import path, include
from patient.views import (
    PatientRegistrationView,
    PatientProfileAPI,
    AppointmentAPI,
    MessageAPI,
    ChatPeopleAPI,
)

urlpatterns = [
    path(
        "registration/", PatientRegistrationView.as_view(), name="patient_registration"
    ),
    path("profile/", PatientProfileAPI.as_view(), name="patient_profile"),
    path("appointment/", AppointmentAPI.as_view(), name="appointment"),
    path("chat-people/", ChatPeopleAPI.as_view(), name="chat_people"),
    path("message/<int:doctor_id>", MessageAPI.as_view(), name="message_patient"),
]
