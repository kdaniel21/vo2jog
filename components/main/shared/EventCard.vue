<template>
  <nuxt-link
    v-if="event"
    :to="`/e/${event.id}`"
    class="text-dark text-decoration-none"
  >
    <b-card id="event-card" :img-src="image" no-body>
      <b-card-body class="px-3 pb-2 pt-2">
        <h6 v-if="startDate" class="my-0">
          {{ startDate }}
        </h6>
        <h5 class="font-weight-bold mb-0">{{ event.name }}</h5>
        <div v-if="location">
          <fa icon="map-marker-alt" />
          <span>{{ location }}</span>
        </div>
        <div v-if="categories" class="mt-3 d-flex flex-wrap">
          <b-badge
            v-for="category in categories"
            :key="category"
            class="text-capitalize mr-1 mb-1"
            variant="primary"
            >{{ category }}
          </b-badge>
        </div>
      </b-card-body>
    </b-card>
  </nuxt-link>
</template>

<script>
import displayEvent from '@/mixins/main/display-event';

export default {
  name: 'EventCard',
  mixins: [displayEvent],
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
#event-card {
  width: min(80vw, 18rem);
  height: 100%;
}
.card-img {
  max-height: 150px;
  object-fit: cover;
}
</style>
