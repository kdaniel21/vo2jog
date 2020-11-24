import Vue from 'vue';
import Vuelidate from 'vuelidate';
import vuelidateErrorExtractor from 'vuelidate-error-extractor';
import FormGroup from '@/plugins/vuelidate/FormGroup';
import messages from '@/plugins/vuelidate/error-messages';

Vue.use(Vuelidate);
Vue.use(vuelidateErrorExtractor, {
  messages,
  attributes: {
    email: 'Email',
    newPassword: 'New Password',
    confirmPassword: 'Password confirmation',
  },
});

Vue.component('form-group', FormGroup);
