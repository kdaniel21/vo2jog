<template>
  <category-select-input
    v-model="selectedCategories"
    label="Main Category"
    :options="mainCategories"
    description="You need to select this first. After selecting this other subcategories will appear!"
  />
</template>

<script>
import CategorySelectInput from '@/components/organizer/edit/categories/CategorySelectInput';

export default {
  name: 'MainCategorySelectInput',
  components: { CategorySelectInput },
  props: {
    value: { type: Array, default: () => [] },
  },
  data() {
    return {
      mainCategories: [],
    };
  },
  computed: {
    selectedCategories: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  async mounted() {
    await this.fetchMainCategories();
  },
  methods: {
    async fetchMainCategories() {
      const res = await this.$axios.get('/api/categories');

      if (!res.data.data.length) return;
      this.mainCategories = res.data.data.map(category => category.name);
    },
  },
};
</script>

<style></style>
