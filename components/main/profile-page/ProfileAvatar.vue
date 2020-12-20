<template>
  <!-- <b-avatar id="profile-avatar" :src="img" size="min(60vw, 300px)"></b-avatar> -->
  <figure id="profile-avatar" class="image">
    <img :src="img" alt="Profile picture" class="is-rounded" />
  </figure>
</template>

<script>
export default {
  name: 'ProfileAvatar',
  props: {
    img: { type: String, default: 'https://placekitten.com/1000' },
  },
};
</script>

<style scoped>
#profile-avatar {
  height: min(60vw, 300px);
  width: min(60vw, 300px);
}
</style>
