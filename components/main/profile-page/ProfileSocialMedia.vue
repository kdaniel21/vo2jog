<template>
  <ul class="list-unstyled text-center">
    <li v-for="site in socialMedia">
      <a :href="site.link" target="_blank" class="text-dark h5">
        <fa
          :icon="site.icon.length > 1 ? site.icon : site.icon[0]"
          fixed-width
        />
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
};
</script>

<style></style>
