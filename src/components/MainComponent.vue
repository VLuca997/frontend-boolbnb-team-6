<script>
import CardComponent from './Main/CardComponent.vue';
// my-component.js
export default {
    components: {
        CardComponent,
    },

    data() {
        return{

        }
    },
}
</script>

<template>
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