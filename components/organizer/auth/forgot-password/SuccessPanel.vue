<template>
  <div id="success-panel">
    <p>
      Your password reset email has been sent successfully! Let's get to your
      email account, open our mail and set up a new password!
    </p>

    <!-- LOGOS -->
    <b-row>
      <b-col
        v-for="{ name, svg, link } in logos"
        :key="name"
        cols="12"
        sm="2"
        lg="1"
        class="text-center mr-sm-3"
      >
        <a :href="link" target="_blank" class="email-icon">
          <img
            :src="require(`~/assets/svg/mail-providers/${svg}`)"
            :title="name"
            class="email-icon"
          />
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'SuccessPanel',
  data() {
    return {
      logos: [
        {
          name: 'Gmail',
          svg: 'gmail_logo.svg',
          link: 'https://mail.google.com',
        },
        {
          name: 'Freemail',
          svg: 'freemail_logo.svg',
          link: 'https://freemail.hu',
        },
        {
          name: 'Outlook',
          svg: 'outlook_logo.svg',
          link: 'https://outlook.live.com',
        },
      ],
    };
  },
};
</script>

<style scoped>
.email-icon {
  max-width: 5rem;
  height: 5rem;
}
</style>
