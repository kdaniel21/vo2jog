export default {
  methods: {
    toast(
      title,
      message,
      { toaster = 'b-toaster-top-center', variant, delay = 3600 }
    ) {
      this.$bvToast.toast(message, {
        title,
        autoHideDelay: delay,
        toaster,
        variant,
      });
    },
    successToast(message, title = 'Success') {
      this.toast(title, message, { variant: 'success' });
    },
    errorToast(message, title = 'Error') {
      this.toast(title, message, { variant: 'danger' });
    },
    warningToast(message, title = 'Warning') {
      this.toast(title, message, { variant: 'warning' });
    },
  },
};
