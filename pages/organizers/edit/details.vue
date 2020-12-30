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

    <collapse-card :title="$t('common.schedule')" class="my-2">
      <edit-schedule />
    </collapse-card>

    <collapse-card :title="$t('common.documents')" class="my-2">
      <edit-documents class="mb-5" />
    </collapse-card>

    <collapse-card :title="$t('organizer.details.social_media')" class="my-2">
      <edit-social-media />
    </collapse-card>

    <collapse-card :title="$t('organizer.details.questions')" class="my-2">
      <edit-questions />
    </collapse-card>
  </div>
</template>

<script>
export default {
  layout: 'organizer',
  middleware: ['event-selected'],
};
</script>

<style></style>
