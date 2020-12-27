export default {
  computed: {
    socialMediaWithIcons() {
      return this.socialMedia.map(platform => ({
        ...platform,
        iconPack: platform.icon[0],
        icon: platform.icon[1],
      }));
    },
  },
};
