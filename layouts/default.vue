<template>
  <div class="min-vh-100 d-flex flex-column">
    <slot name="navbar">
      <default-navbar />
    </slot>
    <b-container fluid class="flex-grow-1 d-flex flex-column p-3 p-md-5">
      <Nuxt class="align-self-stretch flex-grow-1" />
    </b-container>
    <the-footer />
  </div>
</template>

<script>
export default {
  name: 'Default',
};
</script>
