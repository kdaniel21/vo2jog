<template>
  <div id="filter-overview">
    <filter-checkbox
      name="sport"
      :options="['Triathlon', 'Running', 'Cycling', 'Swimming']"
    />
    <filter-checkbox
      name="type"
      :options="['Road', 'Trail', 'Uphill', 'Downhill']"
    />
    <location />
    <filter-checkbox
      name="distance"
      :options="['5K', '10K', 'Half-Marathon', 'Marathon']"
    />
  </div>
</template>

<script>
import Location from '@/components/race-finder/event-filter/Location';
import FilterCheckbox from '@/components/race-finder/event-filter/FilterCheckbox';

export default {
  name: 'FilterOverview',
  components: {
    Location,
    FilterCheckbox,
  },
};
</script>
