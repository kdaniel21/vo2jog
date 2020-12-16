<template>
  <div id="search-results">
    <!-- CARD DECK -->
    <b-card-group v-if="resultComponent === 'card'" deck>
      <event-card v-for="event in events" :key="event.id" :event="event" />
    </b-card-group>

    <!-- LIST VIEW -->
    <event-list-item
      v-for="event in events"
      v-else
      :key="event.id"
      :event="event"
      class="mb-3"
    />

    <!-- PAGINATION -->
    <b-pagination
      v-if="resultsPerPage < totalNumOfResults"
      v-model="currentPage"
      class="mt-3"
      align="center"
      hide-goto-end-buttons
      :per-page="resultsPerPage"
      :total-rows="totalNumOfResults"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import windowSize from '@/mixins/window-size';

export default {
  name: 'SearchResults',
  mixins: [windowSize],
  computed: {
    ...mapState('events', ['events', 'resultsPerPage', 'totalNumOfResults']),
    resultComponent() {
      return this.width <= 768 ? 'list' : 'card';
    },
    currentPage: {
      get() {
        return this.$store.state.events.currentPage;
      },
      set(page) {
        this.setPage(page);
      },
    },
  },
  methods: {
    ...mapActions('events', ['setPage']),
  },
};
</script>

<style></style>
