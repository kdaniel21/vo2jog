<template>
  <div id="image-upload">
    <div v-if="!image">
      <b-field class="file">
        <b-upload v-model="image" expanded drag-drop>
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
      <slot :img="imagePreview">
        <b-image id="image-view" :src="imagePreview" ratio="4by3" />
      </slot>

      <b-button
        v-if="!uploadNew"
        type="is-primary"
        class="mt-3"
        icon-left="upload"
        expanded
        @click="removeCurrent"
      >
        {{ $t('organizer.info.upload_new') }}
      </b-button>

      <slot v-else name="save-button" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageUpload',
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  data() {
    return {
      uploadNew: !this.value,
    };
  },
  computed: {
    image: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    imagePreview() {
      const { image } = this;
      return typeof image === 'object' ? URL.createObjectURL(image) : image;
    },
  },
  methods: {
    removeCurrent() {
      this.uploadNew = true;
      this.image = null;
    },
    resetState() {
      this.uploadNew = false;
    },
  },
};
</script>

<style></style>
