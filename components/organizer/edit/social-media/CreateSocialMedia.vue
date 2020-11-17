<template>
  <b-form id="create-social-media" ref="social-media-form">
    <h3>Add Social Media</h3>
    <b-row>
      <b-col cols="12" md="3">
        <b-form-group
          label="Icon"
          description="This icon will appear before the name."
        >
          <v-select v-model="form.icon" :options="iconOptions" label="name">
            <template #option="{ icon }">
              <fa :icon="icon.length > 1 ? icon : icon[0]" class="fa-fw mr-2" />
              <span class="text-capitalize">
                {{ icon[icon.length - 1] }}
              </span>
            </template>

            <template #selected-option="{ icon }">
              <fa :icon="icon.length > 1 ? icon : icon[0]" class="fa-fw mr-2" />
              <span class="text-capitalize">
                {{ icon[icon.length - 1] }}
              </span>
            </template>
          </v-select>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Name"
          label-for="name-input"
          description="This will be displayed next to the icon"
        >
          <b-form-input
            id="name-input"
            v-model="form.name"
            placeholder="Vienna Triathlon on Facebook"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="9">
        <b-form-group
          label="Link"
          label-for="link-input"
          description="The link to the above mentioned page."
        >
          <b-form-input
            id="link-input"
            v-model="form.link"
            placeholder="https://facebook.com/your-event-page"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="9">
        <b-button
          variant="primary"
          class="btn-block-xs-only float-right"
          @click="createSocialMedia"
          >Add</b-button
        >
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';

export default {
  name: 'CreateSocialMedia',
  mixins: [toaster],
  data() {
    return {
      iconOptions: [
        { icon: ['globe'], name: 'Website' },
        { icon: ['images'], name: 'Race Photos' },
        { icon: ['fab', 'facebook'], name: 'Facebook Page' },
        { icon: ['fab', 'instagram'], name: 'Instagram Page' },
        { icon: ['fab', 'flickr'], name: 'Flickr Album' },
        { icon: ['fab', 'youtube'], name: 'YouTube Channel' },
        { icon: ['fab', 'twitter'], name: 'Twitter' },
      ],
      form: {
        name: null,
        icon: null,
        link: null,
      },
    };
  },
  watch: {
    // Prefill name from icon if name input hasn't been touched
    'form.icon'(value, oldValue) {
      if (!this.form.name || this.form.name === oldValue.name)
        this.form.name = value.name;
    },
  },
  methods: {
    ...mapActions('organizer', ['addItem']),
    async createSocialMedia() {
      try {
        const data = { ...this.form, icon: this.form.icon.icon };

        await this.addItem({ name: 'socialMedia', data });
        this.successToast('Social Media Platform has been added!');
        this.$refs['social-media-form'].reset();
      } catch {
        this.errorToast('Could not add. Please try again!');
      }
    },
  },
};
</script>
