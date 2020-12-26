<template>
  <div class="is-flex is-justify-content-end">
    <b-button
      v-bind="$attrs"
      :type="type"
      class="is-fullwidth-mobile"
      @click="$emit('click')"
    >
      <slot>{{ $t('common.save') }}</slot>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonRight',
  props: {
    type: { type: String, default: 'is-primary' },
  },
};
</script>

<style></style>
