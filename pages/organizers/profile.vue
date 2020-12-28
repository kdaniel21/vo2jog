<template>
  <div class="container mb-6">
    <h1 class="title">{{ $t('organizer.profile.title') }}</h1>

    <edit-profile-information />

    <edit-profile-social-media />

    <edit-profile-contacts />
  </div>
</template>

<script>
export default {
  layout: 'organizer',
};
</script>

<style></style>
