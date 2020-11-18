<template>
  <div id="profile">
    <h3 class="mb-5">Good to see you back {{ $auth.user.name }}!</h3>

    <profile />
    <hr class="mt-5" />

    <credentials />
  </div>
</template>

<script>
import Profile from '@/components/organizer/profile/profile/Profile';
import Credentials from '@/components/organizer/profile/credentials/Credentials';

export default {
  layout: 'organizer',
  middleware: ['auth'],
  components: { Profile, Credentials },
};
</script>

<style></style>
