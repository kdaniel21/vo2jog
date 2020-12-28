<template>
  <div id="default-layout" class="is-flex is-flex-direction-column">
    <the-navbar />

    <div id="content" class="is-flex-grow-1">
      <Nuxt />
    </div>

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
  min-height: 100vh;
  max-width: 100vw;
}
#content {
  max-width: 100vw;
}
</style>
