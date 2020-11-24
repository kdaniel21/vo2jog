<template>
  <b-form id="basic" @submit.prevent="save">
    <form-group
      label="Event Name"
      label-for="name-input"
      :validator="$v.form.name"
    >
      <b-form-input
        id="name-input"
        v-model="form.name"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        required
        placeholder="Sparkasse Neufelder Adventslauf"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <!-- START DATE & TIME -->
    <b-row class="mx-0 w-100">
      <form-group
        :label="form.multiDay ? 'Start Date' : 'Date'"
        label-for="start-input"
        class="mr-md-4 flex-grow-1"
        :validator="$v.form.startDay"
      >
        <b-form-datepicker
          id="start-input"
          v-model="form.startDay"
          slot-scope="{ attrs, listeners }"
          v-bind="attrs"
          required
          placeholder="Day of your event"
          value-as-date
          v-on="listeners"
        ></b-form-datepicker>
      </form-group>

      <form-group
        label="Time"
        label-for="time-input"
        class="flex-grow-1"
        :validator="$v.form.startTime"
      >
        <b-form-timepicker
          id="time-input"
          v-model="form.startTime"
          slot-scope="{ attrs, listeners }"
          v-bind="attrs"
          locale="hu"
          v-on="listeners"
        ></b-form-timepicker>
      </form-group>
    </b-row>

    <!-- MULTI DAY CHECKBOX -->
    <form-group class="mb-3" :validator="$v.form.multiDay">
      <b-form-checkbox
        id="multi-day-input"
        v-model="form.multiDay"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        switch
        v-on="listeners"
      >
        Multi-day event
      </b-form-checkbox>
    </form-group>

    <!-- END DATE -->
    <form-group
      v-if="form.multiDay"
      label="End Date"
      label-for="end-input"
      :validator="$v.form.endDay"
    >
      <b-form-datepicker
        id="end-input"
        v-model="form.endDay"
        slot-scope="{ attrs, listeners }"
        required
        placeholder="Last day of your event"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-datepicker>
    </form-group>

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
      v-model="form.image"
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
import { required, requiredIf, minValue } from 'vuelidate/lib/validators';
import { alphaNumWhiteDiacritic } from '@/plugins/vuelidate/custom-validators';
import toaster from '@/mixins/toaster';
import MakePublicButton from '@/components/organizer/edit/basic/MakePublicButton';

export default {
  name: 'Basic',
  components: { MakePublicButton },
  mixins: [toaster],
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  data() {
    return {
      form: {
        name: this.$store.state.organizer.events.selectedEvent.name,
        startDay: this.$store.state.organizer.events.selectedEvent.startDate,
        startTime: this.$dateFns.format(
          this.$store.state.organizer.events.selectedEvent.startDate,
          'HH:mm'
        ),
        multiDay: !!this.$store.state.organizer.events.selectedEvent.endDate,
        endDay: this.$store.state.organizer.events.selectedEvent.endDate,
        image: null,
      },
    };
  },
  validations: {
    form: {
      name: { required, alphaNumWhiteDiacritic },
      startDay: {
        required: requiredIf(form => form.startTime),
        dateLater: minValue(new Date()),
      },
      startTime: {},
      multiDay: {},
      endDay: { required: requiredIf(form => form.multiDay) },
    },
  },
  computed: {
    startDate() {
      const splittedStartTime = this.form.startTime.split(':');
      const hours = splittedStartTime[0];
      const minutes = splittedStartTime[1];
      return this.$dateFns.set(this.form.startDay, { hours, minutes });
    },
    endDate() {
      return this.form.multiDay ? this.form.endDay : null;
    },
    imagePath() {
      // Current image is only shown but not loaded to the file uploader input
      const image =
        this.form.image ||
        this.$store.state.organizer.events.selectedEvent.image;
      if (!image) return;

      return typeof image === 'object'
        ? URL.createObjectURL(image)
        : `${this.$config.staticUrl}/events/img/${image}`;
    },
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    async save() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      try {
        const data = {
          name: this.form.name,
          startDate: this.startDate,
          endDate: this.endDate,
        };

        const formData = new FormData();
        /* Append all data as string and parse on API/server side
        Else it couldn't send null and undefined
        Since formData can send either string or file */
        formData.append('data', JSON.stringify(data));
        if (this.form.image)
          formData.append('image', this.form.image, this.form.image.filename);

        await this.updateEvent(formData);
        this.successToast('Event successfully updated!');
      } catch {
        this.errorToast('Something went wrong. Please try again!');
      }
    },
  },
};
</script>
