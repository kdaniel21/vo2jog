<template>
  <div id="default-layout" class="is-flex is-flex-direction-column">
    <the-navbar />

    <Nuxt class="is-flex-grow-1" />

    <the-footer />
    <!-- <slot>
      <b-container
        fluid="md"
        class="flex-grow-1 d-flex flex-column py-3 py-md-5"
      >
        <Nuxt class="align-self-stretch flex-grow-1" />
      </b-container>
    </slot>-->
  </div>
</template>

<script>
export default {
  name: 'Default',
};
</script>

<style scoped>
#default-layout {
  min-height: 100vh;
}
</style>
