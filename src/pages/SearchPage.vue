<!-- <script>


import axios from 'axios';

export default {
    mounted() {
    },
    data() {
        return {
            latitude: null,
            longitude: null,
            distance: 20,
            apartments: [],
            address: '',
            distance: '',
            size: '',
            rooms_number:null,
            beds_number:null,
            bathrooms_number:null,
            services:'',
            loading: false,
            apiKey: 'BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J',
        };
    },
    computed () {
        this.searchApartments();
    },

    methods: {

    geocodeAddress() {
        const url = `https://api.tomtom.com/search/2/geocode/${this.address}.json`;
        const params = {
            key: this.apiKey,
            limit: 1,
        };

        axios
            .get(url, { params })

            .then(response => {
            if (response.data.results.length > 0) {
                this.latitude = response.data.results[0].position.lat;
                this.longitude = response.data.results[0].position.lon;

                getFilteredApartments(event) {
      this.loading = true;
      if (!this.validateForm()) {
        event.preventDefault();
      } else {
            axios
            .get("http://127.0.0.1:8000/api/search", {
                params: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    distance: this.distance,
                    size: this.size,
                    rooms: this.rooms,
                    beds: this.beds,
                    bathrooms: this.bathrooms,
                    services: this.selectedServices,
                },
            })
            .then((response) => {
                this.apartments = response.data.results;
                console.log(this.apartments)
            })
            .catch((error) => {
                console.error("Request failed:", error);
            })
            .finally(() => (this.loading = false));
        }
    }

            } else {
                this.coordinates = null;
            }
            })
            .catch(error => {
            console.error('Errore nella richiesta di geocodifica:', error);
            });
    },



    }}
</script> -->

<script>
import axios from 'axios';

export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      distance: '20',
      apartments: [],
      address: '',
      square_meters: null,
      rooms_number: null,
      beds_number: null,
      bathrooms_number: null,
      services: '',
      loading: false,
      apiKey: 'BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J',
    };
  },

  methods: {
    geocodeAndSearch() {
      this.loading = true;

      // Effettua la chiamata API per ottenere le coordinate
      axios
        .get(`https://api.tomtom.com/search/2/geocode/${this.address}.json`, {
          params: {
            key: this.apiKey,
            limit: 1,
          },
        })
        .then((response) => {
          if (response.data.results.length > 0) {
            this.latitude = response.data.results[0].position.lat;
            this.longitude = response.data.results[0].position.lon;

            return axios.get('http://127.0.0.1:8000/api/search', {
              params: {
                latitude: this.latitude,
                longitude: this.longitude,
                distance: 20,
                square_meters: this.square_meters,
                rooms_number: this.rooms_number,
                beds_number: this.beds_number,
                bathrooms_number: this.bathrooms_number,
                services: this.selectedServices,
              },
            });
          } else {
            // Nessuna coordinata trovata
            return Promise.reject('Nessuna coordinata trovata');
          }
        })
        .then((response) => {
            if (response.data.results && response.data.results.length > 0) {
                this.apartments = response.data.results;
        } else {
                this.apartments = [];
        }

        })
        .catch((error) => {
          console.error('Errore nella richiesta:', error);

        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
<template>
    <div class="container text-center d-flex justify-content-center align-items-center h-100">
        <div class="row w-75">
            <input class="form-control my-3 col-12" v-model="address" placeholder="Inserisci un indirizzo" />

            <div class="row m-auto w-75">
            <input class="form-control mx-1 col" v-model="square_meters" placeholder="Metratura" />
            <input class="form-control mx-1 col" v-model="rooms_number" placeholder="Stanze" />
            <input class="form-control mx-1 col" v-model="beds_number" placeholder="Letti" />
            <input class="form-control mx-1 col" v-model="bathrooms_number" placeholder="Bagni" />
            <!-- <input class="form-control mx-1 col" v-model="services" placeholder="Servizi" /> -->
            </div>
            <button class="btn col-6 m-auto my-3 btn-primary" @click="geocodeAndSearch">Cerca</button>
        </div>
    </div>
    <div class="container text-center py-5 my-container">
        <div class="row"  v-if="apartments.length >= 1">
            <div class="card col-3 my-5"   v-for="apartment in apartments" :key="apartment.id">
                <img :src="'http://127.0.0.1:8000/storage/'+ apartment.cover_img" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">
                        {{ apartment.title }}
                    </p>
                    <h6>
                        {{ apartment.address }}
                    </h6>
                    <h6>
                        {{ apartment.price_per_night }}
                    </h6>
                </div>
            </div>
       </div>
       <div v-if="apartments.length === 0">
                Nessun appartamento trovato
        </div>
    </div>

</template>

<style lang="scss" scoped>

.my-container {
    margin-bottom: 500px;
}
</style>