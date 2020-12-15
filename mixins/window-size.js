export default {
  data() {
    return {
      width: null,
      height: null,
    };
  },
  mounted() {
    this.$nextTick(() => window.addEventListener('resize', this.setSize));
  },
  created() {
    this.setSize();
  },
  methods: {
    setSize() {
      if (!process.client) return;

      const { height, width } = screen;
      this.width = width;
      this.height = height;
    },
  },
};
