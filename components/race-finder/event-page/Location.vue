<template>
  <div>
    <div class="h6">{{ location }}</div>
    <location-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LocationModal from '@/components/race-finder/event-page/LocationModal';

export default {
  name: 'Location',
  components: { LocationModal },
  computed: {
    ...mapState({
      location: state =>
        state.events.viewedEvent.location
          ? state.events.viewedEvent.location.title
          : null,
    }),
  },
};
</script>
