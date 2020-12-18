<template>
  <div id="default-layout" class="min-vh-100 d-flex flex-column navbar-margin">
    <the-navbar />

    <slot>
      <b-container
        fluid="md"
        class="flex-grow-1 d-flex flex-column py-3 py-md-5"
      >
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
#default-layout {
  max-width: 100%;
}
/* same amount as navbar height */
.navbar-margin {
  padding-top: 60px;
}
</style>
>
