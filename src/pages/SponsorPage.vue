<script>
import axios from 'axios';

export default {

    name: "SponsorPage",

    data() {
        return{
            sponsorships: [],
            // apartment: [],
        }
    },
    methods: {
        getAllSponsorships() {

            axios.get('http://localhost:8000/api/sponsorship')
            .then((response) => {
                this.sponsorships = response.data.results; 
                // console.log(response.data.results)
            })
            .catch((error) => {
                console.error('Errore nella richiesta:', error);
            });
        },
        // getApartment() {
        //     axios.get('http://localhost:8000/api/apartments')
        //     .then((response) => {
        //         this.apartments = response.data.results;
        //         console.log(response.data.results)
        //     })
        //     .catch((error) => {
        //         console.error('Errore nella richiesta:', error);
        //     });
        // },
    },
    

    created() {

        this.getAllSponsorships();
        // this.getApartment();
    },
};
</script>

<template>

    <div class="container sponsor_container mt-5">
        <div class="row text-center">
            <div class="row my-5">
                <div class="col-sm-12 col-md  p-4 " v-for="sponsorship in sponsorships" :key="sponsorship.id">
                    <h2>{{ sponsorship.name }}</h2>
                    <input type="checkbox" name="price" id="price">
                    <label class="ps-2" for="price"><strong>{{sponsorship.price}}€</strong></label>
                    <p class="pt-2">Durata: <strong>{{sponsorship.duration}}h</strong></p>
                </div>
                <!-- <div class="col-4 p-4">
                    <h2>Argento</h2>
                    <input type="checkbox" name="price" id="price">
                    <label class="ps-2" for="price"><strong>5.99€</strong></label>
                    <p class="pt-2">Durata: <strong>72h</strong></p>
                </div>
                <div class="col-4 p-4">
                    <h2>Oro</h2>
                    <input type="checkbox" name="price" id="price">
                    <label class="ps-2" for="price"><strong>9.99€</strong></label>
                    <p class="pt-2">Durata: <strong>144h</strong></p>
                </div> -->
            </div>
        </div>

        <div class="row text-center">
            <h1><i class="fa-solid fa-arrow-down"></i>Metodo di pagamento<i class="fa-solid fa-arrow-down"></i></h1>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .sponsor_container{
        width: 60%;
        background-color: rgb(245, 241, 241);
        border: 2px solid #F6AE2D;
        border-radius: 10px;
        height: 80vh;
        margin-bottom: 70px;
    }

</style>