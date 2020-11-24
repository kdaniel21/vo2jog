import Vue from 'vue';
import Vuelidate from 'vuelidate';
import vuelidateErrorExtractor from 'vuelidate-error-extractor';

import FormGroup from '@/plugins/vuelidate/FormGroup';

import messages from '@/plugins/vuelidate/error-messages';
import attributes from '@/plugins/vuelidate/attributes';

Vue.use(Vuelidate);
Vue.use(vuelidateErrorExtractor, {
  messages,
  attributes,
});

Vue.component('form-group', FormGroup);
