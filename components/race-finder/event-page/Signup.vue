<template>
  <div id="signup">
    <ul class="list-unstyled">
      <signup-item
        v-for="competition in competitions"
        :key="competition.name"
        :competition="competition"
      />
    </ul>

    <b-button class="float-right" variant="primary">Register</b-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SignupItem from '@/components/race-finder/event-page/SignupItem';

export default {
  name: 'Signup',
  components: {
    SignupItem,
  },
  computed: {
    ...mapState({
      competitions: state => state.events.viewedEvent.competitions,
    }),
  },
};
</script>

<style></style>
