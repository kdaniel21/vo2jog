<template>
  <div
    id="location-map"
    v-observe-visibility="visibilityChange"
    :style="{ height, width }"
  >
    <client-only :placeholder="$t('shared.location_map.loading')">
      <mgl-map
        v-if="mapbox"
        v-bind="settings"
        :center="location"
        :mapbox-gl="mapbox"
      >
        <!-- CONTROLS -->
        <mgl-scale-control />
        <mgl-geolocate-control ref="geolocateControl" />
        <mgl-navigation-control :show-compass="false" />

        <mgl-marker :coordinates="location" />
      </mgl-map>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'LocationMap',
  props: {
    location: { type: Array, default: null },
    height: { type: String, default: '100%' },
    width: { type: String, default: '100%' },
  },
  data() {
    return {
      mapbox: null,
      settings: {
        accessToken: this.$config.mapboxAccessToken,
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
        zoom: 12,
      },
    };
  },
  head() {
    return {
      link: [
        {
          href:
            'https://api.tiles.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css',
          rel: 'stylesheet',
        },
      ],
    };
  },
  methods: {
    visibilityChange(isVisible) {
      if (!isVisible || this.mapbox) return;

      this.mapbox = require('mapbox-gl');
    },
  },
};
</script>
