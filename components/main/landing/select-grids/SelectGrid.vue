<template>
  <div
    id="select-grid"
    class="d-flex flex-nowrap overflow-auto justify-content-md-between"
  >
    <select-card
      v-for="{ name, image } in items"
      :key="name"
      :text="name"
      :image="image"
    />
  </div>
</template>

<script>
export default {
  name: 'SelectGrid',
  props: {
    items: { type: Array, default: () => [] },
  },
};
</script>
