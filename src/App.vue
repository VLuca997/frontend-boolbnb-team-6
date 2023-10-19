<script >
//import component h1
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import axios from 'axios';
import { store } from './store.js';



// my-component.js
export default {

    data() {
        return {
            store
        };
    },

    components:{
    
        HeaderComponent,
        FooterComponent,
    },

    methods: {
        getResults() {
            axios
                .get('http://127.0.0.1:8000/api/apartments', {
                    
                })
                .then(response => {
                    this.store.aparments = response.data.results;
                })
                .catch(error => {
                    this.store.aparments = [];
                });
        },     
    },
    created() {
        this.getResults();
    }
}
</script>

<template>
  <HeaderComponent />
  <router-view></router-view>
  <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss";

*{
 font-family: 'Nunito', sans-serif;
}

</style>
