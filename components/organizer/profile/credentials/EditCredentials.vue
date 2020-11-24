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
        <form-group :name="prop" :validator="$v.form[prop]">
          <b-form-input
            v-model.lazy="form[prop]"
            slot-scope="{ attrs, listeners }"
            v-bind="attrs"
            :type="prop === 'email' ? 'text' : 'password'"
            size="sm"
            v-on="listeners"
          ></b-form-input>
        </form-group>
      </template>
    </layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {
  required,
  sameAs,
  email,
  requiredIf,
  minLength,
} from 'vuelidate/lib/validators';
import toaster from '@/mixins/toaster';
import Layout from '@/components/organizer/profile/Layout';

export default {
  name: 'EditCredentials',
  components: { Layout },
  mixins: [toaster],
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
  validations: {
    form: {
      email: { required, email },
      newPassword: {
        minLength: minLength(8),
      },
      passwordConfirm: {
        required: requiredIf(form => !!form.passwordConfirm),
        passwordConfirmMatch: sameAs('newPassword'),
      },
      currentPassword: { required },
    },
  },
  methods: {
    ...mapActions('organizer/profile', ['updateCredentials']),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      console.log(name, $dirty ? $error : null);
      return $dirty ? !$error : null;
    },
    async save() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

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
