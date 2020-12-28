<template>
  <b-image
    id="profile-avatar"
    :src="img"
    alt="Profile Picture"
    rounded
    class="container"
  />
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
