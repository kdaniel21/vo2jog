<template>
  <div id="event-page-bottom-bar" class="columns py-0 px-2">
    <div class="column is-hidden-mobile">
      <h3 class="has-text-weight-medium is-size-5">
        {{ event.name }}
      </h3>
      <h5 class="is-size-6">
        <span>
          <b-icon v-if="startDate" icon="calendar-alt" />
          {{ startDate }}
        </span>
        <span v-if="location" class="ml-3">
          <b-icon icon="map-marker-alt" /> {{ location }}
        </span>
      </h5>
    </div>

    <div
      class="column is-narrow is-flex is-align-items-center is-justify-content-space-between"
    >
      <h5 v-if="cheapestEntry" class="mr-2">
        {{ $t('event.entries_from') }}
        <span class="has-text-weight-medium">{{ cheapestEntry }}&euro;</span>
      </h5>
      <div class="b-tooltips">
        <b-tooltip
          :label="$t('event.share_tooltip')"
          type="is-info"
          class="is-hidden-tablet"
        >
          <b-button type="is-info" icon-right="share-alt"></b-button>
        </b-tooltip>
        <b-tooltip :label="$t('event.bookmark_tooltip')" type="is-info">
          <b-button type="is-info" icon-right="bookmark"></b-button>
        </b-tooltip>
        <b-tooltip :label="$t('event.signup_tooltip')">
          <b-button type="is-primary" tag="nuxt-link" to="signup">
            Sign up
          </b-button>
        </b-tooltip>
      </div>
    </div>
  </div>
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
  background-color: #fff;
}
</style>
