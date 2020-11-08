<template>
  <b-form id="basic" @submit.prevent="save">
    <b-form-group label="Event Name" label-for="name-input">
      <b-form-input
        id="name-input"
        v-model="input.name"
        required
        placeholder="Sparkasse Neufelder Adventslauf"
      ></b-form-input>
    </b-form-group>

    <!-- START DATE & TIME -->
    <b-row class="mx-0 w-100">
      <b-form-group
        :label="input.multiDay ? 'Start Date' : 'Date'"
        label-for="start-input"
        class="mr-md-4 flex-grow-1"
      >
        <b-form-datepicker
          id="start-input"
          v-model="input.startDay"
          required
          placeholder="Day of your event"
          value-as-date
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group label="Time" label-for="time-input" class="flex-grow-1">
        <b-form-timepicker
          id="time-input"
          v-model="input.startTime"
          locale="hu"
        ></b-form-timepicker>
      </b-form-group>
    </b-row>

    <!-- MULTI DAY CHECKBOX -->
    <div class="mb-3">
      <b-form-checkbox id="multi-day-input" v-model="input.multiDay" switch>
        Multiple day event
      </b-form-checkbox>
    </div>

    <!-- END DATE -->
    <b-form-group v-if="input.multiDay" label="End Date" label-for="end-input">
      <b-form-datepicker
        id="end-input"
        v-model="input.endDate"
        required
        placeholder="Last day of your event"
      ></b-form-datepicker>
    </b-form-group>

    <!-- CATEGORIES -->

    <!-- IMAGE PREVIEW  -->
    <b-img
      v-if="imagePath"
      :src="imagePath"
      height="200"
      class="d-block mx-auto mb-3"
    ></b-img>
    <!-- IMAGE -->
    <b-form-file
      v-model="input.image"
      placeholder="Choose a file or drop it here"
      drop-placeholder="Drop file here"
    ></b-form-file>

    <!-- SAVE BUTTON -->
    <b-button
      type="submit"
      variant="primary"
      class="btn-block-xs-only float-right mt-3"
    >
      Save
    </b-button>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';

export default {
  name: 'Basic',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  mixins: [toaster],
  data() {
    return {
      input: {
        name: this.$store.state.organizer.selectedEvent.name,
        startDay: this.$store.state.organizer.selectedEvent.startDate,
        startTime: this.$dateFns.format(
          this.$store.state.organizer.selectedEvent.startDate,
          'HH:mm'
        ),
        multiDay: !!this.$store.state.organizer.selectedEvent.endDate,
        endDate: this.$store.state.organizer.selectedEvent.endDate,
        image: this.$store.state.organizer.selectedEvent.image,
      },
    };
  },
  computed: {
    startDate() {
      const splittedStartTime = this.input.startTime.split(':');
      const hours = splittedStartTime[0];
      const minutes = splittedStartTime[1];
      return this.$dateFns.set(this.input.startDay, { hours, minutes });
    },
    imagePath() {
      return typeof this.input.image === 'object'
        ? URL.createObjectURL(this.input.image)
        : `${this.$config.staticUrl}/img/events/${this.input.image}`;
    },
  },
  methods: {
    ...mapActions('organizer', ['updateEvent']),
    createFormData() {
      const formData = new FormData();

      if (this.input.name) formData.append('name', this.input.name);
      if (this.input.image)
        formData.append('image', this.input.image, this.input.image.filename);
      if (this.input.startDate) formData.append('startDate', this.startDate);
      if (this.input.endDate) formData.append('endDate', this.input.endDate);

      return formData;
    },
    async save() {
      try {
        const formData = this.createFormData();
        await this.updateEvent(formData);
        this.successToast('Event successfully updated!');
      } catch {
        this.errorToast('Something went wrong. Please try again!');
      }
    },
  },
};
</script>
