<template>
  <div id="schedule-list">
    <div v-for="day in selectedEvent.schedule" :key="day.day" class="mb-3">
      <h5 v-if="eventLength > 1 && day.items.length > 0">Day {{ day.day }}</h5>
      <b-list-group>
        <b-list-group-item
          v-for="{ name, startTime, id } in day.items"
          :key="name"
          class="d-flex justify-content-between"
        >
          <span>{{ $dateFns.format(startTime, 'HH:mm') }} - {{ name }}</span>

          <delete-button @delete="deleteScheduleItem(id, day)" />
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import DeleteButton from '@/components/organizer/edit/DeleteButton';

export default {
  name: 'ScheduleList',
  components: { DeleteButton },
  mixins: [toaster],
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
    eventLength() {
      if (!this.selectedEvent.endDate || !this.selectedEvent.startDate)
        return 1;

      return this.$dateFns.differenceInDays(
        this.selectedEvent.startDate,
        this.selectedEvent.endDate
      );
    },
  },
  methods: {
    ...mapActions('organizer/events', ['deleteItem']),
    async deleteScheduleItem(id, day) {
      try {
        const eventId = this.$store.state.organizer.events.selectedEvent.id;
        const url = `/api/events/${eventId}/schedule/${day.day}/${id}`;
        await this.deleteItem({ name: 'schedule', url });

        this.successToast('Removed event successfully.');
      } catch (err) {
        console.log(err);
        this.errorToast('Something went wrong! Please try again.');
      }
    },
  },
};
</script>

<style></style>
