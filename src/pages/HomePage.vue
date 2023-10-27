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
            randomApartmnets: [],
            today: null,
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
        this.today = new Date();
    },

    methods: {

        //Prenti tutti appartamenti
        getAllApartments() {

            axios.get('http://127.0.0.1:8000/api/apartments')
                .then((response) => {
                    this.allApartments = response.data.results;

                    // Trasforma end_date in oggetti Date
                    this.allApartments.forEach(apartment => {
                        apartment.end_date = new Date(apartment.end_date);
                    });
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
        <div class="container py-4 px-5 px-sm-0">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="apartment in this.allApartments" :key="apartment.id">
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
        </div>
    </section>

    <!-- COMMENT SECTION -->
    <section>
        <div class="container py-4">
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