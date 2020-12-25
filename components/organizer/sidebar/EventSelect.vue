<template>
  <b-autocomplete
    id="event-select"
    :value="selectedEvent ? selectedEvent.name : null"
    :data="events"
    field="name"
    :placeholder="$t('organizer_sidebar.select_event')"
    :loading="loading"
    open-on-focus
    @select="event => selectEvent(event.id)"
    @focus="initEvents"
  >
    <template #header>
      <span class="is-clickable" @click="onCreateEvent">
        <b-icon icon="plus-circle" />
        <span>{{ $t('organizer_create_event.title') }}</span>
      </span>
    </template>
  </b-autocomplete>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import createEvent from '@/mixins/organizer/create-event';

export default {
  name: 'EventSelect',
  mixins: [createEvent],
  data() {
    return {
      loading: false,
    };
  },
  fetch() {
    return this.preSelectEvent();
  },
  fetchOnServer: false,
  computed: {
    ...mapState('organizer/events', ['events', 'selectedEvent']),
  },
  methods: {
    ...mapActions('organizer/events', [
      'preSelectEvent',
      'fetchEvents',
      'selectEvent',
    ]),
    async initEvents() {
      if (this.events.length) return;

      this.loading = true;
      await this.fetchEvents();
      this.loading = false;
    },
  },
};
</script>

<style></style>
