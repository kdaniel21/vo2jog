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
import SocialMedia from '@/components/race-page/SocialMedia';
import Schedule from '@/components/race-page/Schedule';
import Location from '@/components/race-page/Location';
import Documents from '@/components/race-page/Documents';

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
