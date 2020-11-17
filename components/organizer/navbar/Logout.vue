<template>
  <fa id="logout" icon="sign-out-alt" class="mr-2" @click="logout" />
</template>

<script>
import toaster from '@/mixins/toaster';

export default {
  name: 'Logout',
  mixins: [toaster],
  methods: {
    async logout() {
      await this.$auth.logout();

      this.successToast('Successfully signed out!', 'Signed out');
    },
  },
};
</script>

<style></style>
