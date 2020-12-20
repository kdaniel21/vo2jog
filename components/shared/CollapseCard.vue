<template>
  <b-collapse
    class="card"
    animation="slide"
    :aria-id="`collapse-${_uid}`"
    :open="false"
  >
    <div
      slot="trigger"
      slot-scope="{ open }"
      class="card-header"
      role="button"
      :aria-controls="`collapse-${_uid}`"
    >
      <p class="card-header-title">{{ title }}</p>
      <a class="card-header-icon">
        <b-icon :icon="open ? 'chevron-down' : 'chevron-up'" />
      </a>
    </div>

    <div class="card-content">
      <slot name="default"></slot>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'CollapseCard',
  props: {
    title: { type: String, default: null },
  },
};
</script>
