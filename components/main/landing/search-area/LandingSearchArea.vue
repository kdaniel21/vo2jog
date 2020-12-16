<template>
  <div
    id="search-area"
    class="d-flex flex-column justify-content-end w-100 mb-5"
  >
    <b-jumbotron
      text-variant="white"
      class="text-center p-0 m-0 mb-n5 mb-md-n4 bg-transparent"
    >
      <template #header>
        <h1 id="main-title" class="text-center font-weight-bold">
          Where do you race next?
        </h1>
      </template>

      <template #lead>
        <h3 class="text-center">Find out together!</h3>
      </template>

      <div class="d-flex justify-content-center">
        <landing-search-bar />
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'LandingSearchArea',
};
</script>

<style scoped>
#search-area {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.85)),
    url('~@/assets/img/background-landing.jpg') no-repeat center center;
  background-size: cover;

  height: min(500px, 65vh);
}
.bg-transparent {
  background-color: transparent !important;
}
</style>
