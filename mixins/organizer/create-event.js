import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('organizer/events', ['createEvent']),
    onCreateEvent() {
      this.$buefy.dialog.prompt({
        message: this.$t('organizer.create_event.message'),
        inputAttrs: {
          placeholder: this.$t('organizer.create_event.placeholder'),
          required: true,
        },
        trapFocus: true,
        confirmText: this.$t('organizer.create_event.confirm'),
        cancelText: this.$t('common.cancel'),
        onConfirm: this.onConfirm,
      });
    },
    async onConfirm(name) {
      try {
        await this.createEvent(name);
        this.$toast.success(this.$t('toast.success.create_event'));
      } catch {
        this.$toast.error(this.$t('toast.error.create_event'));
      }
    },
  },
};
