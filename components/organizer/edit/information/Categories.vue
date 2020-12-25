<template>
  <div id="categories">
    <h2 class="title">{{ $t('organizer.info.categories') }}</h2>

    <!-- MAIN CATEGORY -->
    <b-field :label="$t('categories.main.name')" horizontal>
      <b-taginput
        v-model="selected.main"
        :data="mainCategories"
        autocomplete
        open-on-focus
        icon="running"
      >
        <template #default="{ option }">
          {{ $t(`categories.main.${option}`) }}
        </template>

        <template #selected="{ tags }">
          <b-tag v-for="tag in tags" :key="tag">
            {{ $t(`categories.main.${tag}`) }}
          </b-tag>
        </template>
      </b-taginput>
    </b-field>

    <!-- SUBCATEGORIES -->
    <div v-if="selected.main && selected.main.length">
      <b-field
        v-for="{ name, categoryItems } in subcategories"
        :key="name"
        :label="$t(`categories.${name}.name`)"
        horizontal
      >
        <b-taginput
          v-model="selected[name]"
          :data="categoryItems"
          autocomplete
          open-on-focus
          icon="hashtag"
        >
          <template #default="{ option }">
            {{ $t(`categories.${name}.${option}`) }}
          </template>

          <template #selected="{ tags }">
            <b-tag v-for="tag in tags" :key="tag">
              {{ $t(`categories.main.${tag}`) }}
            </b-tag>
          </template>
        </b-taginput>
      </b-field>

      <button-right />
    </div>
  </div>
</template>

<script>
import flattenMergeCategories from '@/assets/utils/flatten-merge-categories';
import { mapState } from 'vuex';

export default {
  name: 'Categories',
  data() {
    return {
      categories: [],
      selected: {},
    };
  },
  async fetch() {
    try {
      const res = await this.$axios.get('/api/categories');
      this.categories = [...res.data.data];
    } catch {
      this.$toast.error(this.$t('errors.general'));
    }
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
    mainCategories() {
      return this.categories.map(category => category.name);
    },
    subcategories() {
      return flattenMergeCategories(this.categories);
    },
  },
  created() {
    this.selectedEvent.categories.forEach(
      ({ category, value }) => (this.selected[category] = [...value])
    );
  },
};
</script>

<style></style>
