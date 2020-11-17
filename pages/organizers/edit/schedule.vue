<template>
  <div id="schedule">
    <schedule-generator />

    <hr />
    <h3>Current Schedule</h3>
    <schedule-list />
  </div>
</template>

<script>
import ScheduleGenerator from '@/components/organizer/edit/schedule/ScheduleGenerator';
import ScheduleList from '@/components/organizer/edit/schedule/ScheduleList';

export default {
  name: 'schedule',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: {
    ScheduleGenerator,
    ScheduleList,
  },
};
</script>

<style></style>
