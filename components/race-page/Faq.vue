<template>
  <div id="faq accordion" role="tablist">
    <h5>Frequently Asked Questions</h5>
    <div v-for="i in [1, 2, 3, 4, 5]" :key="i">
      <b-button v-b-toggle="'faq' + i" block variant="link" class="text-left">
        Question {{ i }}
      </b-button>
      <b-collapse
        :id="'faq' + i"
        role="tabpanel"
        accordion="faq-accordion"
        class="px-3"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        alias, unde odio laudantium eius praesentium iusto eaque et nam corporis
        facilis sed esse aliquid rerum. Quas voluptate ad repellat soluta.
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
};
</script>

<style scoped>
.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}
</style>
