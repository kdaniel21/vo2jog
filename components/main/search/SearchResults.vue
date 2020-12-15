<template>
  <div id="search-results">
    <!-- CARD DECK -->
    <b-card-group v-if="resultComponent === 'card'" deck>
      <event-card v-for="event in events" :key="event._id" :event="event" />
    </b-card-group>

    <!-- LIST VIEW -->
    <event-list-item
      v-for="event in events"
      v-else
      :key="event._id"
      :event="event"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import windowSize from '@/mixins/window-size';

export default {
  name: 'SearchResults',
  mixins: [windowSize],
  computed: {
    ...mapState('events', ['events']),
    resultComponent() {
      return this.width <= 768 ? 'list' : 'card';
    },
  },
};
</script>

<style></style>
