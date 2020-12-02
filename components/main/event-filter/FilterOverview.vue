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
export default {
  name: 'FilterOverview',
};
</script>
