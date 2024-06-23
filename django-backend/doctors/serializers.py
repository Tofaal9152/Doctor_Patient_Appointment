from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from doctors.models import DoctorProfile, Message
from patient.models import Appointment
from allauth.account.models import EmailAddress


class DoctorCustomRegistrationSerializer(RegisterSerializer):
    doctor = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )  # by default allow_null = False
    name = serializers.CharField(required=True)
    profile_img = serializers.URLField(required=True)
    specialization = serializers.CharField(required=True)
    from_time = serializers.TimeField(required=True)
    to_time = serializers.TimeField(required=True)
    available_days = serializers.CharField(required=True)
    description = serializers.CharField(required=True)

    def get_cleaned_data(self):
        data = super(DoctorCustomRegistrationSerializer, self).get_cleaned_data()
        extra_data = {
            "name": self.validated_data.get("name", ""),
            "profile_img": self.validated_data.get("profile_img", ""),
            "specialization": self.validated_data.get("specialization", ""),
            "from_time": self.validated_data.get("from_time", ""),
            "to_time": self.validated_data.get("to_time", ""),
            "available_days": self.validated_data.get("available_days", ""),
            "description": self.validated_data.get("description", ""),
        }
        data.update(extra_data)
        return data

    def save(self, request):
        user = super(DoctorCustomRegistrationSerializer, self).save(request)
        user.save()
        doctor = DoctorProfile(
            doctor=user,
            name=self.cleaned_data.get("name"),
            profile_img=self.cleaned_data.get("profile_img"),
            specialization=self.cleaned_data.get("specialization"),
            from_time=self.cleaned_data.get("from_time"),
            to_time=self.cleaned_data.get("to_time"),
            available_days=self.cleaned_data.get("available_days"),
            description=self.cleaned_data.get("description"),
        )
        doctor.save()

        # Mark the email as verified
        email_address = EmailAddress.objects.get(user=user, email=user.email)
        email_address.verified = True
        email_address.save()

        return user


class DoctorSerializer(serializers.ModelSerializer):
    doctor = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        fields = "__all__"
        model = DoctorProfile


class AppointPatientSerializer(serializers.Serializer):
    time = serializers.TimeField()
    status = serializers.CharField(required=True)
    appointment_id = serializers.IntegerField(required=True)


class AppointmentSerializer(serializers.ModelSerializer):
    # patient = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        exclude = ("doctor", "emailed")
        model = Appointment
        depth = 1


class MessageSerializer(serializers.ModelSerializer):
    doctor = serializers.PrimaryKeyRelatedField(read_only=True)
    patient = serializers.PrimaryKeyRelatedField(read_only=True)
    is_patient = serializers.BooleanField(read_only=True)
    sent = serializers.DateTimeField(format="%d/%m/%y %I:%M%p", read_only=True)
    doc_profile_img = serializers.DateTimeField(source="doctor.profile_img", read_only=True)
    pat_profile_img = serializers.DateTimeField(source="patient.profile_img", read_only=True)

    class Meta:
        fields = "__all__"
        model = Message
