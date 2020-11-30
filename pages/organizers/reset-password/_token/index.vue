<template>
  <div id="reset-password">
    <h3>Set your new password</h3>
    <p>You can now select a new password that will replace the existing one.</p>
    <reset-password-form
      v-if="passwordResetToken"
      :token="passwordResetToken"
    />
  </div>
</template>

<script>
import ResetPasswordForm from '@/components/organizer/auth/reset-password/ResetPasswordForm';

export default {
  components: { ResetPasswordForm },
  data() {
    return {
      passwordResetToken: null,
    };
  },
  created() {
    this.passwordResetToken = this.$route.params.token;
  },
};
</script>
