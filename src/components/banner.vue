<template>
  <el-carousel :interval="9000" arrow="always" indicator-position="outside" >
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

  .el-carousel__item img {
    width: 100%;
    background-color: white
  }


  .el-carousel__item {
    background-color: white;
  }
  .el-carousel__container{
    height: 400px;
    background-color: white
  }
@media screen and (max-width: 1100px) {
  .el-carousel__container{
    height: 300px
  }
}
@media screen and (max-width: 500px) {
  .el-carousel__container{
    height: 125px;
    margin-bottom: 0px

  }
}
</style>
