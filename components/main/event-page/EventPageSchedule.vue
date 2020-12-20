<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title is-4">{{ $t('event.schedule') }}</h2>

      <aside class="menu">
        <div v-for="daySchedule in schedule" :key="daySchedule.day">
          <p
            v-if="schedule.length > 1 && daySchedule.items.length"
            class="menu-label is-size-6 mb-0"
          >
            {{ `${$t('event.day')} ${daySchedule.day}` }}
          </p>
          <ul class="menu-list">
            <li v-for="item in daySchedule.items" :key="item.id">
              <a>
                <span>{{ $dateFns.format(item.startTime, 'HH:mm') }}:</span>
                <span>{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
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
