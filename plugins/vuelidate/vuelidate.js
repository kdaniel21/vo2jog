import Vue from 'vue';
import Vuelidate from 'vuelidate';
import vuelidateErrorExtractor from 'vuelidate-error-extractor';

import FormGroup from '@/plugins/vuelidate/FormGroup';

import attributes from '@/plugins/vuelidate/attributes';

Vue.use(Vuelidate);
Vue.use(vuelidateErrorExtractor, {
  i18n: 'validation.messages',
  i18nAttributes: attributes,
});

Vue.component('FormGroup', FormGroup);
