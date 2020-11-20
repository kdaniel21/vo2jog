<template>
  <div id="contact-people">
    <div class="d-flex justify-content-between">
      <h3>Contact People</h3>
      <b-button variant="link" @click="addPerson">Add</b-button>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa
      tempore repellat animi neque vitae! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Repellendus ipsum qui culpa distinctio voluptatem.
      Itaque, quae. Placeat quia consequatur modi.
    </p>

    <contact-people-table ref="table" class="mt-3" />
  </div>
</template>

<script>
import ContactPeopleTable from '@/components/organizer/profile/contact-people/ContactPeopleTable';

export default {
  name: 'ContactPeople',
  components: { ContactPeopleTable },
  methods: {
    addPerson() {
      if (this.$refs.table) this.$refs.table.addPerson();
    },
  },
};
</script>

<style></style>
