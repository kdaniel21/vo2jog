<template>
  <div>
    <div class="h6">{{ location }}</div>
    <location-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Location',
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
