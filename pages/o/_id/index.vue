<template>
  <div id="organizer-profile" class="container">
    <div class="columns is-desktop is-2 is-variable">
      <div class="column is-narrow">
        <profile-avatar :img="'https://i.pravatar.cc/300'" />
      </div>
      <div class="column">
        <profile-information :profile="profile" />

        <profile-events class="my-2" />
        <profile-contacts :contacts="profile.contactPeople" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { id } = params;
    const res = await $axios.get(`/api/organizers/${id}`);
    return { profile: res.data.data };
  },
};
</script>

<style></style>
