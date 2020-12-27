<template>
  <div id="new-social-media-item">
    <!-- FORM -->
    <new-item
      v-model="form.name"
      :is-edit="!!editedItem"
      :validator="$v.form.name"
      field="name"
      @save="onSave"
      @cancel="cancel"
    >
      <b-autocomplete
        :icon-pack="iconPack"
        :icon="icon"
        :placeholder="$t('organizer.details.icon')"
        :data="iconOptions"
        open-on-focus
        append-to-body
        @select="iconOption => (form.icon = iconOption.icon)"
      >
        <template slot-scope="{ option: { icon, name } }">
          <b-icon :pack="icon[0]" :icon="icon[1]" />
          {{ name }}
        </template>
      </b-autocomplete>

      <link-input-button
        v-model="form.link"
        :is-valid="!$v.form.link.$invalid"
      />
    </new-item>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required, url } from 'vuelidate/lib/validators';

export default {
  name: 'NewSocialMediaItem',
  props: {
    editedItem: { type: Object, default: null },
  },
  data() {
    return {
      iconOptions: [
        { icon: ['fa', 'globe'], name: 'Website' },
        { icon: ['fa', 'images'], name: 'Race Photos' },
        { icon: ['fab', 'facebook'], name: 'Facebook' },
        { icon: ['fab', 'instagram'], name: 'Instagram' },
        { icon: ['fab', 'flickr'], name: 'Flickr' },
        { icon: ['fab', 'youtube'], name: 'YouTube' },
        { icon: ['fab', 'twitter'], name: 'Twitter' },
      ],
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
      if (!val) return (this.form.name = null);
      this.form = { ...val };
    },
  },
  methods: {
    ...mapActions('organizer/events', ['addItem', 'updateItem']),
    onSave() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      const payload = { name: 'socialMedia', data: this.form };
      if (this.editedItem) this.updateItem(payload);
      else this.addItem(payload);

      this.cancel();
    },
    cancel() {
      this.form = {
        name: null,
        icon: null,
        link: null,
      };
      this.$v.form.$reset();
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss">
#new-social-media-item {
  & .autocomplete {
    width: 50px;

    & .icon {
      color: #000;
    }
  }
}

.dropdown-content {
  width: max-content !important;
}
</style>
