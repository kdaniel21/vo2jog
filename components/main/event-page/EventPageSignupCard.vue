<template>
  <b-card id="event-page-signup-card" no-body>
    <b-card-header>
      <b-badge
        v-for="category in categories"
        :key="category"
        class="text-capitalize"
      >
        {{ category }}
      </b-badge>
    </b-card-header>

    <b-card-body>
      <h5>Sign up now!</h5>
      <h5>From {{ lowestCompetitionPrice }}&euro;</h5>

      <b-button variant="outline-primary" pill>Sign Up</b-button>
      <b-button varinat="outline-secondary" pill>Share</b-button>
    </b-card-body>
  </b-card>
</template>

<script>
import displayEvent from '@/mixins/main/display-event';

export default {
  name: 'EventPageSignupCard',
  mixins: [displayEvent],
  props: {
    event: { type: Object, default: null },
  },
  computed: {
    lowestCompetitionPrice() {
      const lowest = 0;

      return lowest;
    },
  },
};
</script>

<style></style>
