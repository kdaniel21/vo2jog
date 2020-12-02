<template>
  <div id="schedule">
    <div v-for="day in schedule" :key="day.day">
      <h5 v-if="eventLength > 1 && day.items.length">Day {{ day.day }}</h5>
      <ul :id="'day' + day.day" class="list-unstyled">
        <li
          v-for="scheduleItem in day.items"
          :key="scheduleItem.name"
          class="schedule-item small"
        >
          <span class="time">
            {{ $dateFns.format(scheduleItem.startTime, 'HH:mm') }}
          </span>
          <span class="name">{{ scheduleItem.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Schedule',
  computed: {
    ...mapState('events', ['viewedEvent']),
    schedule() {
      return this.viewedEvent.schedule;
    },
    eventLength() {
      if (!this.viewedEvent.endDate || !this.viewedEvent.startDate) return 1;

      return this.$dateFns.differenceInDays(
        this.viewedEvent.startDate,
        this.viewedEvent.endDate
      );
    },
  },
};
</script>
