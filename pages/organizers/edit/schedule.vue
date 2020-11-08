<template>
  <div id="schedule">
    <schedule-generator />
  </div>
</template>

<script>
import ScheduleGenerator from '@/components/organizer/edit/schedule/ScheduleGenerator';

export default {
  name: 'schedule',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: {
    ScheduleGenerator,
  },
};
</script>

<style></style>
