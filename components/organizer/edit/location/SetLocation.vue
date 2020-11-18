<template>
  <b-form inline class="mb-3" @submit.prevent="saveLocation">
    <location-search v-model="location" class="flex-grow-1 mr-2" />
    <b-button variant="primary" type="submit" class="btn-block-xs-only mb-md-3">
      Save
    </b-button>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import LocationSearch from '@/components/organizer/edit/location/LocationSearch';

export default {
  name: 'SetLocation',
  components: { LocationSearch },
  mixins: [toaster],
  data() {
    return {
      location: this.$store.state.organizer.events.selectedEvent.location,
    };
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    async saveLocation() {
      try {
        const { location } = this;
        await this.updateEvent({ location });

        this.successToast('Location updated!');
      } catch {
        this.successToast('Something went wrong. Could not update location!');
      }
    },
  },
};
</script>

<style></style>
