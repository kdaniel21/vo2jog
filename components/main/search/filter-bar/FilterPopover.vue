<template>
  <div>
    <b-button
      :id="`popover-${filterName}`"
      size="sm"
      variant="primary"
      class="text-capitalize"
    >
      {{ text }}
    </b-button>

    <b-popover
      id="filter-popover"
      :target="`popover-${filterName}`"
      placement="bottom"
      :triggers="['click']"
      :custom-class="fullWidth ? 'full-width' : ''"
    >
      <slot :attrs="{ text, filterName }"></slot>
    </b-popover>
  </div>
</template>

<script>
export default {
  name: 'FilterPopover',
  props: {
    text: { type: String, default: null },
    filterName: { type: String, default: null },
    fullWidth: { type: Boolean, default: false },
  },
};
</script>

<style>
#filter-popover > .arrow {
  display: none;
}
.full-width {
  max-width: 100% !important;
}
</style>
