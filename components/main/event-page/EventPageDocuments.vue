<template>
  <div id="event-page-documents">
    <h2>Documents</h2>

    <b-list-group>
      <b-list-group-item
        v-for="document in documentsWithIcons"
        :key="document.id"
        v-b-tooltip.hover
        :href="document.file"
        target="_blank"
        class="text-dark"
        :title="`Download ${document.name}`"
      >
        <fa :icon="document.icon" fixed-width />
        <span>{{ document.name }}</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import documentList from '~/mixins/document-list';

export default {
  name: 'EventPageDocuments',
  mixins: [documentList],
  props: { documents: { type: Array, default: () => [] } },
};
</script>

<style></style>
