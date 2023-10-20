<script>
import axios from 'axios';


// my-component.js
export default {

    name: "ApartmentPage",

    data() {
        return{
            apartment: null,
            loading: false,

        }
    },
    
    // components: {
    // },

    created() {
        this.getApartment();
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
                            console.log(this.apartment)
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
        }
    }
}
</script>

<template>

    <div v-if="apartment">
        <h1>{{ apartment.title }}</h1>
        <ul v-for="service in apartment.services">
            <li>
                {{ service.name }}
            </li>
        </ul>
    </div>
    <div v-else>
        Non trovato
    </div>
    
</template>

<style lang="scss" scoped>


</style>