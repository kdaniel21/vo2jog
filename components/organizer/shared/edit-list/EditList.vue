<template>
  <b-menu id="edit-list" :activable="false" class="mb-3">
    <b-menu-list>
      <b-menu-item
        v-for="item in items"
        :key="item.name || item.id"
        :icon="icon || item.icon[1]"
        :icon-pack="iconPack || item.icon[0]"
      >
        <template #label>
          <slot :item="item" />

          <span class="actions is-pulled-right">
            <span @click="$emit('edit', item)"><b-icon icon="edit" /></span>
            <span @click="$emit('delete', item)">
              <b-icon icon="trash-alt" />
            </span>
          </span>
        </template>
      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: 'EditList',
  props: {
    items: { type: Array, default: () => [] },
    icon: { type: String, default: null },
    iconPack: { type: String, default: null },
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1023px) {
  #edit-list {
    & .actions {
      display: none;
    }
    & li:hover .actions {
      display: initial;
    }
  }
}
</style>
