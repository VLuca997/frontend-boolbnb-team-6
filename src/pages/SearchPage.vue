<script>
import axios from 'axios';

export default {
  data() {
    return {
      apartments: [],
      address: '',
      latitude: '',
      longitude: '',
      distance: '',
      size: '',
      rooms_number:'',
      beds_number:'',
      bathrooms_number:null,
      services:'',
      loading: false
    };
  }, 
  created () {
      this.searchApartments();
  },
  methods: {
    searchApartments() {
      if (!this.loading) {
                this.loading = true;
                axios
                    .get('http://127.0.0.1:8000/api/search/', {
                        params: {
                            address: this.address,
                            latitude: this.latitude,
                            longitude: this.longitude,
                            distance: this.distance,
                            size: this.size,
                            rooms_number: this.rooms_number,
                            beds_number: this.beds_number,
                            bathrooms_number: this.bathrooms_number,
                            services: this.selectedServices, 
                        },
                })
                .then(res => {
                  this.loading = false;
                  this.apartments = res.data.results.filter(appartment => {
                    return appartment.bathrooms_number === this.bathrooms_number;
                    });
                  })
                .catch(error => {
                        console.error('Errore nella richiesta Axios:', error);
                      })
            }
    },
  },
};
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center h-100">
        
        <div class="col">
        <input class="col" type="number" v-model="bathrooms_number">
        <button @click="searchApartments">Cerca</button>
        </div>
    </div>
    <div v-for="apartment in apartments" :key="apartment.id">
      <h3>{{ apartment.title }}</h3>
      <!-- Altre informazioni sull'appartamento -->
    </div>

</template>

<style lang="scss" scoped>
.container {
    padding: 100px 50px 250px 50px;
}
</style>