<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title is-4">{{ $t('common.description') }}</h2>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="content" v-html="parsedDescription"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPageDescription',
  props: { description: { type: String, default: null } },
  computed: {
    parsedDescription() {
      return this.description.replace(/&lt;/g, '<');
    },
  },
};
</script>
