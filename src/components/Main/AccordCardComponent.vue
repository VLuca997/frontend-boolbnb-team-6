<script>

export default {
    data() {
        return 
    },
}
</script>

<template>  

<div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Info. Appartamento
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                                <p><i class="fa-solid fa-door-open"></i> Stanze: 2 <i class="fa-solid fa-maximize"></i> M²: 50</p> 
                                <p><i class="fa-solid fa-bed"></i> Letti: 4 <i class="fa-solid fa-bath"></i> Bagni: 1</p>  
                        </div>
                </div>
        </div>
</div>

</template>

<style lang="scss" scoped>

	p{
		font-weight: bold;
		i{
			color: orange;
		}
	}
        

</style>