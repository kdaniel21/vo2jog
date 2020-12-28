<template>
  <b-menu id="document-list" :activable="false">
    <b-menu-list :label="$t('common.documents')">
      <b-menu-item
        v-for="document in documentsWithIcons"
        :key="document.id"
        :icon="document.icon"
      >
        <template #label>
          <a :href="document.file" target="_blank" class="is-inline-block">
            {{ document.name }}
          </a>

          <!-- ICONS -->
          <div class="action-icons is-pulled-right">
            <b-tooltip>
              <b-icon icon="info-circle" />
              <template #content>
                <div>{{ $t('organizer.details.uploaded_at') }}:</div>
                <div>{{ document.createdAt.toLocaleDateString() }}</div>
              </template>
            </b-tooltip>

            <b-tooltip :label="$t('organizer.details.delete_document')">
              <span @click="onDeleteDocument(document)">
                <b-icon icon="trash-alt" class="is-clickable" />
              </span>
            </b-tooltip>
          </div>
        </template>
      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import documentList from '@/mixins/document-list';

export default {
  name: 'DocumentList',
  mixins: [documentList],
  computed: {
    ...mapState({
      documents: state => state.organizer.events.selectedEvent.documents,
    }),
  },
  methods: {
    ...mapActions('organizer/events', ['showDeleteConfirm']),
    onDeleteDocument(document) {
      this.showDeleteConfirm({ name: 'documents', itemId: document.id });
    },
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1023px) {
  #document-list {
    .action-icons {
      display: none;
    }
    li:hover .action-icons {
      display: initial;
    }
  }
}
</style>
