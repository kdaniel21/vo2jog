<template>
  <div id="upload-document">
    <!-- UPLOAD STATE -->
    <form-group v-if="!form.file">
      <b-upload
        v-model="form.file"
        drag-drop
        expanded
        @input="$v.form.file.$touch()"
      >
        <section class="section">
          <div class="content has-text-centered">
            <p><b-icon icon="upload" size="is-large" /></p>
            <p>{{ $t('organizer.details.upload_area') }}</p>
          </div>
        </section>
      </b-upload>
    </form-group>

    <!-- UPLOADED DOCUMENT STATE -->
    <div v-else class="mb-2 is-size-5 is-flex is-justify-content-center">
      <div class="has-text-centered">
        <b-icon icon="file-upload" size="is-large" />
        <div>{{ form.file.name }}</div>
      </div>
      <a class="delete is-medium" @click="form = {}" />
    </div>

    <form-group :validator="$v.form.name">
      <b-input
        v-model="form.name"
        :placeholder="$t('organizer.details.file_name_placeholder')"
        expanded
        @input="$v.form.name.$touch()"
      />
      <p class="control">
        <b-button
          type="is-primary"
          :disabled="$v.form.$anyError || !form.file"
          @click="onUpload"
        >
          {{ $t('organizer.details.upload') }}
        </b-button>
      </p>
    </form-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'UploadDocument',
  data() {
    return {
      form: {
        file: null,
        name: null,
      },
    };
  },
  validations: {
    form: {
      name: { required },
      file: { required },
    },
  },
  computed: {
    customFilename() {
      if (!this.form.file) return;

      const splittedFilename = this.form.file.name.split('.');
      const extension = splittedFilename[splittedFilename.length - 1];
      return `${this.form.name}.${extension}`;
    },
  },
  watch: {
    'form.file'(val) {
      if (!val || !val.name) return;

      const splittedName = val.name.split('.');
      delete splittedName[splittedName.length - 1];

      this.form.name = splittedName.join('');
    },
  },
  methods: {
    ...mapActions('organizer/events', ['addItem']),
    onUpload() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      const data = new FormData();
      data.set('name', this.customFilename);
      data.set('file', this.form.file);

      this.addItem({ name: 'documents', data });
    },
  },
};
</script>

<style></style>
