<template>
  <section id="landing-search-area" class="section mb-4">
    <div class="container">
      <h1 class="is-size-2 title has-text-centered has-text-light">
        {{ $t('landing.call_to_action.title') }}
      </h1>
      <h2 class="subtitle has-text-centered has-text-light">
        {{ $t('landing.call_to_action.subtitle') }}
      </h2>
      <div class="box">
        <b-field
          :label="$t('common.search')"
          label-position="on-border"
          class="has-addons"
        >
          <b-input
            v-model="searchQuery"
            :placeholder="$t('common.search')"
            type="search"
            icon="search"
            expanded
          ></b-input>
          <p class="control">
            <button class="button is-primary is-fullwidth" @click="onSearch">
              {{ $t('common.search') }}
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
