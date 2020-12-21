import Vue from 'vue';
import {
  MglMap,
  MglGeolocateControl,
  MglScaleControl,
  MglMarker,
  MglNavigationControl,
} from 'vue-mapbox';
import Mapbox from 'mapbox-gl';

Vue.component('MglMap', MglMap);
Vue.component('MglGeolocateControl', MglGeolocateControl);
Vue.component('MglScaleControl', MglScaleControl);
Vue.component('MglMarker', MglMarker);
Vue.component('MglNavigationControl', MglNavigationControl);

Vue.prototype.$mapbox = Mapbox;
