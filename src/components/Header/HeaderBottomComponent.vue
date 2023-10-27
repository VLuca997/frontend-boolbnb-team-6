<script>
import axios from 'axios';
import { store } from '../../store'; 

export default {
    data() {
    return {
        store,
        apiKey: 'BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J',
        searchQuery: 'Destinazione',
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
    }
    },

  methods: {
    searchApartments() {

      // Effettua la chiamata API per ottenere le coordinate
      axios
        .get(`https://api.tomtom.com/search/2/geocode/${this.searchQuery}.json`, {
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
              },
            });
          } else {
            // Nessuna coordinata trovata
            return Promise.reject('Nessuna coordinata trovata');
          }
        })
        .then((response) => {
            if (response.data.results && response.data.results.length > 0) {

                // Aggiorna gli appartamenti nello store
                store.apartments = response.data.results;

                // Trasforma end_date in oggetti Date
                store.apartments.forEach(apartment => {
                        apartment.end_date = new Date(apartment.end_date);
                    });

                // Salva address per la pagina di ricerca avanzata
                store.searchQuery = this.searchQuery;

                // Reindirizza alla vista di ricerca
                this.$router.push({ name: 'search' });
        } else {
                this.apartments = [];
                store.searchQuery = this.searchQuery;
        }
        })
        .catch((error) => {
          console.error('Errore nella richiesta:', error);

        })
        .finally(() => (this.loading = false,this.$router.push({ name: 'search' })));
    },
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
        const inputElement = document.querySelector('.tt-search-box-input');
        inputElement.placeholder = 'Destinazione';

        // Ascoltare un evento su questo elemento
        searchBox.addEventListener('change', (event) => {

        // Ottenere il valore dell'evento e assegnarlo a searchQuery
        this.searchQuery = event.target.value;

        });
        });
    },
};
</script>

<template>
    <section>
        <div class="container d-flex justify-content-center align-items-center h-100 ">
            <div class="row w-100 flex-column text-center">
                <!-- Search Box di tom tom-->
                <h2 class="text-light m-auto col-12 col-md-6 back_drop py-3 px-0">Find, Enjoy, Share</h2>
                <div class="py-3 col-12 col-md-6 m-auto rounded" ref="searchBoxContainer">
        
                </div>
                <!-- Input nascosto dal front end -->
                <input class="col" type="text" hidden v-model="searchQuery" />
                <button class="btn col-8 col-md-3 m-auto btn-primary" @click="searchApartments">Cerca</button>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

section {
    background-image: url('../../assets/img/city.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: fill;
    height: calc(100vh - 70px);
}
.col {
    h2 {
        width: fit-content;
        padding: 10px 40px;
        margin: 20px auto;
    }
}

.back_drop{
    border: 2px solid rgb(255, 255, 255, .5);
    backdrop-filter: blur(10px);
    border-radius: 10px;
}

</style>