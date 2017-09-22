<template>
  <el-carousel :interval="9000" arrow="always" indicator-position="outside">
    <el-carousel-item v-for="item in items" :key="item">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
 export default {
   name: 'bannerTop',
   data(){
     return{
       items: [
         'http://www.meta.gov.co/web/sites/default/files/styles/slider_1200x400/public/Banner%20gobernacion%20sobre%20ruedas-01.png',
         'http://www.meta.gov.co/web/sites/default/files/styles/slider_1200x400/public/banner_yo%20soy%20amcho-07.png'
       ]
     }
   }
 }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__container{
  }
</style>
