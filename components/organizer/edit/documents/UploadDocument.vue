<template>
  <b-form id="upload-document" @submit.prevent="uploadDocument">
    <form-group label="File" label-for="doc-upload" :validator="$v.form.file">
      <b-form-file
        id="doc-upload"
        v-model="form.file"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-file>
    </form-group>

    <form-group
      label="Document Name"
      label-for="doc-name-input"
      description="This is what the document's name will be once downloaded."
      :validator="$v.form.name"
    >
      <b-form-input
        id="doc-name-input"
        v-model="form.name"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        :formatter="removeDiacriticsAndWhitespace"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <submit-button submit :disabled="$v.form.$anyError" />
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import { required, maxLength } from 'vuelidate/lib/validators';
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
  validations: {
    form: {
      name: { required, maxLength: maxLength(100) },
      file: { required },
    },
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
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

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
