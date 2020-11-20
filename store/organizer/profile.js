import camelToKebab from '@/assets/utils/camelToKebab';

export const state = () => ({});

export const actions = {
  async updateProfile(context, updatedItems) {
    await this.$axios.patch('/api/profile', updatedItems);
    await this.$auth.fetchUser();
  },
  async updateCredentials(context, updatedItems) {
    await this.$axios.patch('/api/profile/credentials', updatedItems);
    await this.$auth.fetchUser();
  },
  async addProfileItem(context, { name, data, url }) {
    const endpointName = camelToKebab(name);
    const endpointUrl = url || `/api/profile/${endpointName}`;
    await this.$axios.post(endpointUrl, data);
    await this.$auth.fetchUser();
  },
  async updateProfileItem(context, { name, data, url, itemId }) {
    const id = itemId || data._id;
    const endpointName = camelToKebab(name);
    const endpointUrl = url || `/api/profile/${endpointName}/${id}`;
    await this.$axios.patch(endpointUrl, data);
    await this.$auth.fetchUser();
  },
  async deleteProfileItem(context, { name, url, itemId }) {
    const endpointName = camelToKebab(name);
    const endpointUrl = url || `/api/profile/${endpointName}/${itemId}`;
    await this.$axios.delete(endpointUrl);
    await this.$auth.fetchUser();
  },
};
