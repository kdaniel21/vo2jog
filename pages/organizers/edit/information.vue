<template>
  <div class="container mb-6">
    <div class="mb-5">
      <h1 class="title mb-2">{{ $t('organizer.info.title') }}</h1>
      <i18n path="organizer.info.description" tag="p">
        <template #link>
          <nuxt-link to="/organizers/edit/details">
            {{ $t('organizer.info.click_here') }}
          </nuxt-link>
        </template>
      </i18n>
    </div>

    <basic-information class="my-3" />

    <categories class="my-3" />

    <image-upload class="my-3" />

    <description class="my-3" />
  </div>
</template>

<script>
export default {
  layout: 'organizer',
};
</script>

<style></style>
