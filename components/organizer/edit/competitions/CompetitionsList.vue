<template>
  <div id="competitions-list">
    <div
      v-for="{ name, id } in selectedEvent.competitions"
      :key="id"
      class="card"
    >
      <header class="card-header">
        <nuxt-link
          :to="`/organizers/edit/competitions/${id}`"
          class="card-header-title"
        >
          {{ name }}
        </nuxt-link>

        <div class="card-header-icon" @click="onDelete({ id })">
          <b-icon icon="trash-alt" />
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CompetitionsList',
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
  },
  methods: {
    ...mapActions('organizer/events', ['showDeleteConfirm']),
    onDelete({ id }) {
      this.showDeleteConfirm({ name: 'competitions', itemId: id });
    },
  },
};
</script>

<style></style>
