<template>
  <div class="w-100">
    <show-profile>
      <template #header>
        <h3>Edit Profile</h3>
        <span>
          <b-button variant="link" @click="cancelEdit">Cancel</b-button>
          <b-button variant="link" @click="save">Save</b-button>
        </span>
      </template>

      <template #input="{ prop }">
        <b-input v-model="form[prop]" size="sm"></b-input>
      </template>

      <template #description>
        <b-textarea v-model="form.description" size="sm"></b-textarea>
      </template>
    </show-profile>

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
      console.log('watch', val);
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
