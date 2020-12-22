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

    <button-row @apply="applyFilter" @cancel="close" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CategorySelect',
  props: {
    text: { type: String, default: null },
    filterName: { type: String, default: null },
    // Optional v-model support
    value: { type: Array, default: null },
  },
  data() {
    return {
      selectedCategoryItems: [],
    };
  },
  computed: {
    ...mapGetters('events', ['mainCategories', 'getCategoryItems']),
    categoryItems() {
      const mapIsSelected = item => ({
        name: item,
        isSelected: this.selectedCategoryItems.includes(item),
      });
      if (this.filterName === 'main')
        return this.mainCategories.map(mapIsSelected);

      return this.getCategoryItems(this.filterName).map(mapIsSelected);
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
