<template>
  <div id="event-page-schedule">
    <h2>Schedule Plan</h2>

    <div v-for="daySchedule in schedule" :key="daySchedule.day">
      <h4 v-if="schedule.length > 1 && daySchedule.items.length">
        Day {{ daySchedule.day }}
      </h4>

      <b-list-group>
        <b-list-group-item v-for="item in daySchedule.items" :key="item.id">
          <span>{{ $dateFns.format(item.startTime, 'HH:mm') }}:</span>
          <span>{{ item.name }}</span>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPageSchedule',
  props: { schedule: { type: Array, default: () => [] } },
};
</script>

<style></style>
