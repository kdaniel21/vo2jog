<template>
  <div>
    <layout
      title="Edit Profile"
      :props="['name', 'motto']"
      :save-disabled="$v.form.$anyError"
      edit
      @save="save"
      @cancel="$emit('cancel')"
    >
      <template #input="{ prop }">
        <form-group :validator="$v.form[prop]">
          <b-input
            v-model="form[prop]"
            slot-scope="{ attrs, listeners }"
            v-bind="attrs"
            size="sm"
            v-on="listeners"
          ></b-input>
        </form-group>
      </template>
    </layout>

    <b-row class="mb-2">
      <b-col cols="12" md="4" class="font-weight-bold">Description</b-col>
      <b-col>
        <form-group :validator="$v.form.description">
          <b-textarea
            v-model="form.description"
            slot-scope="{ attrs, listeners }"
            v-bind="attrs"
            size="sm"
            v-on="listeners"
          ></b-textarea>
        </form-group>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col cols="12" md="4" class="font-weight-bold">Avatar</b-col>
      <b-col>
        <b-file v-model="form.avatar" size="sm"></b-file>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required, maxLength } from 'vuelidate/lib/validators';
import { alphaNumWhiteDiacritic } from '@/plugins/vuelidate/custom-validators';
import toaster from '@/mixins/toaster';
import Layout from '@/components/organizer/profile/Layout';

export default {
  name: 'EditProfile',
  components: {
    Layout,
  },
  mixins: [toaster],
  data() {
    return {
      form: {
        name: this.$store.state.auth.user.name,
        motto: this.$store.state.auth.user.motto,
        description: this.$store.state.auth.user.description,
        avatar: null,
      },
    };
  },
  validations: {
    form: {
      name: { required, alphaNumWhiteDiacritic },
      motto: { required, maxLength: maxLength(50) },
      description: { required, maxLength: maxLength(800) },
    },
  },
  watch: {
    'form.avatar'(val) {
      this.$emit('avatar', val);
    },
  },
  methods: {
    ...mapActions('organizer/profile', ['updateProfile']),
    async save() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      try {
        const data = { ...this.form };
        delete data.avatar;

        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        if (this.form.avatar)
          formData.append(
            'avatar',
            this.form.avatar,
            this.form.avatar.filename
          );

        await this.updateProfile(formData);
        this.successToast('Profile updated successfully!');
        this.cancelEdit();
      } catch {
        this.errorToast('Could not update profile! Please try again.');
      }
    },
    cancelEdit() {
      this.$emit('edit', false);
    },
  },
};
</script>
