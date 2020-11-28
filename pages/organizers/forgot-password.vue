<template>
  <div id="forgot-password">
    <h3>Reset Your Password</h3>
    <div v-if="!emailSent">
      <p>
        Have you forgotten your password? No problem, happens to everyone! Just
        enter the email address you are registered with and we'll send you an
        email where you can set up a new password.
      </p>

      <forgot-password-form @sent="() => (emailSent = true)" />
    </div>
    <success-panel v-else />
  </div>
</template>

<script>
import toaster from '@/mixins/toaster';
import ForgotPasswordForm from '@/components/organizer/auth/forgot-password/ForgotPasswordForm';
import SuccessPanel from '@/components/organizer/auth/forgot-password/SuccessPanel';

export default {
  components: { ForgotPasswordForm, SuccessPanel },
  mixins: [toaster],
  data() {
    return {
      emailSent: false,
    };
  },
};
</script>
