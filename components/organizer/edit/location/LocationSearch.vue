<template>
  <v-select
    id="location-search"
    label="title"
    placeholder="Search Location"
    class="mb-3"
    :value="value"
    :filterable="false"
    :options="options"
    @search="onSearch"
    @input="val => $emit('input', val)"
  >
    <template #no-options> Type to search location... </template>
  </v-select>
</template>

<script>
import toaster from '@/mixins/toaster';

export default {
  name: 'LocationSearch',
  mixins: [toaster],
  props: { value: { type: Object, default: null } },
  data() {
    return {
      timer: null,
      options: [],
    };
  },
  methods: {
    onSearch(searchString, loading) {
      if (!searchString) return;

      loading(true);
      this.debounceSearch(searchString, loading);
    },
    debounceSearch(searchString, loading) {
      clearTimeout(this.timer);

      this.timer = setTimeout(async () => {
        await this.searchLocation(searchString);
        this.timer = null;
        loading(false);
      }, 500);
    },
    async searchLocation(searchString) {
      // Clean axios instance to avoid unnecessary headers
      const axios = this.$axios.create();

      const params = {
        q: searchString,
        limit: 5,
        apiKey: this.$config.hereApiKey,
      };

      try {
        const res = await axios.get('/here-api/', {
          params,
          headers: { Authorization: '' },
        });

        if (res.data.items)
          this.options = this.filterLocationData(res.data.items);
      } catch {
        this.errorToast('Something went wrong!');
      }
    },
    filterLocationData(locationData) {
      return locationData.map(data => {
        delete data.access;
        delete data.scoring;
        delete data.mapView;
        return data;
      });
    },
  },
};
</script>

<style></style>
