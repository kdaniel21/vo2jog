<template>
  <div id="location">
    <h3>Add Location</h3>
    <p>
      It's handy to use the location of your race center. Users might filter
      events using this location.
    </p>

    <set-location />

    <client-only>
      <h3>Selected Location</h3>
      <location-map
        v-if="location && location.coordinates"
        :lng="location.coordinates[0]"
        :lat="location.coordinates[1]"
      />
      <p v-else>Plese add a location to display on the map!</p>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SetLocation from '@/components/organizer/edit/location/SetLocation';
import LocationMap from '@/components/organizer/edit/location/LocationMap';

export default {
  components: { SetLocation, LocationMap },
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  computed: {
    ...mapState({
      location: state => state.organizer.events.selectedEvent.location,
    }),
  },
};
</script>

<style></style>
