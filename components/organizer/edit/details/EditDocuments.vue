<template>
  <div id="edit-documents">
    <h2 class="title">{{ $t('common.documents') }}</h2>

    <!-- UPLOAD DOCUMENTS -->
    <div class="columns">
      <div class="column">
        <upload-document />
      </div>
      <div class="column">
        <document-list />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditDocuments',
};
</script>

<style></style>
