<template>
  <div id="new">
    <create-competition />
  </div>
</template>

<script>
import CreateCompetition from '@/components/organizer/edit/competition/create/CreateCompetition';

export default {
  name: 'new',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { CreateCompetition },
};
</script>

<style></style>
