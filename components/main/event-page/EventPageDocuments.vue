<template>
  <section id="event-page-documents" class="card">
    <div class="card-content">
      <h2 class="title is-4 mb-1">{{ $t('event.documents') }}</h2>

      <ul class="menu-list">
        <li v-for="document in documentsWithIcons" :key="document.id">
          <a :href="document.file" target="_blank" class="has-text-dark">
            <b-tooltip :label="`Download ${document.name}`">
              <b-icon :icon="document.icon" />
              <span>{{ document.name }}</span>
            </b-tooltip>
          </a>
        </li>
      </ul>
    </div>
  </section>
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
