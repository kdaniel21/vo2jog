<template>
  <b-card v-if="competition" id="competition-card" no-body>
    <b-card-body>
      <b-card-title>{{ competition.name }}</b-card-title>
    </b-card-body>

    <!-- DELETE BTN -->
    <delete-competition :id="competition.id" />

    <b-list-group>
      <b-list-group-item
        v-for="{ icon, name, text } in showedItems"
        v-show="text()"
        :key="icon"
      >
        <fa :icon="icon" class="fa-fw" />
        <span>{{ name }}: {{ text() }}</span>
      </b-list-group-item>
    </b-list-group>

    <b-card-footer>
      <nuxt-link :to="`competitions/${competition.id}`">
        <b-button block variant="outline-primary">Edit</b-button>
      </nuxt-link>
    </b-card-footer>
  </b-card>
</template>

<script>
import DeleteCompetition from '@/components/organizer/edit/competition/show/DeleteCompetition';

export default {
  name: 'CompetitionCard',
  components: { DeleteCompetition },
  props: {
    competition: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      unitMap: { meter: 'meters', kilometer: 'km', mile: 'miles' },
      showedItems: [
        { icon: 'road', name: 'Distance', text: () => this.distanceText },
        {
          icon: 'birthday-cake',
          name: 'Age Limit',
          text: () => this.ageLimitText,
        },
        {
          icon: 'user-check',
          name: 'Limit',
          text: () => this.competition.limit,
        },
        {
          icon: 'euro-sign',
          name: 'Current Fee',
          text: () => this.currentFeeText,
        },
      ],
    };
  },
  computed: {
    distanceText() {
      const { amount, unit } = this.competition.distance;
      return `${amount} ${this.unitMap[unit]}`;
    },
    ageLimitText() {
      const { minimum, maximum } = this.competition.ageLimit;
      if (minimum && maximum) return `${minimum} - ${maximum}`;

      if (minimum && !maximum) return `${minimum} and older`;
      if (!minimum && maximum) return `${maximum} and younger.`;
      return null;
    },
    currentFeeText() {
      const { currentFee } = this.competition;
      if (!currentFee) return;

      const fee = `${currentFee.price}${currentFee.currency.toUpperCase()}`;
      if (!currentFee.endDate) return fee;

      const daysUntilEnd = this.$dateFns.differenceInDays(
        currentFee.endDate,
        new Date()
      );
      return `${fee} (${daysUntilEnd} days remained from this price)`;
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 350px;
}
.float-top-right {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
