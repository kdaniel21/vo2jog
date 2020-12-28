<template>
  <div id="edit-competition">
    <h2 class="title">{{ $t('organizer.competitions.edit_competition') }}</h2>

    <edit-competition-basic :competition="competition" />
  </div>
</template>

<script>
export default {
  name: 'EditCompetition',
  props: {
    competition: { type: Object, default: null },
  },
};
</script>

<style></style>
