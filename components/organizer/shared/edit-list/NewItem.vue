<template>
  <div id="new-item">
    <div class="textarea px-3 pt-1 pb-2 mb-3">
      <form-group>
        <b-input
          id="new-input"
          :value="value"
          :placeholder="placeholder"
          @input="onInput"
        />
      </form-group>

      <div class="is-flex">
        <slot />
      </div>
    </div>

    <div class="is-flex is-justify-content-end">
      <b-button
        v-if="isEdit"
        type="is-light"
        class="mr-2"
        @click="$emit('cancel')"
      >
        {{ $t('common.cancel') }}
      </b-button>

      <b-button
        type="is-primary"
        :disabled="validator ? validator.$anyError : false"
        @click="$emit('save')"
      >
        {{ isEdit ? $t('common.save') : $t('common.add_item') }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewItem',
  props: {
    value: { type: String, default: null },
    placeholder: { type: String, default: null },
    validator: { type: Object, default: null },
    isEdit: { type: Boolean, default: false },
  },
  methods: {
    onInput(val) {
      if (this.validator) this.validator.$touch();
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss">
#new-item {
  .textarea {
    min-height: 0;
    height: auto;
  }

  #new-input {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    padding: 0;

    &:focus {
      box-shadow: none;
    }
  }
}
</style>
