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
        <!-- SEZIONE CARD APPARTAMENTI -->
        <div class="row">
            <div class="col">
                <CardComponent />
            </div>
            <div class="col">
                <CardComponent />
            </div>
            <div class="col">
                <CardComponent />
            </div>
        </div>
    </div> 
</template>

<style lang="scss" scoped>

</style>