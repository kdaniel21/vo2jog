<template>
  <div id="category-select">
    <h5 class="is-size-5 is-capitalized has-text-weight-medium">
      {{ text || filterName }}
    </h5>

    <div class="my-4">
      <span
        v-for="{ name, isSelected } in categoryItems"
        :key="name"
        class="mr-1 is-capitalized is-clickable"
        @click="toggleSelect(name)"
      >
        <b-tag :type="isSelected ? 'is-primary' : null" :closable="isSelected">
          {{ name }}
        </b-tag>
      </span>
    </div>

    <button-row v-if="!isMobile" @apply="applyFilter" @cancel="close" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CategorySelect',
  props: {
    text: { type: String, default: null },
    filterName: { type: String, default: null },
    // Optional v-model support
    isMobile: { type: Boolean, defaults: false },
    value: { type: Array, default: null },
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
  watch: {
    selectedCategoryItems(val) {
      this.$emit('input', val);
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
      this.$parent.$parent.toggle();
    },
  },
};
</script>
