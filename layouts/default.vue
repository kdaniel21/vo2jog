<template>
  <div class="min-vh-100 d-flex flex-column navbar-margin">
    <main-navbar />

    <slot>
      <b-container fluid class="flex-grow-1 d-flex flex-column p-3 p-md-5">
        <Nuxt class="align-self-stretch flex-grow-1" />
      </b-container>
    </slot>

    <the-footer />
  </div>
</template>

<script>
export default {
  name: 'Default',
};
</script>

<style scoped>
/* same amount as navbar height */
.navbar-margin {
  padding-top: 60px;
}
</style>
>
