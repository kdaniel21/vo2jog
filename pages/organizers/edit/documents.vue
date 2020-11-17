<template>
  <div id="documents">
    <h3 class="mb-5 mb-md-3">Upload Document</h3>
    <upload-document />

    <hr />
    <document-list />
  </div>
</template>

<script>
import UploadDocument from '@/components/organizer/edit/documents/UploadDocument';
import DocumentList from '@/components/organizer/edit/documents/DocumentList';

export default {
  name: 'documents',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { UploadDocument, DocumentList },
};
</script>

<style></style>
