<script>

export default {
    data() {
    	return{

        }
        
    },
    props: {
        title: String,
        slug: String,
        price_per_night: Number,
        rooms_number: Number,
        beds_number: Number,
        bathrooms_number: Number,
        square_meters: Number,
        address: String,
        cover_img: String,
        description: String,
    }
}
</script>

<template>
    
    <div class="position-relative mobile_size">
        <!-- IMG -->
        <div class="component_container">
            <router-link :to="{name: 'apartment', params: {slug:slug}}">
            <img :src="'http://127.0.0.1:8000/storage/'+ cover_img " class="img-card rounded d-block shadoww_img" alt="...">
            </router-link> 
            <!-- <div class="premium_badge">
                    Premium
            </div> -->
        </div>
        <!-- CONTAINER INFO -->
        <div class="container_ position_container p-2 rounded shadoww_container">
            <p class="fst-italic">{{ address }} </p>
            <p class="position_price style_price p-1">{{price_per_night}}€ /N</p>
            <h5>{{ title }}</h5>
            <hr>
            <div class="info">
                <p><i class="fa-solid fa-door-open"></i> Stanze: {{ rooms_number }} <span class="ps-2"><i class="fa-solid fa-maximize"></i> M²: {{ square_meters }}</span></p> 
                <p><i class="fa-solid fa-bed"></i> Letti: {{ beds_number }} <span class="ps-3"><i class="fa-solid fa-bath"></i> Bagni: {{ bathrooms_number }}</span></p>
            </div>
        </div>
    </div>  
    <!-- <router-link :to="{name: 'apartment', params: {slug: apartment.slug}}"> Vedi </router-link> -->
                                      
</template>

<style lang="scss" scoped>

    //  .shadoww_img{
    //  box-shadow: 0px 5px 5px 3px rgb(0, 0, 0, .5);
    //  }

     .shadoww_container{
     box-shadow: 0px 5px 5px 3px rgb(0, 0, 0, .5);
     }

    //  .shadoww_img:hover{
    //  box-shadow: 0px 5px 5px 5px rgb(0, 0, 0, .5);
    //  opacity: 0.2;
    //  }

    .img-card{
        height: 350px;
        width: 100%;
        box-shadow: 3px 3px 5px rgb(0, 0, 0, .5);
        transition: .3s;
        object-fit: cover;
    }

    .component_container {
        position: relative;

        &:hover{
            .premium_badge {
            transform: translateY(-10px);
        }
        }
        .premium_badge {
            position: absolute;
            z-index: 99;
            left: 0px;
            top: 0px;
            padding: 2px 5px;
            background-color: #F6AE2D;
            border: 1px solid #F6AE2D;
            border-bottom-right-radius: 10px;
            border-top-left-radius: 5px;
            transition: 0.3s;
            
        }
    }

    .img-card:hover{
        box-shadow: 6px 6px 8px rgb(0, 0, 0, .5);
        opacity: 0.8;
        transform: translateY(-10px);
    }

    .container_{
        width: 80%;
        background-color: white;
        // border: 1px solid lightgray;
    }

    .position_container{
        position: relative;
        bottom: 50px;
        left: 25px;
        height: 215px;
    }

    .position_price{
        position: absolute;
        right: 0px;
        top: -18px;
        font-size: 12px;
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