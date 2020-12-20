<template>
  <div id="event-list-item" class="card is-flex">
    <div class="card-image is-hidden-mobile">
      <figure class="image">
        <img :src="image" alt="Event Image" />
      </figure>
    </div>

    <div
      class="card-content is-flex-grow-1 py-2 px-3 is-flex is-flex-direction-column is-justify-content-space-between"
    >
      <div>
        <h5 class="is-size-6 is-uppercase has-text-weight-light">
          {{ mainCategory }}
        </h5>
        <h3 class="subtitle has-text-weight-medium mb-0">{{ event.name }}</h3>
        <h5 class="is-size-6">{{ startDate }}</h5>
      </div>

      <category-list :categories="categories" />
    </div>
    <!-- LOCATION -->
    <div
      class="is-flex is-flex-direction-column is-justify-content-space-between py-2 pr-3 pl-2"
    >
      <div>
        <b-icon icon="map-marker-alt" />
        <span>{{ location }}</span>
      </div>

      <b-button
        type="is-primary"
        size="is-small"
        rounded
        tag="nuxt-link"
        :to="url"
        >{{ $t('shared.event_list_item.details') }}</b-button
      >
    </div>
  </div>
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
  height: clamp(6rem, 7.5rem, 26vh);
  width: min(40rem, 100%);
}

#event-list-item > .card-image {
  width: 30%;
}

#event-list-item > .card-image,
#event-list-item > .card-image > .image,
#event-list-item > .card-image > .image > img {
  height: 100%;
}
</style>
