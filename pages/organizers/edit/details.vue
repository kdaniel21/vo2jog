<template>
  <div class="container mb-6">
    <!-- TITLE -->
    <div class="mb-5">
      <h1 class="title mb-2">{{ $t('organizer.details.title') }}</h1>
      <i18n path="organizer.details.description" tag="p">
        <span slot="proverb" class="is-italic has-text-primary">
          {{ $t('organizer.details.details_proverb') }}
        </span>
      </i18n>
    </div>

    <edit-schedule />

    <edit-documents />
  </div>
</template>

<script>
export default {
  layout: 'organizer',
};
</script>

<style></style>
