<script>
// my-component.js
export default {
    data() {
    return 
    },
}
</script>

<template>
    <section>
        <div class="container d-flex justify-content-center align-items-center h-100">
            <div class="row flex-column">
                <div class="col">
                    <h2 class="text-light fw-bold bg-success">
                        Scegli il tuo appartamento
                    </h2>
                </div>
                <div class="col">
                    <input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
section {
    background-image: url('../../assets/img/bg-home.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: fill;
    height: 75vh;
}
.col {
    h2 {
        width: fit-content;
        padding: 10px 40px;
        margin: 20px auto;
    }
}
</style>