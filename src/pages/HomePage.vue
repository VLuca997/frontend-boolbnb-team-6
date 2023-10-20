<script>
import axios from 'axios';
import TippComponent from '../components/Main/TippComponent.vue';
import CommentComponent from '../components/Main/CommentComponent.vue';
import CardComponent from '../components/Main/CardComponent.vue';
import HeaderBottomComponent from '../components/Header/HeaderBottomComponent.vue';

// my-component.js
export default {

    name: "HomePage",

    data() {
        return{
            allApartments: [],
        }
    },
    
    components: {
        CardComponent,
        HeaderBottomComponent,
        CommentComponent,
        TippComponent,
    },

    created() {
        this.getAllApartments();
    },

    methods: {

        //Prenti tutti appartamenti
        getAllApartments() {

            axios.get('http://127.0.0.1:8000/api/apartments')
                .then((response) => {
                    this.allApartments = response.data.results; 
                })
                .catch((error) => {
                    console.error('Errore nella richiesta:', error);
                });
        },
    }
}
</script>

<template>
    <!-- HEADER BOTTOM -->
    <HeaderBottomComponent/>

    <!-- CARD SECTION -->
    <section>
        <div class="container py-4">
            <div class="row">
            <div class="col-3 " v-for="apartment in this.allApartments" :key="apartment.id">
                
                <CardComponent
                :title="apartment.title"
                :price_per_night="parseFloat(apartment.price_per_night)"
                :rooms_number="parseFloat(apartment.rooms_number)"
                :beds_number="parseFloat(apartment.beds_number)"
                :bathrooms_number="parseFloat(apartment.bathrooms_number)"
                :square_meters="parseFloat(apartment.square_meters)"
                :address="apartment.address"
                :cover_img="apartment.cover_img"
                :description="apartment.description"
                /> 
                <router-link :to="{name: 'apartment', params: {slug:apartment.slug}}">Vedi</router-link> 
            </div>
            
        </div>
        </div> 
    </section>

    <!-- COMMENT SECTION -->
    <section>
        <div class="container py-4 text-center">
            <CommentComponent/>
        </div>
    </section>

    <!-- TIPP: ADD APARTMENT -->
    <section>
        <div class="container py-5">
            <TippComponent/>
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
    .min_width{
        min-width: 300px;
    }

    

    @media (min-width: 320px) and (max-width: 480px){

        .min_width{
            min-width: 300px;
            margin-left: 15%;
        }

    }

</style>