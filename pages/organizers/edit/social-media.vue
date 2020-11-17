<template>
  <div id="social-media">
    <create-social-media />

    <hr />
    <social-media-list />
  </div>
</template>

<script>
import CreateSocialMedia from '@/components/organizer/edit/social-media/CreateSocialMedia';
import SocialMediaList from '@/components/organizer/edit/social-media/SocialMediaList';

export default {
  name: 'SocialMedia',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { CreateSocialMedia, SocialMediaList },
};
</script>

<style></style>
