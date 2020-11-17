<template>
  <div id="schedule-generator">
    <b-form inline @submit.prevent="saveScheduleItem">
      <b-form-select
        v-if="dayOptions"
        v-model="form.day"
        :options="dayOptions"
        class="mb-2 mr-sm-2"
      ></b-form-select>

      <b-form-timepicker
        id="starttime-input"
        v-model="form.startTime"
        placeholder="Time"
        locale="hu"
        class="mb-2 mr-sm-2"
      ></b-form-timepicker>

      <b-form-input
        id="name-input"
        v-model="form.name"
        placeholder="Name"
        class="mb-2 mr-sm-2 flex-grow-1"
      ></b-form-input>

      <b-button variant="primary" class="mb-2 btn-block-xs-only" type="submit"
        >Save</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import toaster from '@/mixins/toaster';

export default {
  name: 'ScheduleGenerator',
  mixins: [toaster],
  data() {
    return {
      form: {
        day: 1,
        startTime: null,
        name: null,
      },
    };
  },
  computed: {
    ...mapState('organizer', ['selectedEvent']),
    dayOptions() {
      if (!this.selectedEvent.endDate || !this.selectedEvent.startDate) return;

      const numOfDays = Math.abs(
        this.$dateFns.differenceInDays(
          this.selectedEvent.startDate,
          this.selectedEvent.endDate
        )
      );
      if (numOfDays === 0) return;

      const dayOptions = [];
      for (let i = 0; i <= numOfDays; i++)
        dayOptions.push({ text: `Day ${i + 1}`, value: i + 1 });
      return dayOptions;
    },
  },
  methods: {
    ...mapActions('organizer', ['addItem']),
    async saveScheduleItem() {
      try {
        const { _id } = this.selectedEvent;
        const url = `/api/events/${_id}/schedule/${this.form.day}`;
        const { name, startTime } = this.form;
        const data = { name, startTime };

        await this.addItem({ name: 'schedule', data, url });

        this.successToast('Event added successfully!');
      } catch {
        this.errorToast('Could not add. Please try again!');
      }
    },
  },
};
</script>
