import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('organizer/events', ['createEvent']),
    onCreateEvent() {
      this.$buefy.dialog.prompt({
        message: this.$t('organizer_create_event.message'),
        inputAttrs: {
          placeholder: this.$t('organizer_create_event.placeholder'),
          required: true,
        },
        trapFocus: true,
        confirmText: this.$t('organizer_create_event.confirm'),
        cancelText: this.$t('common.cancel'),
        onConfirm: this.onConfirm,
      });
    },
    async onConfirm(name) {
      try {
        await this.createEvent(name);
        this.$toast.success(this.$t('organizer_create_event.success_toast'));
      } catch {
        this.$toast.error(this.$t('organizer_create_event.error_toast'));
      }
    },
  },
};
