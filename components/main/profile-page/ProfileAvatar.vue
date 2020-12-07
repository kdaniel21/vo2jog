<template>
  <b-avatar id="profile-avatar" :src="img" size="min(60vw, 300px)"></b-avatar>
</template>

<script>
export default {
  name: 'ProfileAvatar',
  props: {
    img: { type: String, default: 'https://placekitten.com/1000' },
  },
};
</script>
