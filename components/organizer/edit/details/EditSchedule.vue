<template>
  <div id="edit-schedule">
    <h2 class="title">{{ $t('common.schedule') }}</h2>

    <b-tabs v-model="selectedDay" type="is-toggle">
      <b-tab-item
        v-for="(dayItems, dayNum) of groupedScheduleItems"
        :key="dayNum"
        :label="$t('organizer.details.day_x', { dayNum: dayNum + 1 })"
        icon="calendar-day"
      >
        <edit-schedule-item :items="dayItems" :day="dayNum" />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'EditSchedule',
  data() {
    return {
      selectedDay: 0,
    };
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
    groupedScheduleItems() {
      return this.selectedEvent.schedule.reduce((grouped, item) => {
        const dayNum = this.$dateFns.differenceInCalendarDays(
          item.time,
          this.selectedEvent.startDate
        );
        if (!grouped[dayNum]) grouped[dayNum] = [];

        grouped[dayNum].push(item);
        return grouped;
      }, []);
    },
  },
};
</script>
