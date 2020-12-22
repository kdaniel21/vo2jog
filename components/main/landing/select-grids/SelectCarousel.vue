<template>
  <div id="select-carousel" class="mb-6">
    <h2 class="title mb-2 has-text-capitalized">
      {{ $t(`landing.${namespace}.title`) }}
    </h2>

    <b-carousel-list v-bind="settings" :data="extendedItems">
      <template #item="{ name, image, to }">
        <select-item :text="name" :image="image" :to="to" />
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
export default {
  name: 'SelectCarousel',
  props: {
    title: { type: String, default: null },
    namespace: { type: String, default: null },
    items: { type: Array, default: () => [] },
  },
  data() {
    return {
      settings: {
        iconSize: 'is-medium',
        repeat: true,
        itemsToShow: 2,
        breakpoints: {
          600: { itemsToShow: 3 },
          900: { itemsToShow: 4 },
          1200: { itemsToShow: 5 },
        },
      },
    };
  },
  computed: {
    extendedItems() {
      const { namespace } = this;
      return this.items.map(item => ({
        name: this.$t(`landing.${namespace}.${item}`),
        image: require(`~/assets/img/landing/${namespace}/${item}.jpg`),
        to: `/search?${namespace}[]=${item}`,
      }));
    },
  },
};
</script>

<style scoped>
.carousel-list {
  height: 200px;
}
</style>
