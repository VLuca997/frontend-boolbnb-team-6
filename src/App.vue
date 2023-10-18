<script >
//import component h1
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import axios from 'axios';



// my-component.js
export default {
  
  components:{
    
    HeaderComponent,
    FooterComponent
}
}
</script>

<template>
  <HeaderComponent />
  <router-view></router-view>
  <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss";

*{
 font-family: 'Nunito', sans-serif;
}

</style>
