<template>
  <div class="d-flex justify-content-between mt-2">
    <b-button variant="link" @click="$emit('cancel')">Cancel</b-button>
    <b-button variant="link" @click="$emit('apply')">Apply</b-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonRow',
};
</script>

<style></style>
