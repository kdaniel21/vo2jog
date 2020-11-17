<template>
  <div id="profile">
    <h3 class="mb-5">Good to see you back {{ $auth.user.name }}!</h3>

    <profile />
  </div>
</template>

<script>
import Profile from '@/components/organizer/profile/Profile';

export default {
  layout: 'organizer',
  middleware: ['auth'],
  components: { Profile },
};
</script>

<style></style>
