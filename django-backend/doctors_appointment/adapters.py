from allauth.account.adapter import DefaultAccountAdapter

class MyAccountAdapter(DefaultAccountAdapter):
    def confirm_email(self, request, email_address):
        print("test")
        email_address.verified = True
        email_address.save()