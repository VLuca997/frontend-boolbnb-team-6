<script>
// my-component.js

</script>

<template>
    <div class="bg-black">

        <div class="container text-white">
            <div class="row">
                <!-- SEZIONE CONTATTI -->
                <div class="col-3">
                    <h2 class="pt-4">Contattaci</h2>
                    <ul>
                        <li class="py-1"><a href="#">- Chi siamo</a></li>
                        <li class="py-1"><a href="#">- Contatti</a></li>
                        <li class="py-1"><a href="#">- Case</a></li>
                    </ul>
                </div>
                <!-- SEZIONE CENTRALE -->
                <div class="col-6 d-flex justify-content-center">
                    
                    <img class="logo-footer" src="/src/assets/img/logo_white.png" alt="">
                    
                </div>
                <!-- SEZIONE SOCIAL -->
                <div class="col-3 d-flex justify-content-between pt-4">
                    <ul class="d-inline-block">
                        <li class="py-2"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li class="py-3"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li class="py-2"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    </ul>
                    <h5 class="text-center pt-5 ps-5">Seguici nei tuoi Social preferiti!</h5>
                    <ul class="d-inline-block">
                        <li class="py-2"><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li class="py-3"><a href="#"><i class="fa-brands fa-github"></i></a></li>
                        <li class="py-2"><a href="#"><i class="fa-brands fa-discord"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <p class="text-white opacity-75"> <i class="fa-regular fa-copyright"></i> Copyright 2023, Immobiliaria BoolBnB Srl. Tutti i diritti riservati </p>

    </div>     
</template>

<style lang="scss" >

    .logo-footer{
        height: 200px;
        width: 200px;
    }

    ul{
        list-style: none;
        padding: 0;

        a {
            text-decoration: none;
            color: white;
            font-size: large;
            transition: color 0.3s ease;

            &:hover {
                color: #F6AE2D;
            }
        }
    }

    
    

</style>