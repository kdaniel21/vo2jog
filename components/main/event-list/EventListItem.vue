<template>
  <b-card id="event-list-item" no-body class="overflow-hidden mb-2">
    <b-row no-gutters>
      <b-col cols="3">
        <b-card-img src="https://picsum.photos/1200" class="rounded-2" />
      </b-col>
      <b-col>
        <b-card-body>
          <b-card-title>
            <nuxt-link :to="`/events/${event._id}`">
              {{ event.name }}
            </nuxt-link>
          </b-card-title>
          <b-card-text>
            <div v-if="event.location" class="location">
              <fa icon="map-marker-alt" class="fa-fw" />
              {{ location }}
            </div>
            <div v-if="date" class="date">
              <fa icon="calendar-alt" class="fa-fw" />
              <span class="start-date">
                {{ date }}
              </span>
            </div>
            <div v-if="distances" class="distance">
              <fa icon="road" class="fa-fw" />
              {{ distances.toString() }}
            </div>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'EventListItem',
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  data() {
    return { dateFormat: 'yyyy.MM.dd.' };
  },
  computed: {
    location() {
      if (!this.event.location) return;

      return `${this.event.location.address.city}, ${this.event.location.address.countryCode}`;
    },
    distances() {
      if (!this.event.competitions || !this.event.competitions.length) return;

      return this.event.competitions.map(
        competition => `${competition.distance.amount}K`
      );
    },
    date() {
      const { dateFormat } = this;
      const { startDate, endDate } = this.event;
      if (!startDate) return;

      const formattedStartDate = this.$dateFns.format(startDate, dateFormat);
      if (!this.endDate) return formattedStartDate;

      const length = this.$dateFns.differenceInCalendarDays(startDate, endDate);
      return length > 1
        ? `${formattedStartDate} (${length} days)`
        : formattedStartDate;
    },
  },
};
</script>

<style scoped>
.card {
  max-height: 130px;
}
.card-title {
  margin-bottom: 0.1rem;
}
.card-body {
  padding: 0.5rem;
}
.card-text {
  color: gray;
}
</style>
