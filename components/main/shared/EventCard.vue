<template>
  <nuxt-link
    v-if="event"
    :to="`/events/${event._id}`"
    class="text-dark text-decoration-none"
  >
    <b-card id="event-card" :img-src="image" no-body>
      <b-card-body class="px-3 pb-2 pt-2">
        <h6 v-if="event.startDate" class="my-0">
          {{ $dateFns.format(event.startDate, 'do LLLL yyyy') }}
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
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      maxNumOfCategories: 8,
      priorityCategories: ['main', 'terrain', 'distance'],
      placehodlerImage: '',
    };
  },
  computed: {
    image() {
      return this.event.image || this.placehodlerImage;
    },
    location() {
      if (!this.event || !this.event.location) return;

      const {
        address: { city, countryCode },
      } = this.event.location;
      return `${city}, ${countryCode}`;
    },
    categories() {
      if (!this.event) return;

      const { categories } = this.event;
      if (!categories || !categories.length) return;

      const { priorityCategories } = this;
      let listedCategories = [];

      categories.forEach(category => {
        if (priorityCategories.includes(category.name)) {
          listedCategories = [...listedCategories, ...category.value];
          return;
        }

        if (listedCategories.length >= this.maxNumOfCategories) return;
        category.value.forEach(value => {
          if (listedCategories.length < this.maxNumOfCategories)
            listedCategories.push(value);
        });
      });

      return listedCategories;
    },
  },
};
</script>

<style scoped>
#event-card {
  width: min(80vw, 18rem);
}
.card-img {
  max-height: 150px;
  object-fit: cover;
}
</style>
