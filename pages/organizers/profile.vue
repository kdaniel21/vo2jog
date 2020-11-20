<template>
  <div id="profile">
    <h3 class="mb-5">Good to see you back {{ $auth.user.name }}!</h3>

    <profile />
    <hr class="mt-5" />

    <credentials />
    <hr class="mt-5" />

    <contact-people />
  </div>
</template>

<script>
import Profile from '@/components/organizer/profile/profile/Profile';
import Credentials from '@/components/organizer/profile/credentials/Credentials';
import ContactPeople from '@/components/organizer/profile/contact-people/ContactPeople';

export default {
  layout: 'organizer',
  middleware: ['auth'],
  components: { Profile, Credentials, ContactPeople },
};
</script>

<style></style>
