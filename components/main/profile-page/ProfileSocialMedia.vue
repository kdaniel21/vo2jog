<template>
  <ul class="has-text-centered">
    <li v-for="site in socialMediaWithIcons" :key="site.name">
      <a :href="site.link" target="_blank" class="has-text-dark is-size-5">
        <b-icon :icon="site.icon" />
        <span>{{ site.name }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProfileSocialMedia',
  props: {
    socialMedia: { type: Array, default: () => [] },
  },
  computed: {
    socialMediaWithIcons() {
      return this.socialMedia.map(site => ({
        ...site,
        icon: site.icon.length > 1 ? site.icon : site.icon[0],
      }));
    },
  },
};
</script>
