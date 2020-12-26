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

    <!-- <b-tabs v-model="activeTab" type="is-boxed">
      <b-tab-item label="Basic Information">
        <edit-basic-information />
      </b-tab-item>

      <b-tab-item label="Categories">
        <edit-categories />
      </b-tab-item>

      <b-tab-item label="Image Upload">
        <edit-image-upload />
      </b-tab-item>

      <b-tab-item label="Description">
        <edit-description />
      </b-tab-item>
    </b-tabs> -->

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
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>

<style></style>
