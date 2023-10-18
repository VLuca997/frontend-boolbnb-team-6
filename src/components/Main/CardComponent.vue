<script>
import AccordCardComponent from './AccordCardComponent.vue';

export default {
        components: {
        AccordCardComponent,
    },
    data() {
    	return 
    },
}
</script>

<template>
        <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                        <div class="col-md-4">
                                <img src="/src/assets/img/cover1.jpg" class="img-fluid rounded-start shadoww" alt="...">  
                                <a class="btn btn-warning mt-3 ms-2" href="#">Apri</a>
                        </div>

                        <div class="col-md-8">
                                <div class="card-body position-relative">
                                        <h4 class="card-title d-inline-block">Casa in montagna</h4> 
                                        <p class="card-text">Via Roma, 34, Roma</p>
                                        <p class="position-price p-1">300€ /N</p>
                                        

                                        <AccordCardComponent />
                                </div>
                        </div>
                </div>
        </div>
</template>

<style lang="scss" scoped>

    .shadoww{
    box-shadow: 5px 5px 5px 3px rgb(0, 0, 0, .5);
    }

    .position-price{
        position: absolute;
        right: 20px;
        top: 65px;

        border: 2px solid #FFCA2C;
        border-radius: 5px;
        background-color: #FFCA2C;
    }

</style>