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
};
