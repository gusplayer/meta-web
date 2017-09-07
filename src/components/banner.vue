<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in items" :key="item">
      <h3><img :src="item"></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
 export default {
   data(){
     return{
       items: [
         'http://www.meta.gov.co/web/sites/default/files/styles/slider_1200x400/public/Banner%20gobernacion%20sobre%20ruedas-01.png',
       ]
     }
   }
 }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
