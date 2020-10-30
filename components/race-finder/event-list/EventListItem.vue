<template>
  <b-card id="event-list-item" no-body class="overflow-hidden mb-2">
    <b-row no-gutters>
      <b-col cols="3">
        <b-card-img src="https://picsum.photos/1200" class="rounded-2" />
      </b-col>
      <b-col>
        <b-card-body :title="event.name">
          <b-card-text>
            <div class="location">
              <fa icon="map-marker-alt" />
              {{ event.location }}
            </div>
            <div class="date">
              <fa icon="calendar-alt" />
              <span class="start-date">
                {{ event.startDate.toLocaleDateString() }}
              </span>
              <span
                v-if="event.startDate.getTime() !== event.endDate.getTime()"
                class="end-date"
                >- {{ event.endDate.toLocaleDateString() }}
              </span>
            </div>
            <div class="distance">
              <fa icon="road" />
              {{ event.distances.toString() }}
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
