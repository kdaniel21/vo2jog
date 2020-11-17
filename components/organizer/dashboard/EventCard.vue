<template>
  <b-card id="event-card" no-body @click="selectAndEdit">
    <b-card-body class="d-flex flex-column justify-content-between">
      <h5>{{ event.name }}</h5>
      <b-badge style="display: inline-table" variant="success"
        >{{
          event.public && event.approved
            ? 'Public'
            : event.public
            ? 'Under approval'
            : 'Draft'
        }}
      </b-badge>
    </b-card-body>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions('organizer/events', ['selectEvent']),
    async selectAndEdit() {
      await this.selectEvent(this.event._id);
      this.$router.push('/organizers/edit/basic');
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 300px;
  height: 150px;
}
</style>
