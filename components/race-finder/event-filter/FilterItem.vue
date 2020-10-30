<template>
  <div id="filter-item" class="accordion">
    <h5 v-b-toggle="accordionName" class="text-capitalize">{{ title }}</h5>
    <b-collapse
      :id="accordionName"
      :accordion="accordionName"
      role
      :visible="visible"
    >
      <b-form-group>
        <slot></slot>
      </b-form-group>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {
    title: {
      type: String,
      default: null,
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    accordionName() {
      return `${this.title.toLowerCase()}-accordion`;
    },
  },
};
</script>
