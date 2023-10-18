<script>
import axios from 'axios';

export default {
  data() {
    return {
      apibackend: 'http://127.0.0.1:8000/api/search/',
      search: '',
      rooms:'',
    //   options: {
    //     searchOptions: {
    //       key: "BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J",
    //       language: "it-IT",
    //       limit: 5,
    //     },
    //     autocompleteOptions: {
    //       key: "BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J",
    //       language: "it-IT",
    //     },
    //   },
    };
  },
  methods: {
    searchApartments() {
      // Effettua la chiamata Axios quando il valore dell'input cambia
      axios.get(this.apibackend, {
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
          // Gestisci la risposta qui, ad esempio, assegna i dati a una variabile nel data
          console.log(response.data); // Questo è solo un esempio
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<template>
    <section>
      <div class="container d-flex justify-content-center align-items-center h-100 ">
        <div class="row flex-column">
          <div class="col back-drop">
            <h2 class="text-light fw-bold">Scegli il tuo appartamento</h2>
          </div>
          <div class="col py-3">
            <input class="col" type="text" v-model="rooms">
            <button @click="searchApartments">Cerca</button>
          </div>
        </div>
      </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    background-image: url('../../assets/img/bg-home.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: fill;
    height: 75vh;
}
.col {
    h2 {
        width: fit-content;
        padding: 10px 40px;
        margin: 20px auto;
    }

    .back-drop{
    border: 2px solid rgb(255, 255, 255, .5);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    }
}

    
</style>