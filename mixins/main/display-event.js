export default {
  data() {
    return {
      maxNumOfCategories: 8,
      priorityCategories: ['main', 'terrain', 'distance'],
      placeholderImage: '',
    };
  },
  computed: {
    image() {
      return this.event.image || this.placeholderImage;
    },
    startDate() {
      if (!this.event.startDate) return;

      return this.$dateFns.format(this.event.startDate, 'do LLLL yyyy');
    },
    location() {
      if (!this.event || !this.event.location) return;

      const {
        address: { city, countryCode },
      } = this.event.location;
      return `${city}, ${countryCode}`;
    },
    categories() {
      if (!this.event) return;

      const { categories } = this.event;
      if (!categories || !categories.length) return;

      const { priorityCategories } = this;
      let listedCategories = [];

      categories.forEach(category => {
        if (priorityCategories.includes(category.name)) {
          listedCategories = [...listedCategories, ...category.value];
          return;
        }

        if (listedCategories.length >= this.maxNumOfCategories) return;
        category.value.forEach(value => {
          if (listedCategories.length < this.maxNumOfCategories)
            listedCategories.push(value);
        });
      });

      return listedCategories;
    },
  },
};
