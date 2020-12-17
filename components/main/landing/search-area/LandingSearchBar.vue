<template>
  <b-card id="search-bar" body-class="p-2">
    <b-form inline @submit.prevent="search">
      <b-input-group class="flex-grow-1 mr-0 mr-sm-3 mb-2 mb-sm-0">
        <b-input-group-prepend is-text>
          <fa icon="search" fixed-width />
        </b-input-group-prepend>
        <b-input
          v-model="searchString"
          placeholder="Search for 'Triathlon in Budapest'"
        ></b-input>
      </b-input-group>

      <b-button type="submit" variant="primary" class="btn-block-xs-only" pill
        >Search</b-button
      >
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: 'LandingSearchBar',
  data() {
    return {
      searchString: null,
    };
  },
  methods: {
    search() {
      this.$router.push({ path: '/search', query: { q: this.searchString } });
    },
  },
};
</script>

<style scoped>
#search-bar {
  width: min(95%, 1000px);
  border-radius: 5px;
}
</style>
