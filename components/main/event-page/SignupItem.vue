<template>
  <li v-if="competition" id="signup-item">
    <div class="d-flex justify-content-between">
      <div>
        <h6 class="mb-2">{{ competition.name }}</h6>
        <div v-if="ageLimit" class="small my-0">
          <fa icon="birthday-cake" fixed-width />
          <span>{{ ageLimit }}</span>
        </div>
        <div v-if="currentFee" class="small my-0">
          <fa icon="euro-sign" fixed-width />
          <span>{{ currentFee }}</span>
        </div>
        <div v-if="!currentFee || !ageLimit" class="small my-0">
          <fa icon="road" fixed-width />
          <span>{{ distance }}</span>
        </div>

        <b-button size="sm" variant="link"> More Information </b-button>
      </div>
      <b-form-radio />
    </div>
    <hr />
  </li>
</template>

<script>
export default {
  name: 'SignupItem',
  props: {
    competition: { type: Object, default: null },
  },
  computed: {
    ageLimit() {
      const { ageLimit } = this.competition;
      if (!ageLimit) return;

      const { minimum, maximum } = ageLimit;
      if (minimum && maximum) return `${minimum} - ${maximum}`;
      if (minimum && !maximum) return `${minimum} and older`;
      return `${maximum} and younger`;
    },
    currentFee() {
      const { currentFee } = this.competition;
      if (!currentFee) return;

      return `${currentFee.price} ${currentFee.currency}`;
    },
    distance() {
      const { distance } = this.competition;

      return `${distance.amount} ${distance.unit}`;
    },
  },
};
</script>
