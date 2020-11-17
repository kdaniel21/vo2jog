<template>
  <div id="index">
    <!-- <create-competition /> -->
    <div class="d-flex justify-content-between flex-wrap">
      <h3>Competitions</h3>
      <nuxt-link to="competitions/new">
        <b-button variant="primary" class="btn-block-xs-only">
          New Competition
        </b-button>
      </nuxt-link>
    </div>

    <card-deck />
  </div>
</template>

<script>
import CreateCompetition from '@/components/organizer/edit/competition/create/CreateCompetition';
import CardDeck from '@/components/organizer/edit/competition/show/CardDeck';

export default {
  name: 'index',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { CreateCompetition, CardDeck },
};
</script>

<style></style>
