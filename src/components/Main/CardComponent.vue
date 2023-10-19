<script>

export default {
    data() {
    	return{} 
    },
}
</script>

<template>
    <div class="position-relative mobile_size">
        <!-- IMG -->
        <a href="#">
            <img src="/src/assets/img/cover1.jpg" class="img-card rounded d-block shadoww_img" alt="...">
        </a>
        <!-- CONTAINER INFO -->
        <div class="container_ position_container p-2 rounded shadoww_container">
            <p class="fst-italic">Via Roma, 34, <strong>Roma</strong> </p>
            <p class="position_price style_price p-1">300€ /N</p>
            <h5>Titolo appartamento</h5>
            <hr>
            <div class="info">
                <p><i class="fa-solid fa-door-open"></i> Stanze: 2 <span class="ps-2"><i class="fa-solid fa-maximize"></i> M²: 50</span></p> 
                <p><i class="fa-solid fa-bed"></i> Letti: 4 <span class="ps-3"><i class="fa-solid fa-bath"></i> Bagni: 1</span></p>
            </div>
        </div>
    </div>                                    
</template>

<style lang="scss" scoped>

     .shadoww_img{
     box-shadow: 0px 5px 5px 3px rgb(0, 0, 0, .5);
     }

     .shadoww_container{
     box-shadow: 0px 5px 5px 3px rgb(0, 0, 0, .5);
     }

     .shadoww_img:hover{
     box-shadow: 0px 5px 5px 5px rgb(0, 0, 0, .5);
     }

    .img-card{
        height: 350px;
        width: 100%;
    }

    .container_{
        width: 80%;
        background-color: white;
    }

    .position_container{
        position: relative;
        bottom: 50px;
        left: 25px;
        
    }

    .position_price{
        position: absolute;
        right: 0px;
        top: -15px;
    }

    .style_price{
        background-color: #F6AE2D;
        border: 1px solid #F6AE2D;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .info{
        p{
		    font-weight: bold;

            i{
                color: orange;
            }
	    }
    }

</style>