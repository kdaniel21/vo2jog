<template>
  <show-profile>
    <template #header>
      <h3>Edit Profile</h3>
      <span>
        <b-button variant="link" @click="cancelEdit">Cancel</b-button>
        <b-button variant="link" @click="save">Save</b-button></span
      >
    </template>

    <template #content="{ prop }">
      <b-form-input
        v-model="form[prop]"
        :placeholder="prop"
        class="w-50 text-capitalize"
        size="sm"
      ></b-form-input>
    </template>

    <template #description>
      <b-form-textarea
        v-model="form.description"
        class="w-50 mb-1"
      ></b-form-textarea>
    </template>

    <template #default>
      <div class="d-flex justify-content-between">
        <span>Avatar</span>
        <b-form-file v-model="form.avatar" class="w-50" size="sm"></b-form-file>
      </div>
    </template>
  </show-profile>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import ShowProfile from '@/components/organizer/profile/ShowProfile';

export default {
  name: 'EditProfile',
  components: {
    ShowProfile,
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
      this.$emit('avatar', URL.createObjectURL(val));
    },
  },
  methods: {
    ...mapActions('organizer/profile', ['updateProfile']),
    async save() {
      try {
        const data = {
          ...this.form,
          avatar: null,
        };

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
