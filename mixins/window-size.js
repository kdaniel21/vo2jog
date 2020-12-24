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
  beforeDestroy() {
    window.removeEventListener('resize', this.setSize);
  },
  methods: {
    setSize() {
      if (!process.client) return;

      const { innerHeight, innerWidth } = window;
      this.width = innerWidth;
      this.height = innerHeight;
    },
  },
};
