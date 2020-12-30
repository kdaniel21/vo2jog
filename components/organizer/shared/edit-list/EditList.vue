<template>
  <b-menu id="edit-list" :activable="false" class="mb-3">
    <b-menu-list>
      <b-menu-item
        v-for="item in items"
        :key="item.name || item.id"
        :icon="icon ? icon : item.icon.length ? item.icon[1] : null"
        :icon-pack="iconPack ? iconPack : item.icon ? item.icon[0] : null"
      >
        <template #label>
          <slot :item="item" />

          <span class="actions is-pulled-right">
            <span v-if="canEdit" @click="$emit('edit', item)">
              <b-icon icon="edit" />
            </span>
            <span v-if="canDelete" @click="$emit('delete', item)">
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
    canEdit: { type: Boolean, default: true },
    canDelete: { type: Boolean, default: true },
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
