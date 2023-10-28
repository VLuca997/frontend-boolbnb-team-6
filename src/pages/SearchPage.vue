<script>
import axios from 'axios';
import { store } from '../store.js'; 
import CardComponent from '../components/Main/CardComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
// import tt from "@tomtom-international/web-sdk-maps";
// import "@tomtom-international/web-sdk-maps";

export default {
    data() {
        return {
            store,
            latitude: null,
            longitude: null,
            distance: 20,
            apartments: [],
            square_meters: null,
            rooms_number: null,
            beds_number: null,
            bathrooms_number: null,
            services: [],
            selectedServices: [],
            loading: false,
            today: null,
            apiKey: 'BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J',
            searchQuery: '',
            options: {
                searchOptions: {
                    key: "BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J",
                    language: "it-IT",
                    limit: 5,
                },
                autocompleteOptions: {
                    key: "BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J",
                    language: "it-IT",
                },
            }
        };
    },
    
    components: {
        CardComponent,
        LoaderComponent
    },
    mounted() {

        const tom = this.$refs.searchBoxContainer;
        this.ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
        const searchBoxHTML = this.ttSearchBox.getSearchBoxHTML();
        tom.appendChild(searchBoxHTML);

        // Attendere il prossimo ciclo di aggiornamento per essere sicuri che la search box sia presente nel DOM
        this.$nextTick(() => {

        // Trovare l'elemento della search box tramite selettore CSS
        const searchBox = document.querySelector('.tt-search-box');
        const inputBox = document.querySelector('.tt-search-box-input-container');
        inputBox.classList.add('rounded');
        const inputElement = document.querySelector('.tt-search-box-input');
        inputElement.placeholder = store.searchQuery;

        // Ascoltare un evento su questo elemento
        searchBox.addEventListener('change', (event) => {

        // Ottenere il valore dell'evento e assegnarlo a searchQuery
        store.searchQuery = event.target.value;

        });
        });
    },

    created() {
        this.getAllServices();
        this.today = new Date();
    },

    methods: {

        //Prenti tutti i servizzi
        getAllServices() {

            axios.get('http://127.0.0.1:8000/api/services')
                .then((response) => {
                    this.services = response.data.results; 
                })
                .catch((error) => {
                    console.error('Errore nella richiesta:', error);
                });
        },

        // Effettua la chiamata API per ottenere le coordinate
        geocodeAndSearch() {

            this.loading = true;
            
            axios
                .get(`https://api.tomtom.com/search/2/geocode/${store.searchQuery}.json`, {
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
                            distance: this.distance,
                            square_meters: this.square_meters,
                            rooms_number: this.rooms_number,
                            beds_number: this.beds_number,
                            bathrooms_number: this.bathrooms_number,
                            services: this.selectedServices,
                        },
                    });
                }
                else {
                    // Nessuna coordinata trovata
                    return Promise.reject('Nessuna coordinata trovata');
                }
            })
                .then((response) => {
                if (response.data.results && response.data.results.length > 0) {
                    
                    store.apartments = response.data.results;
                    this.loading = false;

                     // Trasforma end_date in oggetti Date
                    store.apartments.forEach(apartment => {
                        apartment.end_date = new Date(apartment.end_date);
                    });
                }
                else {
                    store.apartments = [];
                    this.loading = false;
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
    <div class="container w-75 ">
        <div class="row text-center align-items-center">
            <h5 class="text-start fw-bold py-0">Ricerca gli appartamenti per Indirizzo o Città!</h5>
            <div class="col-12 col-md-10 pb-2 ">
                <div class="rounded" ref="searchBoxContainer">
                    
                </div>
                <input class="col " type="text" hidden v-model="store.searchQuery" />
            </div>
            <div class="col-12 col-md-2 pb-1">
                <select class="form-select " aria-label="Distanza" v-model="distance">
                    <option value="" disabled selected>Seleziona la distanza</option>
                    <option value="1">1 Km</option>
                    <option value="10">10 Km</option>
                    <option value="20">20 Km</option>
                </select>
            </div>
        </div>
           
        <div class="row mt-2 gx-3">
            <div class="col-12 col-md-3 mb-2">
                <input class="form-control" v-model="square_meters" placeholder="Metratura" />
            </div>
            <div class="col-12 col-md-3 mb-2">
                <input class="form-control" v-model="rooms_number" placeholder="Stanze" />
            </div>
            <div class="col-12 col-md-3 mb-2">
                <input class="form-control" v-model="beds_number" placeholder="Letti" />
            </div>
            <div class="col-12 col-md-3 mb-2">
                <input class="form-control" v-model="bathrooms_number" placeholder="Bagni" />
            </div>
        </div>

        <div class="row">
            <div class="accordion py-2 col-12 col-md-8 m-auto" id="accordionExample">
  
                <div class="accordion-item ">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Servizi
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="row">
                                    <div class="col" v-for="service in services" :key="service.id">
                                        <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            :value="service.id"
                                            v-model="selectedServices"
                                            :id="service.id"
                                        />
                                        <label class="form-check-label" :for="service.id">
                                            {{ service.name }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <button class="btn col-4 m-auto my-3 btn-primary" @click="geocodeAndSearch">Cerca</button>
        </div>
        
    </div>
    
    <div class="container text-center py-5 my-container">
        <div class="row"  v-if="store.apartments.length >= 1">
            <h5 class="text-start py-3">
                {{ store.apartments.length }} Risultati
            </h5>
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="apartment in store.apartments" :key="apartment.id">
                <div class="component_container">
                    <div class="premium_badge" v-if="apartment.end_date >= today"> 
                        Premium
                    </div> 
                    <CardComponent
                    :title="apartment.title"
                    :slug="apartment.slug"
                    :price_per_night="parseFloat(apartment.price_per_night)"
                    :rooms_number="parseFloat(apartment.rooms_number)"
                    :beds_number="parseFloat(apartment.beds_number)"
                    :bathrooms_number="parseFloat(apartment.bathrooms_number)"
                    :square_meters="parseFloat(apartment.square_meters)"
                    :address="apartment.address"
                    :cover_img="apartment.cover_img"
                    :description="apartment.description"
                    />
                </div>
            </div>
        </div>
       <div v-if="store.apartments.length === 0 && !loading" class="no_app">
                <h4>
                    Nessun appartamento trovato!
                </h4>
                <p>
                    Inserisci nuovi parametri di ricerca!
                </p>
        </div>
        <div v-if="loading" class="no_app">
                <LoaderComponent/>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.no_app {
    padding: 100px 0;
    margin-bottom: 50px;
}

.component_container {
    position: relative;

    .premium_badge {
        position: absolute;
        z-index: 99;
        left: 10px;
        top: 5px;
        padding: 2px 5px;
        background-color: #F6AE2D;
        border: 1px solid #F6AE2D;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}
</style>