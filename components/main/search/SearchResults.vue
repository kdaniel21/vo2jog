<template>
  <section id="search-results" class="container">
    <!-- NO RESULTS -->
    <p v-if="!events.length" class="has-text-centered py-6">
      {{ $t('search.no_results') }}
    </p>

    <div v-if="isCardView" id="card-deck">
      <event-card v-for="event in events" :key="event.id" :event="event" />
    </div>

    <event-list-item
      v-for="event in events"
      v-else
      :key="event.id"
      :event="event"
      class="mb-3"
    />

    <b-pagination
      v-if="resultsPerPage < totalNumOfResults"
      v-model="currentPage"
      :total="totalNumOfResults"
      :per-page="resultsPerPage"
      order="is-centered"
      class="mt-5"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import windowSize from '@/mixins/window-size';

export default {
  name: 'SearchResults',
  mixins: [windowSize],
  computed: {
    ...mapState('events', ['events', 'resultsPerPage', 'totalNumOfResults']),
    isCardView() {
      return this.width > 768;
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

<style scoped>
#card-deck {
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  grid-gap: 1rem;
}
</style>
