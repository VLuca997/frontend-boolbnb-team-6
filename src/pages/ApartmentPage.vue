<script>
import axios from 'axios';


// my-component.js
export default {

    name: "ApartmentPage",

    data() {
        return{
            apartment: null,
            loading: false,
            services: [],
            picture: [],
        }
    },
    // components: {
    // },

    created() {
        this.getApartment();

        this.getAllServices();

        this.getAllPictures();
    },

    methods: {
        getApartment() {
            if (!this.loading) {
                this.loading = true;
                axios
                    .get('http://localhost:8000/api/apartments/' + this.$route.params.slug )
                    .then(res=> {
                        //console.log(res)
                        if (res.data.success) {
                            this.apartment = res.data.results;
                            // console.log(this.apartment)
                        }
                        this.loading = false;
                    })
                    .catch(err=> {
                        //console.log(err)
                        if (err.response.status == 404) {
                            this.$router.push({ name: 'notfound' })
                        }
                    })
            }
        },

        getAllServices() {

        axios.get('http://127.0.0.1:8000/api/services')
            .then((response) => {
                this.services = response.data.results; 
                // console.log(response.data.results)
            })
            .catch((error) => {
                console.error('Errore nella richiesta:', error);
            });
        },

        getAllPictures() {

        axios.get('http://localhost:8000/api/pictures')
            .then((response) => {
                this.pictures = response.data.results; 
                // console.log(response.data.results)
            })
            .catch((error) => {
                console.error('Errore nella richiesta:', error);
            });
        },

        
    }
}
</script>

<template>

    <div class="container">

        <h1 class="py-3">
            {{ apartment.title }}
        </h1>

        <div class="row images-container">
            <div class="col-sm-12 col-lg-6 cover_img">
                <img :src="'http://127.0.0.1:8000/storage/'+ apartment.cover_img " alt="Cover img">
            </div>

            <div class="col-sm-12 col-lg-6 row picture_img">
                <div v-for="picture in apartment.pictures" :key="picture.id" class="col-6 single_picture">
                    <img :src="'http://127.0.0.1:8000/storage/'+ picture.img_url " alt="">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <ul>
                    <li class="d-inline-block p-2"><a href="#description">Descrizione</a></li>
                    <li class="d-inline-block p-2"><a href="#details">Dettagli appartamento</a></li>
                    <li class="d-inline-block p-2"><a href="#services">Servizi</a></li>
                    <li class="d-inline-block p-2"><a href="#position">Posizione</a></li>
                </ul>
            </div>
            <div class="col-6 text-end">
                <button type="button" class="message_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Scrivimi un messaggio</button>
            </div>
        </div>

        <!-- Invio messaggi -->

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Nuovo Messaggio</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Oggetto:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Messaggio:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                    <button type="button" class="btn btn-primary">Invia Messaggio</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Fine Invio messaggi -->

        <hr>

        <div class="row py-3">
            <div class="col">
                <h5 class="pb-2" id="description">
                    Descrizione
                </h5>
                <p>
                    {{ apartment.description }}
                </p>
            </div>
        </div>

        <hr>

        <div class="row py-3">
            <h5 class="pb-2" id="details">
                Dettagli Appartamento
            </h5>
            <div class="col-3">
                <span class="p-2"><i class="fa-solid fa-bath"></i></span> 
                Bagni: {{ apartment.bathrooms_number }}</div>
            <div class="col-3">
                <span class="p-2"><i class="fa-solid fa-bed"></i></span> 
                Letti: {{ apartment.beds_number }}</div>
            <div class="col-3">
                <span class="p-2"><i class="fa-solid fa-door-open"></i></span> 
                Stanze: {{ apartment.rooms_number }}</div>
            <div class="col-3">
                <span class="p-2"><i class="fa-solid fa-maximize"></i></span> 
                Metri Quadri: {{ apartment.square_meters }}</div>
        </div>

        <hr>

        <div class="row py-3">
            <h5 class="pb-2" id="services">
                Servizi Disponibili
            </h5>
            <div class="col-6" v-for="service in apartment.services" :key="service.id">
                <div class="icon d-inline-block">
                    <i class="p-2" :class="service.icon"></i>
                </div>
                <span>{{ service.name }}</span>
            </div>

        </div>

        <hr>

        <div class="row py-3">
            <h5 class="pb-4" id="position">
                Posizione Appartamento
            </h5>
            <!-- <div class="col mb-4">
                <img src="https://www.centrostoricocb.it/immagini/IMM/pianta-borgo%20900.jpg" alt="">
            </div> -->
        </div>


    </div>

    <!-- <div v-if="apartment">
        <h1>{{ apartment.title }}</h1>
        <ul v-for="service in apartment.services">
            <li>
                {{ service.name }}
            </li>
        </ul>
    </div>
    <div v-else>
        Non trovato
    </div> -->
    
</template>

<style lang="scss" scoped>

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

    ul{
        margin-bottom: 0;
        padding: 10px 0px;
        li {
            margin-right: 5px;
            font-size: 15px;
            a {
            color: black;
            padding: 2px 5px;
            border-radius: 10px;
            transition: 0.3s;
            &:hover {
                background-color: #F6AE2D;
            }
            } 
            
        }
    } 
    .cover_img {
        width: 50%;

        img {
        width: 100%;
        object-fit: cover;
        }
    }
        .single_picture {
            max-height: 200px;
            img {
            width: 100%;
            object-fit: cover;
            }
        }

    .message_btn{
        background-color: #F6AE2D;
        border: 2px solid #F6AE2D;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 10px;
        font-size: 15px;
        box-shadow: 5px 5px 5px lightgrey;
        transition: .3s;

        &:hover {
            scale: 1.1;
            box-shadow: 5px 5px 8px grey;
        }
    }

    .icon {
        width: 40px;
    }

</style>