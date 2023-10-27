<script>
    export default {
        data() {
            return {

            }
        },
        
    }
</script>

<template>
    <!-- <div class="bg-black">

        <div class="container text-white">
            <div class="row"> -->
                <!-- SEZIONE CONTATTI -->
                <!-- <div class="col-3">
                    <h2 class="pt-4">Contattaci</h2>
                    <ul>
                        <li class="py-1"><a href="#">- Chi siamo</a></li>
                        <li class="py-1"><a href="#">- Contatti</a></li>
                        <li class="py-1"><a href="#">- Case</a></li>
                    </ul>
                </div> -->
                <!-- SEZIONE CENTRALE -->
                <!-- <div class="col-6 d-flex justify-content-center">

                    <img class="logo-footer" src="/src/assets/img/logo_white.png" alt="">

                </div> -->
                <!-- SEZIONE SOCIAL -->
                <!-- <div class="col-3 d-flex justify-content-between pt-4">
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

        <p class="mb-0 text-white opacity-75"> <i class="fa-regular fa-copyright"></i> Copyright 2023, Immobiliaria BoolBnB Srl. Tutti i diritti riservati </p>

    </div> -->


    <div class="my_footer">
        <div class="container h-100 footer-size  position-relative">
        <div class="row  text-center">
            <div class="col-12 col-md-4  ">
               <div>
                    <h2 class="pt-4 text-light">Contattaci</h2>

                    <ul class="d-inline-block px-3">

                        <li class="py-2"><a href="#">Chi siamo</a></li>
                        <li class="py-2"><a href="#">Contatti</a></li>
                        <li class="py-2"><a href="#">Case</a></li>

                    </ul>

               </div>

            </div>

            <div class="col-12 col-md-4">

                <div class=" logo-footer d-flex justify-content-center align-items-center">

                    <img class="img-fluid w-25" src="/src/assets/img/logo_white.png" alt="">

                </div>

            </div>

            <div class="col-12 col-md-4">

                <div class="d-flex flex-row h-100 justify-content-between text-center d-flex align-items-center" >

                    <span class="text-center d-flex align-items-center">

                        <ul class="d-inline-block">

                            <li class="py-2">

                                <a href="https://www.instagram.com/">
                                
                                    <i class="fa-brands fa-instagram"></i>
                            
                                </a>

                            </li>

                            <li class="py-2">

                                <a href="https://twitter.com/?lang=it">

                                    <i class="fa-brands fa-twitter"></i>

                                </a>

                            </li>

                            <li class="py-2">

                                <a href="https://www.facebook.com/?locale=it_IT">

                                    <i class="fa-brands fa-facebook"></i>
                                </a>

                            </li>

                        </ul>

                    </span>

                    <span class="d-flex align-items-center text-light px-3">
                        <h5 class="text-center">Seguici nei tuoi Social preferiti!</h5>
                    </span>

                    <span class="text-center">

                        <ul class="d-inline-block px-3">

                            <li class="py-2"><a href="https://www.youtube.com/">
                                <i class="fa-brands fa-youtube"></i>
                            </a>

                        </li>

                            <li class="py-2"><a href="https://github.com/">
                                <i class="fa-brands fa-github"></i>
                            </a>

                        </li>

                            <li class="py-2">
                                <a href="https://discord.com/">
                                <i class="fa-brands fa-discord"></i>
                            </a>

                        </li>

                        </ul>

                    </span>

                </div>

            </div>

        </div>
    </div>
    </div>
    


</template>

<style lang="scss" scoped>
    .my_footer {
    background-color: black;
    }
//     .logo-footer{
//         height: 100%;
//         width: 100%;
//         bottom: 0;
//     }

     ul li {
          text-decoration: none;
         list-style: none;
         padding: 0;
     }

     a{
         text-decoration: none;
         color: white;
     }




//     .footer-size {
//     max-height: 100px; /* Altezza massima in modalità desktop */
//     height: auto; /* Crescita dinamica in modalità mobile */
// }

// .logo-footer {
//     height: 100%; /* Altezza massima del logo del footer */
// }

// i{
//     font-size: 30px;
// }

</style>