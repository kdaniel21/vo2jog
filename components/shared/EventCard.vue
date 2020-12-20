<template>
  <nuxt-link v-if="event" :to="url">
    <div id="event-card" class="card is-flex is-flex-direction-column">
      <div class="card-image">
        <figure class="image is4by3">
          <img :src="image" alt="Event Image" />
        </figure>
      </div>

      <div
        class="card-content is-flex-grow-1 pt-1 pb-2 px-2 is-flex is-flex-direction-column is-justify-content-space-between"
      >
        <div>
          <h5 class="is-size-7 is-uppercase">{{ startDate }}</h5>
          <h3 class="subtitle has-text-weight-medium mb-0">{{ event.name }}</h3>
          <div>
            <b-icon icon="map-marker-alt" />
            <span class="">{{ location }}</span>
          </div>
        </div>

        <category-list :categories="categories" />
      </div>
    </div>
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
  height: 290px;
}
.icon {
  width: inherit;
}
</style>
