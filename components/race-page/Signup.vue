<template>
  <div id="signup">
    <ul class="list-unstyled">
      <signup-item />
    </ul>

    <b-button class="float-right" variant="primary">Register</b-button>
  </div>
</template>

<script>
import SignupItem from '@/components/race-page/SignupItem';

export default {
  name: 'Signup',
  components: {
    SignupItem,
  },
};
</script>

<style>
</style>