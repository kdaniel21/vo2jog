<template>
  <div id="edit-social-media">
    <h2 class="title">{{ $t('organizer.details.social_media') }}</h2>

    <social-media-items @edit="item => (editedItem = item)" />

    <new-social-media-item
      :edited-item="editedItem"
      @cancel="editedItem = null"
    />
  </div>
</template>

<script>
export default {
  name: 'EditSocialMedia',
  data() {
    return {
      editedItem: null,
    };
  },
};
</script>
