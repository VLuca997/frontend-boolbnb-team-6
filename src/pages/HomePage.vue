<script>

import CardComponent from '../components/Main/CardComponent.vue';
import HeaderBottomComponent from '../components/Header/HeaderBottomComponent.vue';

// my-component.js
export default {

    name: "HomePage",

    data() {
        return{
            ciao:'',
        }
    },
    
    components: {
        CardComponent,
        HeaderBottomComponent,
    },
}
</script>

<template>
    <HeaderBottomComponent/>
    <div class="container py-5">
        <div class="row">
            <!-- CARD APARTMENT -->
            <div class="col-3 min_width">
                <CardComponent />
            </div>

        </div>
        <!-- SEZIONE CARD APPARTAMENTI -->
    </div> 
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