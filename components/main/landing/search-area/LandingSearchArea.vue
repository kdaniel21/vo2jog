<template>
  <section id="landing-search-area" class="section">
    <div class="container">
      <h1 class="is-size-2 title has-text-centered has-text-light">
        Where do you race next?
      </h1>
      <h2 class="subtitle has-text-centered has-text-light">
        Find out together!
      </h2>
      <div class="box">
        <b-field label="Search" label-position="on-border" class="has-addons">
          <b-input
            placeholder="Search"
            type="search"
            icon="search"
            expanded
          ></b-input>
          <p class="control">
            <button class="button is-primary is-fullwidth" @click="onSearch">
              Search
            </button>
          </p>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingSearchArea',
  data() {
    return {
      searchQuery: null,
    };
  },
  methods: {
    onSearch() {
      this.$router.push({ path: 'search', params: { q: this.searchQuery } });
    },
  },
};
</script>

<style scoped>
#landing-search-area {
  margin-top: -11.5rem;
}
@media only screen and (max-width: 500px) {
  #landing-search-area {
    margin-top: -15rem;
  }
}
</style>
