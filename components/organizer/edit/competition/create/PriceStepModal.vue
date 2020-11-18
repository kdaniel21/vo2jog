<template>
  <b-modal
    id="price-step-modal"
    title="Add Step"
    @ok="$emit('add-step', priceStep)"
  >
    <price-input v-model="priceStep" class="flex-grow-1" />

    <b-form-group label="Start Date" label-for="start-date-input">
      <b-form-datepicker
        id="start-date-input"
        v-model="priceStep.startDate"
        :min="new Date()"
        :max="eventStartDate"
        value-as-date
        required
      ></b-form-datepicker>
    </b-form-group>

    <b-form-group label="End Date" label-for="start-date-input">
      <b-form-datepicker
        id="start-date-input"
        v-model="priceStep.endDate"
        :min="new Date()"
        :max="eventStartDate"
        value-as-date
        required
      ></b-form-datepicker>
    </b-form-group>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex';
import PriceInput from '@/components/organizer/edit/competition/create/PriceInput';

export default {
  name: 'PriceStepModal',
  components: { PriceInput },
  data() {
    return {
      priceStep: {
        price: null,
        currency: 'eur',
        startDate: new Date(),
        endDate: this.$store.state.organizer.events.selectedEvent.startDate,
      },
    };
  },
  computed: {
    ...mapState({
      eventStartDate: state => state.organizer.events.selectedEvent.startDate,
    }),
  },
};
</script>
