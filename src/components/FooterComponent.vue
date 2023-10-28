<script>
    export default {
        data() {
            return {

            }
        },
        
    }
</script>

<template>
   

    <div class="my_footer">
        <div class="container h-100 footer-size  position-relative">
            <div class="row  text-center footer-border">
                <div class="col-12 col-md-4  ">
                    <div class="">
                        <h2 class="pt-4 text-light">Contattaci</h2>

                        <ul class="d-inline-block px-3">

                            <li class="py-2"><a href="#">Chi siamo</a></li>
                            <li class="py-2"><a href="#">Contatti</a></li>
                            <li class="py-2"><a href="#">Case</a></li>

                        </ul>
                    </div>
                </div>
                <hr>
                <div class="col-12 col-md-4 d-flex align-items-center ">

                    <div class=" logo-footer d-flex justify-content-center align-items-center">

                        <img class="img-fluid w-25" src="/src/assets/img/logo_white.png" alt="">

                    </div>

                </div>
                <hr>
                <div class="col-12 col-md-4 ">

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
    hr{
        border: 1px solid #F6AE2D;
    }

    ul li {
        text-decoration: none;
        list-style: none;
        padding: 0;
    }

    a{
        text-decoration: none;
        color: white;
    }


@media (min-width:768px){
    hr{
        color: lightgray;
        display: none;
    }
}

</style>