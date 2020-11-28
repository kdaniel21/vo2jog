<template>
  <div id="reset-password">
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
