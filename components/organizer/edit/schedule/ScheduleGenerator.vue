<template>
  <div id="schedule-generator">
    <b-form inline class="mb-2 mb-md-5" @submit.prevent="saveScheduleItem">
      <b-form-select
        v-if="dayOptions"
        v-model="form.day"
        :options="dayOptions"
        class="mr-sm-2"
      ></b-form-select>

      <form-group :validator="$v.form.startTime" class="mr-sm-2">
        <b-form-timepicker
          id="starttime-input"
          v-model="form.startTime"
          slot-scope="{ attrs, listeners }"
          v-bind="attrs"
          placeholder="Time"
          locale="hu"
          class="feedback-absolute"
          v-on="listeners"
        ></b-form-timepicker>
      </form-group>

      <form-group :validator="$v.form.name" class="flex-grow-1 mr-sm-2">
        <b-form-input
          id="name-input"
          v-model="form.name"
          slot-scope="{ attrs, listeners }"
          v-bind="attrs"
          placeholder="Name"
          class="w-100 feedback-absolute"
          v-on="listeners"
        ></b-form-input>
      </form-group>

      <b-button
        variant="primary"
        class="mb-2 btn-block-xs-only"
        type="submit"
        :disabled="$v.form.$anyError"
        >Save</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import { alphaNumWhiteDiacritic } from '@/plugins/vuelidate/custom-validators';
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
  validations: {
    form: {
      startTime: { required },
      name: {
        required,
        alphaNumWhiteDiacritic,
      },
    },
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
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
    ...mapActions('organizer/events', ['addItem']),
    async saveScheduleItem() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

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

<style>
.form-group.flex-grow-1 > div {
  width: 100%;
}
.feedback-absolute + .invalid-feedback {
  position: absolute;
}
</style>
