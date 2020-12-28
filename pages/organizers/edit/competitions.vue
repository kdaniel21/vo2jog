<template>
  <div class="container mb-6">
    <h1 class="title mb-2">{{ $t('organizer.competitions.title') }}</h1>
    <p>{{ $t('organizer.competitions.description') }}</p>

    <competitions-list />
  </div>
</template>

<script>
export default {
  layout: 'organizer',
};
</script>

<style></style>
