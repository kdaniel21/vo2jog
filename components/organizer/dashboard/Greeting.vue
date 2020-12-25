<template>
  <div id="greeting" class="columns is-desktop">
    <div
      id="avatar-container"
      class="column is-narrow is-flex is-justify-content-center"
    >
      <b-image id="avatar" :src="$auth.user.avatar" rounded ratio="1by1" />
    </div>

    <div class="column is-narrow">
      <h1 class="is-size-2 title my-auto mt-4">
        {{ $t('organizer_dashboard.greeting', $auth.user) }}
      </h1>
      <h3 class="subtitle">{{ $t('organizer_dashboard.subtitle') }}</h3>
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
}
@media screen and (max-width: 1023px) {
  #greeting {
    text-align: center;
  }
}
</style>
