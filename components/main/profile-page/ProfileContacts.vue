<template>
  <div id="profile-contacts" class="card">
    <div class="card-content">
      <h2 class="subtitle is-size-4 has-text-weight-medium">
        {{ $t('profile.contacts') }}
      </h2>

      <b-table :data="contacts" hoverable :mobile-cards="true">
        <b-table-column
          v-slot="{ row }"
          field="name"
          :label="$t('common.name')"
        >
          {{ row.name }}
        </b-table-column>

        <b-table-column
          v-slot="{ row }"
          field="email"
          :label="$t('common.email_address')"
        >
          {{ row.email }}
        </b-table-column>

        <b-table-column
          v-slot="{ row }"
          field="phone"
          :label="$t('profile.phone_number')"
        >
          {{ row.phone }}
        </b-table-column>

        <b-table-column
          v-slot="{ row }"
          field="action"
          :label="$t('profile.get_in_touch')"
          centered
        >
          <div>
            <b-tooltip :label="`Send email to ${row.name}`">
              <a :href="`mailto:${row.email}`" class="has-text-dark">
                <b-icon icon="envelope" />
              </a>
            </b-tooltip>
            <b-tooltip v-if="{ row }" :label="`Call ${row.name}`">
              <a :href="`tel:${row.phone}`" class="has-text-dark">
                <b-icon icon="phone" />
              </a>
            </b-tooltip>
          </div>
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileContacts',
  props: {
    contacts: { type: Array, default: () => [] },
  },
};
</script>
