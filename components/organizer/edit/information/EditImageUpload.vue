<template>
  <div id="edit-image-upload">
    <h2 class="title">{{ $t('organizer.info.image') }}</h2>

    <image-upload ref="image-upload" v-model="form.image">
      <button-right slot="save-button" @click="onSave" />
    </image-upload>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EditImageUpload',
  data() {
    return {
      form: {
        image: this.$store.state.organizer.events.selectedEvent.imageCover,
      },
    };
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    async onSave() {
      const formData = new FormData();
      formData.append('imageCover', this.form.image, this.form.image.filename);
      await this.updateEvent(formData);

      this.$refs['image-upload'].resetState();
    },
  },
};
</script>

<style>
#image-view,
#image-view > img {
  height: 400px;
  padding-top: 0;
}
</style>
