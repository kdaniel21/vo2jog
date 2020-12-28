<template>
  <div id="edit-profile-information" class="columns">
    <edit-profile-avatar />
    <div class="column">
      <form-group
        :label="$t('common.name')"
        :validator="$v.form.name"
        horizontal
      >
        <b-input
          v-model="form.name"
          :placeholder="$t('common.name')"
          @input="$v.form.name.$touch"
        />
      </form-group>

      <form-group
        :label="$t('organizer.profile.motto')"
        :validator="$v.form.motto"
        horizontal
      >
        <b-input
          v-model="form.motto"
          :placeholder="$t('organizer.profile.motto')"
          @input="$v.form.motto.$touch"
        />
      </form-group>

      <form-group
        :label="$t('common.description')"
        :validator="$v.form.description"
        horizontal
      >
        <b-input
          v-model="form.description"
          type="textarea"
          :placeholder="$t('organizer.profile.description_placeholder')"
          @input="$v.form.description.$touch"
        />
      </form-group>

      <button-right @click="onSave" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required, maxLength } from 'vuelidate/lib/validators';
import { alphaNumWhiteDiacritic } from '@/plugins/vuelidate/custom-validators';

export default {
  name: 'EditProfileInformation',
  data() {
    return {
      form: {
        avatar: this.$auth.user.avatar,
        name: this.$auth.user.name,
        motto: this.$auth.user.motto,
        description: this.$auth.user.description,
      },
    };
  },
  validations: {
    form: {
      name: { required, alphaNumWhiteDiacritic },
      motto: { maxLength: maxLength(50) },
      description: { maxLength: maxLength(800) },
    },
  },
  methods: {
    ...mapActions('organizer/profile', ['updateProfile']),
    onSave() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      this.updateProfile(this.form);
      this.$v.form.$reset();
    },
  },
};
</script>

<style>
#edit-profile-information #profile-avatar {
  height: min(60vw, 250px);
  width: min(60vw, 250px);
}
#edit-profile-information #profile-avatar > img {
  height: 100% !important;
}
</style>
