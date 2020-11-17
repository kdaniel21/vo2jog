<template>
  <div id="location-map" ref="hereMap"></div>
</template>

<script>
export default {
  name: 'LocationMap',
  props: {
    lat: { type: Number, default: null },
    lng: { type: Number, default: null },
  },
  data() {
    return {
      platform: null,
      map: null,
      H: null,
    };
  },
  watch: {
    lat() {
      this.createMarker();
    },
  },
  methods: {
    initHereService() {
      this.H = window.H;
      const { hereApiKey } = this.$config;
      this.platform = new this.H.service.Platform({ apikey: hereApiKey });

      this.renderMap();
    },
    renderMap() {
      if (!this.lat || !this.lng) return;
      console.log('rendered');

      const { lat, lng } = this;
      const mapTypes = this.platform.createDefaultLayers();

      this.map = new this.H.Map(
        this.$refs.hereMap,
        mapTypes.vector.normal.map,
        {
          zoom: 13,
          center: { lat, lng },
        }
      );

      // Dynamic resizing
      addEventListener('resize', () => this.map.getViewPort().resize());
      // Behaviour control
      // eslint-disable-next-line no-new
      new this.H.mapevents.Behavior(new this.H.mapevents.MapEvents(this.map));
      this.H.ui.UI.createDefault(this.map, mapTypes);

      this.createMarker();
    },
    createMarker() {
      const { lat, lng } = this;
      const marker = new this.H.map.Marker({ lat, lng });

      this.map.addObject(marker);
      this.map.setCenter({ lat, lng });
    },
  },
  head() {
    return {
      script: [
        {
          src: 'https://js.api.here.com/v3/3.1/mapsjs.bundle.js',
          type: 'module',
          callback: this.initHereService,
        },
      ],
    };
  },
};
</script>

<style scoped>
#location-map {
  width: 100%;
  height: 50vh;
}
</style>
