<template>
  <div id="event-picker" class="flex-grow-1 mr-3">
    <client-only>
      <v-select
        :options="events"
        :value="selectedEvent"
        label="name"
        placeholder="Please select an event."
        :reduce="event => event._id"
        @input="selectEvent"
      />
    </client-only>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'EventPicker',
  computed: {
    ...mapState({
      events: state =>
        state.organizer.events.events.length
          ? state.organizer.events.events
          : [{ text: 'Please add an event!', disabled: true }],
      selectedEvent: state => state.organizer.events.selectedEvent,
    }),
  },
  async created() {
    await this.preSelectEvent();
  },
  methods: {
    ...mapActions('organizer/events', ['selectEvent', 'preSelectEvent']),
  },
};
</script>

<style>
#sidebar___title__ {
  width: 100%;
  font-weight: normal;
}
.b-sidebar-header {
  font-size: 1rem !important;
}
</style>
