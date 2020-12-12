<template>
  <div id="search">
    <search-area class="mb-3" />

    <event-list-item v-for="event in events" :key="event._id" :event="event" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('events', ['events']),
  },
};
</script>
