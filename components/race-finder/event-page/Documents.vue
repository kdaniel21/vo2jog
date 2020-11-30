<template>
  <ul id="documents" class="list-unstyled small">
    <li
      v-for="document in documentsWithIcons"
      :key="document.name"
      :href="document.url"
      target="_blank"
    >
      <a :href="document.url" target="_blank">
        <fa :icon="document.icon" fixed-width />
        <span>{{ document.name }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import documentList from '@/mixins/document-list';

export default {
  name: 'Documents',
  mixins: [documentList],
  computed: {
    ...mapState({
      documents: state => state.events.viewedEvent.documents || [],
    }),
  },
};
</script>

<style></style>
