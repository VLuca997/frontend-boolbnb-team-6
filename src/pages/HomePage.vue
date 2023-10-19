<script>

import TippComponent from '../components/Main/TippComponent.vue';
import CommentComponent from '../components/Main/CommentComponent.vue';
import CardComponent from '../components/Main/CardComponent.vue';
import HeaderBottomComponent from '../components/Header/HeaderBottomComponent.vue';

import { store } from '../store.js';

// my-component.js
export default {

    name: "HomePage",

    data() {
        return{
            store,
        }
    },
    
    components: {
        CardComponent,
        HeaderBottomComponent,
        CommentComponent,
        TippComponent,
    },
}
</script>

<template>
    <!-- HEADER BOTTOM -->
    <HeaderBottomComponent/>

    <!-- CARD SECTION -->
    <section>
        <div class="container py-4">
            <div class="row">
                <div class="col-3 min_width">
                    <CardComponent :apartments="[]"/>
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