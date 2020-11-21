<template>
  <div id="selected-icon">
    <fa :icon="icon.length > 1 ? icon : icon[0]" class="fa-fw mr-2" />
    <span class="text-capitalize">
      {{ icon[icon.length - 1] }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SelectedIcon',
  props: {
    icon: { type: Array, default: () => [] },
  },
};
</script>
