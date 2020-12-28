<template>
  <div id="edit-profile-contacts">
    <edit-list
      :items="contacts"
      icon="user"
      @edit="item => (editedItem = item)"
      @delete="onDelete"
    >
      <a slot-scope="{ item }" class="is-inline-block has-text-weight-medium">
        {{ item.name }}
        <b-icon
          v-if="item.email"
          icon="envelope"
          type="is-info"
          size="is-small"
          class="ml-2"
        />
        <b-icon v-if="item.phone" icon="phone" type="is-info" size="is-small" />
      </a>
    </edit-list>

    <new-item
      v-model="form.name"
      :validator="$v.form.name"
      :is-edit="!!editedItem"
      :placeholder="$t('organizer.profile.add_contact')"
      @save="onSave"
    >
      <edit-list-email-input
        v-model="form.email"
        :is-valid="!$v.form.email.$invalid"
      />

      <edit-list-phone-input v-model="form.phone" />
    </new-item>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'EditProfileContacts',
  data() {
    return {
      editedItem: null,
      form: {
        name: null,
        email: null,
        phone: null,
      },
    };
  },
  validations: {
    form: {
      name: { required },
      email: { email },
    },
  },
  computed: {
    contacts() {
      return this.$auth.user.contactPeople;
    },
  },
  watch: {
    editedItem(val) {
      this.form = { ...val };
    },
  },
  methods: {
    ...mapActions('organizer/profile', [
      'addProfileItem',
      'updateProfileItem',
      'deleteProfileItem',
    ]),
    onSave() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      const payload = { name: 'contactPeople', data: this.form };
      if (this.editedItem) this.updateProfileItem(payload);
      else this.addProfileItem(payload);

      this.$v.form.$reset();
      this.editedItem = null;
      this.form = {};
    },
    onDelete(item) {
      this.deleteProfileItem({ name: 'contactPeople', itemId: item.id });
    },
  },
};
</script>

<style></style>
