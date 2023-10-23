<script>
import axios from "axios";
import { store } from "../store";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps";

export default {
  data() {
    return {
      apartment: null,
      store,
    };
  },
    //   FUNZIONE PER RECUPERARE LA LONGITUDINE E LATITUDINE DA INSERIRE NELLA FUNZIONE CHE FA APPARIRE LA MAPPA
  mounted() {
    this.map = null;

    axios
      .get('http://localhost:8000/api/apartments/' + this.$route.params.slug)
      .then(response => {
        this.apartment = response.data.results;
            // console.log(this.apartment)
        if (this.apartment.latitude && this.apartment.longitude) {
          const latitude = parseFloat(this.apartment.latitude);
          const longitude = parseFloat(this.apartment.longitude);
          let center = [longitude, latitude];

          this.map = tt.map({
            key: "BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J",
            container: "map",
            center: center,
            zoom: 10,
          });

          this.map.on("load", () => {
            let marker = new tt.Marker().setLngLat(center).addTo(this.map);
          });
        } else {
          console.error(
            "I dati dell'appartamento non contengono latitudine e/o longitudine valide."
          );
        }
      })
      .catch(error => console.error(error));
  },
};
</script>

<template>
  
  <div class="tomtom">
    <div id="map" class="map"></div>
  </div>

</template>

<style lang="scss" scoped>

    .map {
    height: 100%;
    width: 100%;
    border-radius: 11px;
    }

    .tomtom {
    height: 400px;
    }

</style>