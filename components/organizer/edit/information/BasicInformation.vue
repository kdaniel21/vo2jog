<template>
  <div id="basic-information">
    <h2 class="title">{{ $t('organizer.info.basic_information') }}</h2>

    <form-group
      :validator="$v.form.name"
      :label="$t('organizer.info.event_name')"
      horizontal
    >
      <b-input
        v-model="form.name"
        :placeholder="$t('organizer.info.name_placeholder')"
        @input="$v.form.name.$touch()"
      />
    </form-group>

    <form-group :label="dateLabel" horizontal>
      <b-datepicker
        v-model="form.startDate"
        icon="calendar-alt"
        :placeholder="$t('organizer.info.select_date')"
      />
    </form-group>

    <form-group
      v-if="form.multiDay"
      :label="$t('organizer.info.end_date')"
      horizontal
    >
      <b-datepicker
        v-model="form.endDate"
        icon="calendar-alt"
        :placeholder="$t('organizer.info.select_date')"
      />
    </form-group>

    <!-- EVENT LENGTH -->
    <form-group :label="$t('organizer.info.event_length')" horizontal>
      <div class="is-flex is-flex-direction-column">
        <b-radio
          v-model="form.multiDay"
          name="length"
          class="mb-2"
          :native-value="false"
        >
          {{ $t('organizer.info.single_day') }}
        </b-radio>
        <b-radio v-model="form.multiDay" name="length" :native-value="true">
          {{ $t('organizer.info.multi_day') }}
        </b-radio>
      </div>
    </form-group>

    <button-right @click="onSave" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import { alphaNumWhiteDiacritic } from '@/plugins/vuelidate/custom-validators';

export default {
  name: 'BasicInformation',
  data() {
    return {
      form: {
        name: this.$store.state.organizer.events.selectedEvent.name,
        startDate: this.$store.state.organizer.events.selectedEvent.startDate,
        endDate: this.$store.state.organizer.events.selectedEvent.endDate,
        multiDay: !!this.$store.state.organizer.events.selectedEvent.endDate,
      },
    };
  },
  validations: {
    form: {
      name: { required, alphaNumWhiteDiacritic },
    },
  },
  computed: {
    dateLabel() {
      return this.form.multiDay
        ? this.$t('organizer.info.start_date')
        : this.$t('common.date');
    },
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    onSave() {
      const { name, startDate, endDate } = this.form;
      return this.updateEvent({ name, startDate, endDate });
    },
  },
};
</script>
