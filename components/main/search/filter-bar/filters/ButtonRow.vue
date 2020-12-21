<template>
  <div
    id="button-row"
    class="is-flex is-justify-content-space-between mx-1 mt-2"
  >
    <b-button type="is-text" @click="$emit('cancel')">
      {{ $t('common.cancel') }}
    </b-button>
    <b-button type="is-link is-light" @click="$emit('apply')">
      {{ $t('common.apply') }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonRow',
};
</script>
