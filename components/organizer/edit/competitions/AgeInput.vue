<template>
  <form-group id="age-input" v-bind="$attrs" horizontal>
    <b-numberinput
      v-model="age"
      :max="new Date().getFullYear()"
      :placeholder="placeholder || $attrs.label"
      @input="validator ? validator.$touch() : null"
    />
  </form-group>
</template>

<script>
export default {
  name: 'AgeInput',
  props: {
    value: { type: Number, default: 2000 },
    validator: { type: Object, default: null },
    placeholder: { type: String, default: null },
  },
  computed: {
    age: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style></style>
