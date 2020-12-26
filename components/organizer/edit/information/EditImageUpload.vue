<template>
  <div id="edit-image-upload">
    <h2 class="title">{{ $t('organizer.info.image') }}</h2>

    <div v-if="!form.image">
      <b-field class="file">
        <b-upload v-model="form.image" expanded drag-drop>
          <section class="section has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large" />
            </p>
            <p>{{ $t('organizer.info.upload_area') }}</p>
          </section>
        </b-upload>
      </b-field>
    </div>

    <div v-else>
      <b-image id="image-view" :src="imagePreview" ratio="4by3" class="mb-3" />

      <b-button
        v-if="!uploadNew"
        type="is-primary"
        icon-left="upload"
        expanded
        @click="removeCurrent"
      >
        {{ $t('organizer.info.upload_new') }}
      </b-button>

      <button-right v-else @click="onSave" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EditImageUpload',
  data() {
    return {
      uploadNew: !this.$store.state.organizer.events.selectedEvent.imageCover,
      form: {
        image: this.$store.state.organizer.events.selectedEvent.imageCover,
      },
    };
  },
  computed: {
    imagePreview() {
      const { image } = this.form;
      return typeof image === 'object' ? URL.createObjectURL(image) : image;
    },
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    removeCurrent() {
      this.uploadNew = true;
      this.form.image = null;
    },
    onSave() {
      const formData = new FormData();
      formData.append('imageCover', this.form.image, this.form.image.filename);
      return this.updateEvent(formData);
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
