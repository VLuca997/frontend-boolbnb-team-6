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
  <div class="footer-class">

    <FooterComponent />  
  </div>
</template>

<style lang="scss">
@use "assets/scss/main.scss";

*{
 font-family: 'Nunito', sans-serif;
}


// .footer-class{
//   position: absolute;
//   bottom: 0;
//   left:0;
//   right: 0;
// }
</style>
