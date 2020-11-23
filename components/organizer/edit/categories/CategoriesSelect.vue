<template>
  <b-form id="categories-select">
    <main-category-select v-model="selectedMainCategories" />

    <category-select-input
      v-for="{ name, categoryItems } in subcategoryItems"
      :key="name"
      v-model="selectedSubcategories[name]"
      :label="name"
      :options="categoryItems"
    />

    <submit-button @click="saveCategories" />
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import MainCategorySelect from '@/components/organizer/edit/categories/MainCategorySelect';
import CategorySelectInput from '@/components/organizer/edit/categories/CategorySelectInput';
import SubmitButton from '@/components/organizer/edit/SubmitButton';

export default {
  name: 'CategoriesSelect',
  components: { MainCategorySelect, CategorySelectInput, SubmitButton },
  mixins: [toaster],
  data() {
    return {
      selectedMainCategories: [],
      selectedSubcategories: {},
      subcategoryItems: [],
    };
  },
  watch: {
    async selectedMainCategories(val) {
      if (!val) return;

      await this.fetchSubcategories();
    },
  },
  created() {
    // Parse & Prefill Categories from vuex
    const { categories } = this.$store.state.organizer.events.selectedEvent;
    if (!categories.length) return;

    categories.forEach(category => {
      if (category.category === 'main') {
        this.selectedMainCategories = [...category.value];
        return;
      }
      this.selectedSubcategories[category.category] = [...category.value];
    });
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    async fetchSubcategories() {
      const params = { main: this.selectedMainCategories.toString() };
      const res = await this.$axios.get('/api/categories/subcategories', {
        params,
      });

      if (!res.data.data.length) return;
      this.subcategoryItems = [...res.data.data];
    },
    async saveCategories() {
      const categories = {
        main: this.selectedMainCategories,
        ...this.selectedSubcategories,
      };

      try {
        await this.updateEvent({ categories });
        this.successToast('Categories set successfully!');
      } catch (err) {
        console.log(err);
        this.errorToast('Could not set categories! Please try again.');
      }
    },
  },
};
</script>
