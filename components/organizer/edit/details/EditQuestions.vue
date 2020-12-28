<template>
  <div id="edit-questions">
    <h2 class="title">{{ $t('organizer.details.questions') }}</h2>

    <questions-list />

    <new-question class="mt-2" />
  </div>
</template>

<script>
export default {
  name: 'EditQuestions',
};
</script>

<style></style>
