<template>
  <b-card id="left-card">
    <social-media />
    <hr />

    <h5>Location</h5>
    <location />
    <hr />

    <h5>Schedule</h5>
    <schedule />
    <hr />

    <h5>Documents</h5>
    <documents />
  </b-card>
</template>

<script>
import SocialMedia from '@/components/race-finder/event-page/SocialMedia';
import Schedule from '@/components/race-finder/event-page/Schedule';
import Location from '@/components/race-finder/event-page/Location';
import Documents from '@/components/race-finder/event-page/Documents';

export default {
  name: 'LeftCard',
  components: {
    Schedule,
    SocialMedia,
    Location,
    Documents,
  },
};
</script>
