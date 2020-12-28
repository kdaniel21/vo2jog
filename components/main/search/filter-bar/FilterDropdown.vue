<template>
  <b-dropdown append-to-body trap-focus>
    <b-button slot="trigger" type="is-primary is-light is-capitalized">
      {{ text || filterName }}
    </b-button>

    <b-dropdown-item
      id="filter-dropdown"
      :focusable="false"
      custom
      :class="classes"
    >
      <slot :attrs="{ text, filterName }" />
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'FilterDropdown',
  props: {
    text: { type: String, default: null },
    filterName: { type: String, default: null },
    fullWidth: { type: Boolean, default: false },
    wide: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      let classes = '';
      if (this.fullWidth) classes += 'full-width ';
      if (this.wide) classes += 'wide';

      return classes;
    },
  },
};
</script>

<style>
#filter-dropdown {
  width: 400px;
}
.full-width {
  max-width: 100% !important;
}
.wide {
  width: min(95vw, 30rem) !important;
}
</style>
