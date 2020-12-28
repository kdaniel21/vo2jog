<template>
  <div id="icon-input">
    <!-- TRIGGER BUTTON -->
    <b-button
      :type="icon ? 'is-success is-light' : 'is-primary is-light'"
      :icon-pack="iconPack ? iconPack : null"
      :icon-left="icon ? icon : 'mouse-pointer'"
      @click="isModalActive = true"
    >
      <span v-if="!icon">{{ $t('organizer.shared.select_icon') }}</span>
    </b-button>

    <!-- MODAL -->
    <b-modal
      v-model="isModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
      @close="$emit('input', selected)"
    >
      <template #default="{ close }">
        <div class="modal-card">
          <header class="modal-card-head">
            <h3 class="modal-card-title">Select Icon</h3>
            <span class="is-clickable" @click="close">
              <b-icon icon="times" />
            </span>
          </header>

          <div
            class="modal-card-body is-flex is-flex-wrap-wrap is-justify-content-center"
          >
            <div
              v-for="option in iconOptions"
              :key="option.icon[1]"
              class="box is-clickable mx-2 has-text-centered"
              @click="selected = option.icon"
            >
              <b-icon
                :pack="option.icon[0]"
                :icon="option.icon[1]"
                size="is-large"
                :type="icon === option.icon[1] ? 'is-primary' : null"
              />
              <div class="is-size-7">{{ option.name }}</div>
            </div>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'IconInput',
  props: {
    value: { type: Array, default: null },
  },
  data() {
    return {
      isModalActive: false,
      selected: null,
      iconOptions: [
        { icon: ['fa', 'globe'], name: 'Website' },
        { icon: ['fa', 'images'], name: 'Race Photos' },
        { icon: ['fab', 'facebook'], name: 'Facebook' },
        { icon: ['fab', 'instagram'], name: 'Instagram' },
        { icon: ['fab', 'flickr'], name: 'Flickr' },
        { icon: ['fab', 'youtube'], name: 'YouTube' },
        { icon: ['fab', 'twitter'], name: 'Twitter' },
      ],
    };
  },
  computed: {
    iconPack() {
      return this.selected ? this.selected[0] : null;
    },
    icon() {
      return this.selected ? this.selected[1] : null;
    },
  },
  watch: {
    value(val) {
      this.selected = val;
    },
  },
};
</script>

<style lang="scss">
#icon-input {
  .modal-card-body {
    & .box {
      height: max-content;
    }
  }
}
</style>
