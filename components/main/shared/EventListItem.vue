<template>
  <b-card v-if="event" id="event-list-item" class="p-0" no-body img-left>
    <b-card-img :src="event.image" left class="d-none d-sm-block"></b-card-img>

    <b-card-body
      class="d-flex flex-column flex-sm-row justify-content-between py-1"
    >
      <div
        class="d-flex flex-column justify-content-start justify-content-md-between"
      >
        <h6 v-if="mainCategory" class="text-uppercase text-muted mb-0">
          {{ mainCategory }}
        </h6>
        <h5 class="font-weight-bold mb-0">{{ event.name }}</h5>
        <h6 v-if="startDate" class="start-date">{{ startDate }}</h6>

        <!-- CATEGORIES -->
        <div
          v-if="categories"
          class="d-none d-md-flex flex-wrap overflow-hidden mt-3"
        >
          <b-badge
            v-for="category in categories"
            :key="category"
            class="text-capitalize mr-1 mb-1"
            variant="primary"
            >{{ category }}
          </b-badge>
        </div>
      </div>

      <div
        class="mt-2 mb-2 d-flex flex-row flex-sm-column justify-content-between align-items-end"
      >
        <h6 class="text-right">
          <fa v-if="location" icon="map-marker-alt" fixed-width />
          <span>{{ location }}</span>
        </h6>

        <b-button :to="`/e/${event._id}`" variant="primary" size="sm" pill
          >Learn More</b-button
        >
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import displayEvent from '@/mixins/main/display-event';

export default {
  name: 'EventListItem',
  mixins: [displayEvent],
  props: {
    event: { type: Object, default: null },
  },
  computed: {
    mainCategory() {
      const { categories } = this.event;
      if (!categories) return;

      const mainIndex = categories.findIndex(
        category => category.category === 'main'
      );
      if (mainIndex === -1) return;

      return categories[mainIndex].value[0];
    },
  },
};
</script>

<style scoped>
#event-list-item {
  /* height: min(7rem, 30vh); */
  /* OLDER BROWSERS */
  max-height: 30vh;
  height: 7rem;
  height: clamp(6rem, 7.5rem, 26vh);
  width: min(40rem, 100%);
}
.start-date {
  font-size: 90%;
}
</style>
