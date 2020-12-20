<template>
  <b-image :src="img" />
</template>

<script>
export default {
  name: 'EventPagePhoto',
  props: {
    img: { type: String, default: null },
  },
};
</script>

<style scoped>
.image {
  width: 40%;
}
</style>
