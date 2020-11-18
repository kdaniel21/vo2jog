<template>
  <div>
    <layout
      title="Edit Profile"
      :props="['name', 'motto']"
      edit
      @save="save"
      @cancel="$emit('cancel')"
    >
      <template #input="{ prop }">
        <b-input v-model="form[prop]" size="sm"></b-input>
      </template>
    </layout>

    <b-row class="mb-2">
      <b-col cols="12" md="4" class="font-weight-bold">Description</b-col>
      <b-col>
        <b-textarea v-model="form.description" size="sm"></b-textarea>
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
  watch: {
    'form.avatar'(val) {
      this.$emit('avatar', val);
    },
  },
  methods: {
    ...mapActions('organizer/profile', ['updateProfile']),
    async save() {
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
