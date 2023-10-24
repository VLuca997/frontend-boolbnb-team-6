<script>

export default {
    data() {
    	return {}
    },
}
</script>

<template>
  
    <div class="bg_tipp shadoww position-relative">
        <div class="container">
            <h1 class="title_position text-white"><strong>AGGIUNGI IL TUO APPARTAMENTO!</strong></h1>
    
            <a href="http://127.0.0.1:8000" class="btn btn-light btn-lg mt-5 btn_position">AGGIUNGI</a>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    .bg_tipp{
        background-image: url(../../assets/img/bg-tipp.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        object-fit: fill;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;

        height: 500px;
        
    }

    .shadoww{
        box-shadow: 10px 10px 5px 3px rgb(0, 0, 0, .5);
    }

    .title_position{
        position: absolute;
        top: 30%;
        left: 25%;
    }

    .btn_position{
        position: absolute;
        bottom: 30%;
        left: 47%;
    }

    @media (min-width: 320px) and (max-width: 480px){

        .bg_tipp{
            background-image: url(../../assets/img/bg-tipp-mobile.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            object-fit: fill;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;

            height: 500px;

        }

        .shadoww{
            box-shadow: none;
        }

        .back_drop{
            border: 2px solid rgb(255, 255, 255, .5);
            backdrop-filter: blur(20px);
            border-radius: 10px;
        }

        .title_position{
            position: absolute;
            top: 30%;
            left: 20%;
        }

        .btn_position{
            position: absolute;
            bottom: 30%;
            left: 35%;
        }

    }

</style>