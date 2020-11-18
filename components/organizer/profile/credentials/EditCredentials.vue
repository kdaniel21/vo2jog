<template>
  <div id="edit-credentials">
    <layout
      title="Edit Credentials"
      :props="['email', 'newPassword', 'passwordConfirm', 'currentPassword']"
      edit
      @cancel="$emit('cancel')"
      @save="save"
    >
      <template #input="{ prop }">
        <b-input
          v-model="form[prop]"
          :type="prop === 'email' ? 'text' : 'password'"
          size="sm"
        ></b-input>
      </template>
    </layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import Layout from '@/components/organizer/profile/Layout';

export default {
  name: 'EditCredentials',
  mixins: [toaster],
  components: { Layout },
  data() {
    return {
      form: {
        email: this.$store.state.auth.user.email,
        newPassword: null,
        passwordConfirm: null,
        currentPassword: null,
      },
    };
  },
  methods: {
    ...mapActions('organizer/profile', ['updateCredentials']),
    async save() {
      try {
        // Copy only the attributes with value
        const data = {};
        Object.keys(this.form).forEach(key => {
          if (this.form[key]) data[key] = this.form[key];
        });

        await this.updateCredentials(data);
        this.successToast('Credentials updated successfully!');
      } catch {
        this.errorToast('Could not update credentials!');
      }
    },
  },
};
</script>

<style></style>
