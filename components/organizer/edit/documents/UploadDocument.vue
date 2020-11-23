<template>
  <b-form id="upload-document" @submit.prevent="uploadDocument">
    <b-form-file v-model="form.file" class="mb-2" required></b-form-file>

    <b-form-group
      label="Document Name"
      label-for="doc-name-input"
      description="This is what the document's name will be once downloaded."
    >
      <b-form-input
        id="doc-name-input"
        v-model="form.name"
        :formatter="removeDiacriticsAndWhitespace"
        required
      ></b-form-input>
    </b-form-group>

    <submit-button submit />
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import SubmitButton from '@/components/organizer/edit/SubmitButton';

export default {
  name: 'UploadDocument',
  components: { SubmitButton },
  mixins: [toaster],
  data() {
    return {
      form: {
        name: null,
        file: null,
      },
    };
  },
  watch: {
    'form.file'(val) {
      if (this.form.name) return;
      this.form.name = this.removeDiacriticsAndWhitespace(val.name);
    },
  },
  methods: {
    ...mapActions('organizer/events', ['addItem']),
    removeDiacriticsAndWhitespace(string) {
      return string
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^A-Z0-9.]+/gi, '_');
    },
    createFormData() {
      const formData = new FormData();
      formData.set('name', this.form.name);
      formData.set('file', this.form.file);
      return formData;
    },
    async uploadDocument() {
      try {
        await this.addItem({ name: 'documents', data: this.createFormData() });
        this.successToast('File uploaded successfully!');
      } catch (err) {
        console.log(err);
        this.errorToast('Could not upload file! Please try again.');
      }
    },
  },
};
</script>
