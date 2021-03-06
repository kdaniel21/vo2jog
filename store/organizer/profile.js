/* eslint-disable no-undef */
import camelToKebab from '@/assets/utils/camelToKebab';

export const state = () => ({});

export const actions = {
  async updateProfile(context, updatedItems) {
    try {
      await this.$axios.patch('/api/profile', updatedItems);
      await this.$auth.fetchUser();

      this.$toast.success($nuxt.$t('toast.success.profile_updated'));
    } catch {
      this.$toast.error($nuxt.$t('toast.error.profile_updated'));
    }
  },
  showUpdateCredentialsConfirm({ dispatch }, payload) {
    $nuxt.$buefy.dialog.confirm({
      type: 'is-danger',
      message: $nuxt.$t('organizer.account.update_confirm'),
      cancelText: $nuxt.$t('common.cancel'),
      confirmText: $nuxt.$t('common.confirm'),
      onConfirm: () => dispatch('updateCredentials', payload),
    });
  },
  async updateCredentials(context, updatedItems) {
    try {
      await this.$axios.patch('/api/profile/credentials', updatedItems);
      await this.$auth.fetchUser();

      $nuxt.$toast.success($nuxt.$t('toast.success.account_updated'));
    } catch {
      $nuxt.$toast.error($nuxt.$t('toast.error.account_updated'));
    }
  },
  async addProfileItem(context, { name, data, url }) {
    try {
      const endpointName = camelToKebab(name);
      const endpointUrl = url || `/api/profile/${endpointName}`;
      await this.$axios.post(endpointUrl, data);
      await this.$auth.fetchUser();

      this.$toast.success($nuxt.$t('toast.success.profile_updated'));
    } catch {
      this.$toast.error($nuxt.$t('toast.error.profile_updated'));
    }
  },
  async updateProfileItem(context, { name, data, url, itemId }) {
    try {
      const id = itemId || data.id;
      const endpointName = camelToKebab(name);
      const endpointUrl = url || `/api/profile/${endpointName}/${id}`;
      await this.$axios.patch(endpointUrl, data);
      await this.$auth.fetchUser();

      this.$toast.success($nuxt.$t('toast.success.profile_updated'));
    } catch {
      this.$toast.error($nuxt.$t('toast.error.profile_updated'));
    }
  },
  async deleteProfileItem(context, { name, url, itemId }) {
    try {
      const endpointName = camelToKebab(name);
      const endpointUrl = url || `/api/profile/${endpointName}/${itemId}`;
      await this.$axios.delete(endpointUrl);
      await this.$auth.fetchUser();

      this.$toast.success($nuxt.$t('toast.success.profile_updated'));
    } catch {
      this.$toast.error($nuxt.$t('toast.error.profile_updated'));
    }
  },
};
