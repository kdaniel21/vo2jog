<template>
  <div id="greeting" class="hero is-light">
    <div class="hero-body py-4 columns">
      <div
        id="avatar-container"
        class="column is-narrow is-flex is-justify-content-center"
      >
        <b-image id="avatar" :src="$auth.user.avatar" rounded ratio="1by1" />
      </div>

      <div class="column is-narrow">
        <h1 class="is-size-2 title my-auto mt-4">
          {{ $t('organizer.dashboard.greeting', $auth.user) }}
        </h1>
        <h3 class="subtitle">{{ $t('organizer.dashboard.subtitle') }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
};
</script>

<style scoped>
#avatar {
  height: min(30vh, 200px);
  width: min(30vh, 200px);
  padding-top: 0;
  margin: auto;
}
@media screen and (max-width: 768px) {
  .hero-body {
    text-align: center;
  }
}
</style>
