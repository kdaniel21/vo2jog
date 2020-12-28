<template>
  <div id="edit-location">
    <h2 class="title">{{ $t('common.location') }}</h2>

    <location-autocomplete v-model="form.location" />

    <div v-if="form.location" class="my-3">
      <location-data :location="form.location" class="box" />

      <button-right
        v-if="!showMap"
        type="is-info"
        icon-left="map-marked-alt"
        @click="showMap = true"
      >
        {{ $t('organizer.info.show_map') }}
      </button-right>

      <location-map
        v-if="showMap && form.location"
        height="400px"
        :location="form.location.coordinates"
      />
    </div>

    <button-right
      class="mt-3"
      :disabled="!form.location"
      @click="updateEvent(form)"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EditLocation',
  data() {
    return {
      showMap: false,
      form: {
        location: this.$store.state.organizer.events.selectedEvent.location,
      },
    };
  },
  watch: {
    'form.location'() {
      this.showMap = true;
    },
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
  },
};
</script>

<style></style>
