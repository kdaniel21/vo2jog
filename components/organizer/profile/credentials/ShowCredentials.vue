<template>
  <layout
    title="Credentials"
    :props="['email', 'password']"
    :data="credentials"
    @edit="$emit('edit')"
  />
</template>

<script>
import { mapState } from 'vuex';
import Layout from '@/components/organizer/profile/Layout';

export default {
  name: 'ShowCredentials',
  components: { Layout },
  computed: {
    ...mapState('auth', ['user']),
    credentials() {
      return {
        email: this.user.email,
        password: '••••••••',
      };
    },
  },
};
</script>

<style></style>
