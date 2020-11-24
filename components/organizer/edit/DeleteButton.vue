<template>
  <fa
    v-b-popover.hover.top="'Delete Item'"
    icon="trash"
    class="fa-fw cursor-pointer"
    @click="$emit('delete')"
  />
</template>

<script>
export default {
  name: 'DeleteButton',
};
</script>
