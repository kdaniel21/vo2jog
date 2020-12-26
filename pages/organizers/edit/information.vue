<template>
  <div class="container mb-6">
    <div class="mb-5">
      <h1 class="title mb-2">{{ $t('organizer.info.title') }}</h1>
      <i18n path="organizer.info.description" tag="p">
        <nuxt-link slot="link" to="/organizers/edit/details">
          {{ $t('organizer.info.click_here') }}
        </nuxt-link>
      </i18n>
    </div>
    <collapse-card :title="$t('organizer.info.basic_information')" class="my-2">
      <edit-basic-information />
    </collapse-card>

    <collapse-card :title="$t('organizer.info.categories')" class="my-2">
      <edit-categories />
    </collapse-card>

    <collapse-card :title="$t('organizer.info.image')" class="my-2">
      <edit-image-upload />
    </collapse-card>

    <collapse-card :title="$t('common.description')" class="my-2">
      <edit-description />
    </collapse-card>

    <collapse-card :title="$t('common.location')" class="my-2">
      <edit-location />
    </collapse-card>
  </div>
</template>

<script>
export default {
  layout: 'organizer',
};
</script>

<style></style>
