<template>
  <b-card id="right-card">
    <h5>Organizer</h5>
    <organizer-profile />

    <hr>

    <h5>Sign Up</h5>
    <signup />
  </b-card>
</template>

<script>
import OrganizerProfile from '@/components/race-page/OrganizerProfile';
import Signup from '@/components/race-page/Signup';

export default {
  name: 'RightCard',
  components: {
    OrganizerProfile,
    Signup,
  },
};
</script>

<style>
</style>