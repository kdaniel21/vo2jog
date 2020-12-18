<template>
  <b-navbar
    id="event-page-bottom-bar"
    type="light"
    variant="light"
    class="w-100 px-0"
  >
    <b-container fluid="md">
      <b-navbar-brand class="font-weight-bold mr-1 d-none d-md-block">
        Vienna Virtual Run
      </b-navbar-brand>
      <b-badge
        v-for="category in categories"
        :key="category"
        class="mr-1 text-capitalize overflow-hidden d-none d-md-block"
        size="lg"
      >
        {{ category }}
      </b-badge>

      <b-navbar-nav
        class="ml-auto align-items-center justify-content-between justify-content-md-end flex-grow-1"
      >
        <h5 v-if="cheapestEntry" class="mr-2 mt-auto">
          Entries from {{ cheapestEntry }}&euro;
        </h5>
        <div>
          <b-button
            v-b-tooltip.hover
            variant="secondary"
            class="mr-1"
            title="Share"
          >
            <fa icon="share-alt" fixed-width />
          </b-button>
          <b-button
            v-b-tooltip.hover
            variant="secondary"
            class="mr-1"
            title="Bookmark Race"
          >
            <fa icon="bookmark" fixed-width />
          </b-button>
        </div>
        <b-button v-b-tooltip.hover title="Let's do this!" variant="primary">
          <fa icon="sign-in-alt" fixed-width />
          <span>Sign up</span>
        </b-button>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
import displayEvent from '~/mixins/main/display-event';

export default {
  name: 'EventPageBottomBar',
  mixins: [displayEvent],
  props: { event: { type: Array, default: () => [] } },
  computed: {
    cheapestEntry() {
      if (!this.event.competitions[0].currentFee) return null;

      return this.event.competitions.reduce((cheapest, { currentFee }) =>
        currentFee.price < cheapest ? currentFee.price : cheapest
      );
    },
  },
};
</script>

<style scoped>
#event-page-bottom-bar {
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
}
.navbar-expand > * {
  padding-left: inherit;
  padding-right: inherit;
}
</style>
