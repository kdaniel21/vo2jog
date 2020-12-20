<template>
  <div id="organizer-profile" class="container">
    <div class="columns is-desktop is-2 is-variable">
      <div class="column is-narrow">
        <profile-avatar :img="'https://i.pravatar.cc/300'" />
      </div>
      <div class="column">
        <profile-information :profile="profile" />

        <profile-events />
      </div>
    </div>
    <!-- <div class="d-flex flex-wrap justify-content-center">
      <div class="text-center mr-md-5">
        <profile-avatar :img="'https://i.pravatar.cc/300'" />
        <profile-social-media
          class="mt-4"
          :social-media="profile.socialMedia"
        />
      </div>
      <profile-information :profile="profile" />
    </div> -->
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
