<template>
  <b-row id="event-list">
    <b-col v-for="event in events" :key="event.id" cols="12" xl="6">
      <event-list-item :event="event" />
    </b-col>
  </b-row>
</template>

<script>
import EventListItem from '@/components/race-finder/event-list/EventListItem';

export default {
  name: 'EventList',
  components: {
    EventListItem,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          location: 'London',
          distances: ['10km', '5km', '7.5km'],
          startDate: new Date(),
          endDate: new Date(),
          name: 'London Marathon',
          description: 'Lorem ipsum lorem ipsum lorem ipsum',
        },
        {
          id: 1,
          location: 'London',
          distances: ['10km', '5km', '7.5km'],
          startDate: new Date(),
          endDate: new Date(),
          name: 'London Marathon',
          description: 'Lorem ipsum lorem ipsum lorem ipsum',
        },
        {
          id: 1,
          location: 'London',
          distances: ['10km', '5km', '7.5km'],
          startDate: new Date(),
          endDate: new Date(),
          name: 'London Marathon',
          description: 'Lorem ipsum lorem ipsum lorem ipsum',
        },
      ],
    };
  },
};
</script>
