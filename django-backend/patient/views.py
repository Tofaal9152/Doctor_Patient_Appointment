from django.shortcuts import render
from dj_rest_auth.registration.views import RegisterView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.db.models import Exists, OuterRef

from patient.models import PatientProfile, Appointment
from doctors.models import DoctorProfile, Message
from patient.serializers import (
    PatientCustomRegistrationSerializer,
    PatientSerializer,
    AppointmentSerializer,
    AppointmentDepthSerializer,
)
from doctors.serializers import MessageSerializer, DoctorSerializer


# Agent Registration
class PatientRegistrationView(RegisterView):
    serializer_class = PatientCustomRegistrationSerializer


class PatientProfileAPI(APIView):
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None, *args, **kwargs):
        instance = PatientProfile.objects.get(patient=request.user)
        serialized_data = self.serializer_class(instance)
        return Response(serialized_data.data)

    def put(self, request, format=None, *args, **kwargs):
        serialized_data = self.serializer_class(data=request.data)

        if serialized_data.is_valid(raise_exception=True):
            PatientProfile.objects.filter(patient=request.user).update(
                **serialized_data.data
            )

        return Response({"status": "successfully updated"})


class AppointmentAPI(APIView):
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None, *args, **kwargs):
        instance = Appointment.objects.filter(patient=request.user.patient).order_by(
            "appointment_date"
        )
        serialized_data = AppointmentDepthSerializer(instance, many=True)
        return Response(serialized_data.data)

    def post(self, request, format=None, *args, **kwargs):
        serialized_data = self.serializer_class(data=request.data)

        if serialized_data.is_valid(raise_exception=True):
            serialized_data_copy = serialized_data.data.copy()
            doctor_instance = DoctorProfile.objects.get(
                id=serialized_data_copy.pop("doctor")
            )
            Appointment.objects.create(
                patient=request.user.patient,
                **serialized_data_copy,
                doctor=doctor_instance
            )

        return Response({"status": "successful"})


class ChatPeopleAPI(APIView):
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None, *args, **kwargs):
        doctors_with_messages = DoctorProfile.objects.filter(
            Exists(Appointment.objects.filter(doctor=OuterRef("pk")))
        )

        if doctors_with_messages.count() == 0:
            return Response([])

        return Response(self.serializer_class(doctors_with_messages, many=True).data)


class MessageAPI(APIView):
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, doctor_id=None, format=None, *args, **kwargs):
        if doctor_id is None:
            return Response({"status": "patient ID missing"})

        instances = Message.objects.filter(
            doctor=doctor_id, patient=request.user.patient
        ).order_by("sent")
        return Response(self.serializer_class(instances, many=True).data)

    def post(self, request, doctor_id=None, format=None, *args, **kwargs):
        serialized_data = self.serializer_class(data=request.data)

        if serialized_data.is_valid(raise_exception=True):
            Message.objects.create(
                patient=request.user.patient,
                doctor_id=doctor_id,
                message=serialized_data.data.get("message"),
                is_patient=True,
            )

        return Response({"status": "success"})
