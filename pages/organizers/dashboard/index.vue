<template>
  <div id="index">
    <h4 class="mb-5">Welcome {{ $auth.user.name }}!</h4>
    <my-events />
  </div>
</template>

<script>
import MyEvents from '@/components/organizer/dashboard/MyEvents';

export default {
  name: 'Index',
  layout: 'organizer',
  middleware: 'auth',
  components: {
    MyEvents,
  },
};
</script>
