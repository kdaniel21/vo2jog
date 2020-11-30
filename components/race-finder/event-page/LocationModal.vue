<template>
  <div v-if="location && location.position">
    <b-button
      v-b-modal.location-modal
      variant="outline-primary"
      class="btn-block-xs-only"
    >
      <fa icon="map-marked" class="fa-fw" />
      <span>Map</span>
    </b-button>

    <b-modal
      id="location-modal"
      title="Location"
      ok-only
      ok-title="Cancel"
      size="lg"
    >
      <location-map :lat="location.position.lat" :lng="location.position.lng" />
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LocationMap from '@/components/organizer/edit/location/LocationMap';

export default {
  name: 'LocationModal',
  components: { LocationMap },
  computed: {
    ...mapState({
      location: state => state.events.viewedEvent.location,
    }),
  },
};
</script>

<style></style>
