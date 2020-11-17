<template>
  <b-modal
    id="confirmation-modal"
    :title="title"
    ok-variant="danger"
    @ok="$emit('confirm')"
  >
    <slot>
      <p>
        Are you sure that you want to do this? This action is permament and not
        irreversible!
      </p>
    </slot>
  </b-modal>
</template>

<script>
export default {
  name: 'ConfirmationModal',
  props: { title: { type: String, default: 'Are you sure?' } },
};
</script>

<style></style>
