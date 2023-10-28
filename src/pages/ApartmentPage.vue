<script>
import axios from 'axios';
import MapComponent from '../components/MapComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';



export default {

    name: "ApartmentPage",

    data() {
        return{
            apartment: null,
            loading: false,
            services: [],
            picture: [],
            apartment_id: '',
            sender_name: '',
            sender_email: '',
            object: "Oggetto dell'email",
            content :'',
            sentSuccess: false,
            isSending: false,
            user: window.auth,
        }
    },

    components: {
        MapComponent,
        LoaderComponent,
    },

    mounted() {
        
        this.scrollToTop ()
    },

    created() {
        this.getApartment();

        this.getAllServices();

        this.getAllPictures();
    },

    methods: {

        scrollToTop() {
            window.scrollTo(0, 0);
        },

        sendMessage() {

            if(this.sender_name && this.sender_email && this.content){

                let data = {
                sender_name: this.sender_name,
                sender_email: this.sender_email,
                object: this.object,
                content: this.content,
                apartment_id: this.apartment.id,
                };

                console.log(data);

                this.isSending = true;
                axios
                .post('http://127.0.0.1:8000/api/messages/store', data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }})

                .then((response) => {
                    this.isSending = false;
                    console.log(response);

                    if (response.data.success) {
                        this.sentSuccess = true;
                    } else {
                        this.showError = true;
                        this.errors = response.data.errors;
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
            }
        },

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

    <div class="container px-3" v-if="!loading">

        <h1 class="py-3">
            {{ apartment.title }}
        </h1>

        <div class="visible_img d-lg-block">
            <div class="d-flex justify-content-between images_container">

                <div class="col-md-12 col-lg-6 cover_img">
                    <img :src="'http://127.0.0.1:8000/storage/'+ apartment.cover_img" alt="Cover img">
                </div>

                <div class="col-lg-6 col-md-12 ">
                    <div class="picture_img d-flex flex-wrap">
                        <div v-for="picture in apartment.pictures" :key="picture.id" class="single_picture">
                            <img :src="'http://127.0.0.1:8000/storage/'+ picture.img_url " alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="carouselExample" class="carousel slide d-lg-none">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" :src="'http://127.0.0.1:8000/storage/'+ apartment.cover_img" alt="Cover img">
                </div>

                <div v-for="picture in apartment.pictures" :key="picture.id" class="carousel-item">
                    <img class="d-block w-100" :src="'http://127.0.0.1:8000/storage/'+ picture.img_url " alt="">
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="row py-2">
            <div class="col-sm-12 col-lg-8">
                <ul class="padding-href-bar">
                    <li class="d-inline-block"><a href="#description">Descrizione</a></li>
                    <li class="d-inline-block"><a href="#details">Dettagli appartamento</a></li>
                    <li class="d-inline-block"><a href="#services">Servizi</a></li>
                    <li class="d-inline-block"><a href="#position">Posizione</a></li>
                </ul>
            </div>
            <div class="col-md-12 col-lg-4 text-lg-end">
                <button type="button" class="message_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Scrivimi un messaggio</button>
            </div>
        </div>
        <!-- Invio messaggi -->

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Invia un messaggio a <strong> {{ apartment.user.first_name }} </strong></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div class="modal-body" v-if="sentSuccess == false">
                        <form @submit.prevent="sendMessage()">
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Appartamento</label>
                                <input type="text" class="form-control" id="recipient-name" :value="apartment.title">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Nome <span style="color: red;">*</span></label>
                                <input type="text" class="form-control" id="recipient-name" v-model="sender_name" required min="3">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Email <span style="color: red;">*</span></label>
                                <input type="email" class="form-control" id="recipient-name" v-model="sender_email" required autocomplete="email">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Oggetto</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="object">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Messaggio <span style="color: red;">*</span></label>
                                <textarea class="form-control" id="message-text" v-model="content" required minlength="3"></textarea>
                            </div>
                            <input type="hidden" name="apartment_id" for="apartment_id" v-model="apartment_id" />
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                                <button type="submit" class="btn btn-primary">Invia Messaggio</button>
                            </div>
                        </form>
                    </div>

                    <div class="modal-body" v-if="sentSuccess == true">
                        <h1 class="text-success">
                            Messaggio Inviato!
                        </h1>
                        <h4>
                            <strong> {{ apartment.user.first_name }} </strong> ti rispodera appena possibile!
                        </h4>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Fine Invio messaggi -->

        <hr>

        <div class="row py-3">
            <div class="col">
                <h4 class="pb-2" id="description">
                    Descrizione
                </h4>
                <p>
                    {{ apartment.description }}
                </p>
            </div>
        </div>

        <hr>

        <div class="row py-3">
            <h4 class="pb-2" id="details">
                Dettagli Appartamento
            </h4>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <span class="px-2"><i class="fa-solid fa-bath"></i></span>
                Bagni: {{ apartment.bathrooms_number }}</div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <span class="px-2"><i class="fa-solid fa-bed"></i></span>
                Letti: {{ apartment.beds_number }}</div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <span class="px-2"><i class="fa-solid fa-door-open"></i></span>
                Stanze: {{ apartment.rooms_number }}</div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <span class="px-2"><i class="fa-solid fa-maximize"></i></span>
                Metri Quadri: {{ apartment.square_meters }}</div>
        </div>

        <hr>

        <div class="row py-3">
            <h4 class="pb-2" id="services">
                Servizi Disponibili
            </h4>
            <div class="col-sm-12 col-md-6 col-lg-3" v-for="service in apartment.services" key="service.id">
                <div class="icon d-inline-block">
                    <i class="p-2" :class="service.icon"></i>
                </div>
                <span>{{ service.name }}</span>
            </div>

        </div>

        <hr>

        <div class="row py-3 mb-4">
            <h4 class="py-1  " id="position">
                Posizione Appartamento
            </h4>
            <h4 class="pb-3 address-show-apprtm-show">{{ apartment.address }}</h4>
            <div>

                <MapComponent/>
            </div>
            
        </div>


    </div>

    <div class="container loader" v-if="loading">
        <div class="row">
            <div class="col-1 m-auto">
                <LoaderComponent />
            </div>
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

.padding-href-bar > li{
    padding-right: 15px;
}

    ul{
        margin-bottom: 0;
        padding: 10px 0px;

        li {

            font-size: 15px;
            a {
            color: black;
            padding: 2px 5px;
            border-radius: 10px;
            transition: 0.3s;
            font-size: 22px;
            &:hover {
                background-color: #F6AE2D;
            }
            }

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
        margin: 5px 0;
        &:hover {
            scale: 1.1;
            box-shadow: 5px 5px 8px grey;
        }
    }

    .images_container {
        height: 450px;

        .cover_img{
            height: 100%;

            img {
                border-radius: 20px;
                width: 100%;
                height: 100%;
                padding: 5px;
                object-fit: cover;
            }
        }

        .picture_img {
            height: 100%;

            .single_picture {
                overflow: hidden;
                width: 50%;
                height: 50%;

                img {
                border-radius: 20px;
                width: 100%;
                height: 100%;
                padding: 5px;
                object-fit: cover;
                }
            }
        }
    }

    // .images_container {

    //     .cover_img{

    //         img {

    //         }
    //     }

    //     .picture_img {


    //         .single_picture {

    //             img {


    //             }
    //         }
    //     }
    // }

    i {
        color: #F6AE2D;
        .icon {
            width: 40px;
        }
    }
    .address-show-apprtm-show {
        color: #F6AE2D;
    }

    .loader {
        padding: 180px 0;
    }

    .carousel{
        height: 500px;
        .carousel-item {
            img {
                border-radius: 20px;
                height: 500px;
                object-fit: cover;
            }
        }

    }

    .visible_img {
        display: none;
    }

    // .container {
    //     padding: 0px 30px
    // }

</style>