<template>
  <el-carousel :interval="9000" arrow="always" indicator-position="outside">
    <el-carousel-item v-for="item in items" :key="item">
      <img :src="item.url">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
 import axios from 'axios';
 export default {
   name: 'bannerTop',
   created(){
     axios.get('http://intranet.meta.gov.co/banners/todas')
     .then( response => {
       this.items = response.data.banners;
     })
    //  .then (log => console.log(this.items))
     .catch(e => {
      this.errors.push(e)
    })

   },
   data(){
     return{
       items: [],
       errors: []
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
