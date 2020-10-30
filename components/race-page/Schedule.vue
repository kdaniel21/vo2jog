<template>
  <ul id="schedule" class="list-unstyled">
    <li v-for="i in [1, 2, 3, 4, 5, 6]" :key="i" class="schedule-item small">
      <span class="time">9.00</span>
      <span class="name">Check-In</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Schedule',
  components: {},
};
</script>

<style>
</style>