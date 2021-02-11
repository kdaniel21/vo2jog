export default {
  data() {
    return {
      maxNumOfCategories: 8,
      priorityCategories: ['main', 'terrain', 'distance'],
      placeholderImage:
        'http://vo2jog.herokuapp.com:4000/events/img/event-5fa4e65399fadd4f0ebf1d8c-1608548616254.jpeg',
    };
  },
  computed: {
    url() {
      return `/e/${this.event.id}`;
    },
    image() {
      return this.event.imageCover || this.placeholderImage;
    },
    startDate() {
      if (!this.event.startDate) return 'No date yet.';

      return this.$dateFns.format(this.event.startDate, 'do LLLL yyyy');
    },
    location() {
      if (!this.event || !this.event.location) return 'Unknown Location';

      return this.event.location.address.city;
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
