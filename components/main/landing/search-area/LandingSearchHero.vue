<template>
  <section id="landing-search-hero" class="hero is-large">
    <div class="hero-body"></div>
  </section>
</template>

<script>
export default {
  name: 'LandingSearchHero',
};
</script>

<style scoped>
#landing-search-hero {
  height: min(500px, 50vh);

  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.85)),
    url('~@/assets/img/background-landing.jpg') no-repeat center center;
  background-size: cover;
}
</style>
