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
        Multi-day event
      </b-form-checkbox>
    </div>

    <!-- END DATE -->
    <b-form-group v-if="input.multiDay" label="End Date" label-for="end-input">
      <b-form-datepicker
        id="end-input"
        v-model="input.endDay"
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
    <div class="d-flex justify-content-between flex-wrap mt-3">
      <make-public-button />

      <b-button
        type="submit"
        variant="primary"
        class="btn-block-xs-only mt-2 mt-sm-0"
      >
        Save
      </b-button>
    </div>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import MakePublicButton from '@/components/organizer/edit/basic/MakePublicButton';

export default {
  name: 'Basic',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { MakePublicButton },
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
        endDay: this.$store.state.organizer.selectedEvent.endDate,
        image: null,
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
    endDate() {
      return this.input.multiDay ? this.input.endDay : null;
    },
    imagePath() {
      // Current image is only shown but not loaded to the file uploader input
      const image =
        this.input.image || this.$store.state.organizer.selectedEvent.image;
      if (!image) return;

      return typeof image === 'object'
        ? URL.createObjectURL(image)
        : `${this.$config.staticUrl}/events/img/${image}`;
    },
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    async save() {
      try {
        const data = {
          name: this.input.name,
          startDate: this.startDate,
          endDate: this.endDate,
        };

        const formData = new FormData();
        /* Append all data as string and parse on API/server side
        Else it couldn't send null and undefined
        Since formData can send either string or file */
        formData.append('data', JSON.stringify(data));
        if (this.input.image)
          formData.append('image', this.input.image, this.input.image.filename);

        await this.updateEvent(formData);
        this.successToast('Event successfully updated!');
      } catch (err) {
        console.log(err);
        this.errorToast('Something went wrong. Please try again!');
      }
    },
  },
};
</script>
