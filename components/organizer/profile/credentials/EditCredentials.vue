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
import Layout from '@/components/organizer/profile/Layout';

export default {
  name: 'EditCredentials',
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
    save() {},
  },
};
</script>

<style></style>
