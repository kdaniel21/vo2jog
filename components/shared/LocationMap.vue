<template>
  <div id="location-map" :style="{ height, width }">
    <client-only :placeholder="$t('shared.location_map.loading')">
      <mgl-map v-bind="settings" :center="location">
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
};
</script>
