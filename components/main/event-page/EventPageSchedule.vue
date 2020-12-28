<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title is-4">{{ $t('common.schedule') }}</h2>

      <b-menu :activable="false">
        <b-menu-list
          v-for="(dayItems, dayNum) in scheduleByDay"
          :key="dayNum"
          :label="$t('organizer.details.day_x', { dayNum: dayNum + 1 })"
        >
          <b-menu-item
            v-for="{ name, time } in dayItems"
            :key="name"
            icon="clock"
          >
            <template #label>
              <span class="has-text-weight-medium">
                {{ $dateFns.format(time, 'HH:mm') }}:
              </span>
              {{ name }}
            </template>
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPageSchedule',
  props: { event: { type: Object, default: null } },
  computed: {
    scheduleByDay() {
      return this.event.schedule.reduce((ordered, scheduleItem) => {
        const dayNumber = this.$dateFns.differenceInCalendarDays(
          scheduleItem.time,
          this.event.startDate
        );
        if (!ordered[dayNumber]) ordered[dayNumber] = [];

        ordered[dayNumber].push(scheduleItem);
        ordered[dayNumber].sort();
        return ordered;
      }, []);
    },
  },
};
</script>
