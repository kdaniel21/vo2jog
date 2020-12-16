<template>
  <b-img :src="img"></b-img>
</template>

<script>
export default {
  name: 'EventPagePhoto',
  props: {
    img: { type: String, default: null },
  },
};
</script>

<style></style>
