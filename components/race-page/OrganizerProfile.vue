<template>
  <div id="organizer-profile" class="d-flex flex-wrap justify-content-start">
    <b-avatar
      src="https://placekitten.com/300/300"
      size="lg"
      class="mr-2"
    ></b-avatar>
    <div class="align-self-center">
      <h6 class="organizer-name my-0">ReadyEvents</h6>
      <p class="organizer-motto my-0">Lorem ipsum dolor sit amet.</p>
      <!-- <p class="view-profile small my-0">View Profile</p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizerProfile',
};
</script>

<style scoped>
.organizer-motto {
  font-size: 75%;
}
</style>
