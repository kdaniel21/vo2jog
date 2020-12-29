<template>
  <div class="container">
    <h2 class="title">{{ $t('organizer.competitions.edit_competition') }}</h2>

    <edit-competition-name
      ref="name-form"
      v-model="competition.name"
      @save="onSave"
    />

    <div class="columns is-desktop mt-6">
      <edit-competition-basic
        ref="basic-form"
        v-model="competition"
        class="column"
      />
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  layout: 'organizer',
  data() {
    return {
      competition: {},
    };
  },
  fetch() {
    // Load competitions from store
    const { id } = this.$route.params;
    const { competitions } = this.$store.state.organizer.events.selectedEvent;
    const index = this.$store.state.organizer.events.selectedEvent.competitions.findIndex(
      competition => competition.id === id
    );

    if (index === -1)
      throw new Error(this.$t('organizer.competitions.not_found'));

    // deep copy
    this.competition = JSON.parse(JSON.stringify(competitions[index]));
  },
  methods: {
    ...mapActions('organizer/events', ['updateItem']),
    onSave() {
      this.$refs['name-form'].$v.$touch();
      this.$refs['basic-form'].$v.$touch();
      if (
        this.$refs['name-form'].$v.$anyError ||
        this.$refs['basic-form'].$v.$anyError
      )
        return;

      this.updateItem({ name: 'competition', data: this.competition });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

@media screen and (min-width: $tablet) {
  .columns {
    & .column:first-child {
      border-right: 1px solid $grey-lighter;
    }
  }
}
</style>
