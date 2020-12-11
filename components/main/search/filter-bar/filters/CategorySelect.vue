<template>
  <div id="category-select">
    <h5 class="text-capitalize">{{ text || filterName }}</h5>
    <b-badge
      v-for="{ name, isSelected } in categoryItems"
      :key="name"
      class="mr-1 text-capitalize cursor-pointer"
      :variant="isSelected ? 'primary' : 'secondary'"
      pill
      @click="toggleSelect(name)"
    >
      <span>{{ name }}</span>
      <fa v-if="isSelected" icon="check" fixed-width />
    </b-badge>

    <button-row v-if="!isMobile" @apply="applyFilter" @cancel="close" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CategorySelect',
  props: {
    text: { type: String, default: null },
    options: { type: Array, default: null },
    filterName: { type: String, default: null },
    isMobile: { type: Boolean, defaults: false },
  },
  data() {
    return {
      selectedCategoryItems: [],
    };
  },
  computed: {
    categoryItems() {
      const { getters } = this.$store;
      const items =
        this.filterName === 'main'
          ? getters['events/mainCategories']
          : getters['events/getCategoryItems'](this.filterName);

      return items.map(item => ({
        name: item,
        isSelected: this.selectedCategoryItems.includes(item),
      }));
    },
  },
  created() {
    // Prepopulate selected items from query params
    const selectedItems = this.$route.query[this.filterName];
    if (!selectedItems) return;

    this.selectedCategoryItems = Array.isArray(selectedItems)
      ? [...selectedItems]
      : [selectedItems];
  },
  methods: {
    ...mapActions('events', ['setFilter']),
    toggleSelect(categoryItem) {
      const index = this.selectedCategoryItems.findIndex(
        item => item === categoryItem
      );
      if (index === -1) return this.selectedCategoryItems.push(categoryItem);

      this.selectedCategoryItems.splice(index, 1);
    },
    async applyFilter() {
      const { filterName, selectedCategoryItems } = this;
      await this.setFilter({
        [filterName]: selectedCategoryItems.length
          ? selectedCategoryItems
          : null,
      });

      this.close();
    },
    close() {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$root.$emit('bv::hide::popover', `popover-${this.filterName}`);
    },
  },
};
</script>

<style>
#category-select {
  font-size: 1.2rem;
}
</style>
