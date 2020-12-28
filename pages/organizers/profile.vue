<template>
  <div class="container">
    <h1 class="title">{{ $t('organizer.profile.title') }}</h1>

    <edit-profile-information />

    <edit-profile-social-media />
  </div>
</template>

<script>
export default {
  layout: 'organizer',
};
</script>

<style></style>
