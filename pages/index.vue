<template>
  <b-row id="app" class="mx-2">
    <!-- FILTER CARD ONlY ON >=MD -->
    <b-col cols="0" md="3" class="d-none d-md-block">
      <filter-card />
    </b-col>
    <b-col cols="12" md="9">
      <div class="d-flex justify-content-between pl-1">
        <h1>Races</h1>
        <!-- FILTER MODAL TOGGLE ON <MD -->
        <filter-modal class="d-md-none" />
      </div>
      <button-row />
      <event-list />
    </b-col>
  </b-row>
</template>

<script>
import FilterCard from '@/components/race-finder/event-filter/FilterCard';
import FilterModal from '@/components/race-finder/event-filter/FilterModal';
import EventList from '@/components/race-finder/event-list/EventList';
import ButtonRow from '@/components/race-finder/button-row/ButtonRow';

export default {
  name: 'Index',
  components: {
    FilterCard,
    FilterModal,
    EventList,
    ButtonRow,
  },
};
</script>
