<template>
  <div id="social-media-list">
    <edit-list
      :items="items"
      @edit="item => (editedItem = item)"
      @delete="onDelete"
    >
      <a
        slot-scope="{ item }"
        :href="item.link"
        target="_blank"
        class="is-inline-block"
      >
        {{ item.name }}
      </a>
    </edit-list>

    <new-item
      v-model="form.name"
      :is-edit="!!editedItem"
      :validator="$v.form.name"
      :placeholder="$t('organizer.details.add_social_media')"
      @save="onSave"
      @cancel="cancel"
    >
      <icon-input v-model="form.icon" />

      <edit-list-link-input
        v-model="form.link"
        :is-valid="!$v.form.link.$invalid"
      />
    </new-item>
  </div>
</template>

<script>
import { required, url } from 'vuelidate/lib/validators';

export default {
  name: 'SocialMediaList',
  props: {
    items: { type: Array, default: null },
    createFunction: { type: Function, default: null },
    updateFunction: { type: Function, default: null },
    deleteFunction: { type: Function, default: null },
  },
  data() {
    return {
      editedItem: null,
      form: {
        name: null,
        icon: null,
        link: null,
      },
    };
  },
  validations: {
    form: {
      name: { required },
      icon: { required },
      link: { url, required },
    },
  },
  computed: {
    iconPack() {
      if (!this.form.icon) return;
      return this.form.icon[0];
    },
    icon() {
      if (!this.form.icon) return;
      return this.form.icon[1];
    },
  },
  watch: {
    editedItem(val) {
      this.form = { ...val };
    },
  },
  methods: {
    onDelete(item) {
      this.deleteFunction({ name: 'socialMedia', itemId: item.id });
    },
    onSave() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      const payload = { name: 'socialMedia', data: this.form };
      if (this.editedItem) this.updateFunction(payload);
      else this.createFunction(payload);

      this.cancel();
    },
    cancel() {
      this.form = {};
      this.$v.form.$reset();
      this.editedItem = null;
    },
  },
};
</script>

<style></style>
