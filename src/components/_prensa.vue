<template>

  <div class="prensa"
  v-loading="loading"
    element-loading-text="Cargando Noticias.."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">

    <Breadcrumb></Breadcrumb>
    <BannerMicro :texto="texto" :imagen="imagenBanner"></BannerMicro>

    <center><el-input style="width:350px" placeholder="Buscar" prefix-icon="el-icon-search" v-model="search"></el-input></center>

    <div class="card" >
       <el-col :span="8" v-for="(noticia,index) in filterData" :key="index" class="card-col">
         <router-link :to="{ name: 'noticia',
                             params: {
                               id: noticia.idTimeline,
                               contenido: noticia.contenido,
                               titulo: noticia.titulo,
                               imagen: noticia.imagenes
                             }
                           }">
          <el-card :body-style="{ padding: '0px' }">
            <div class="card-contenedor-imagen">
              <img v-if="noticia.imagenes[0]"
              :src="`https://intranet.meta.gov.co/imagen_timeline/${noticia.imagenes[0].nombre_imagen}`"
              class="card-image">
              <img v-else
              src="../assets/sinimagen.jpg"
              class="card-image">
            </div>            

            <div style="padding: 14px;">
              <span class="card-titulo">{{noticia.titulo}}</span>
              <div class="card-bottom card-clearfix">
                <time class="card-fecha">{{noticia.fecha}}</time>
                <el-button type="text" class="card-button">Ver más</el-button>
              </div>
            </div>
           </el-card>
          </router-link>
        </el-col>
    </div>

    <center><el-input style="width:350px" placeholder="Buscar" prefix-icon="el-icon-search" v-model="search"></el-input></center>

  </div>

</template>

<script>
import axios from 'axios';
import BannerMicro from './bannerMicro.vue'
import Breadcrumb from './breadcrumb.vue'
export default {
  components: {BannerMicro, Breadcrumb},
  created(){
    axios.get('https://intranet.meta.gov.co/web/timeline')
    .then( response => {
      this.noticias = response.data.timeline;
      this.loading = false
    })
    .catch(e => {
     this.errors.push(e)
   })
  },
  data() {
    return {
           noticias:[],
           texto:null,
           imagenBanner:require('../assets/prensa.jpg'),
           search: '',
           loading: true

           }
  },
  computed: {
     filterData: function(){
       let algo = this.noticias.filter( 
         (dato) => {
           if(dato.titulo != null){
             let tittle = dato.titulo.toUpperCase(); 
             return tittle.includes(this.search.toUpperCase()) 
             }
          });
        return algo.slice(0,192)
     },
  }
}
</script>

<style scoped>
  .contenedor_blog{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .contenedor_buscador{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin-bottom: -5px
  }
  .buscador{
    width: 500px;
  }
  .time {
    font-size: 15px;
    color: #999;
  }
  .el-col{
    padding: 5px;
    margin-bottom:  20px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  .card{
    display: flex;
    flex: 1;
    margin-bottom: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card-time {
      font-size: 13px;
      color: #999;
    }

  .card-bottom {
      margin-top: 13px;
      line-height: 12px;
    }

  .card-button {
      padding: 0;
      float: right;
    }

  .card-clearfix:before,
  .card-clearfix:after {
        display: table;
        content: "";
    }

  .card-clearfix:after {
        clear: both
    }
  .card-col{
    display: flex;
    max-width: 380px;
    min-width: 250px;
    width: 100%;
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;

  }
  .card-contenedor-imagen{
    overflow: hidden;
    height: 170px;
  }
  .card-image{
    width: 100%;
    display: block;
  }
  .card-titulo{
    font-size: 11 pt;
  }
  .card-fecha{
    font-size: 13px;
    color: #999;
  }

@media screen and (max-width: 500px) {
  .card-col{
    width: 100%;
    max-width: 500px
  }
  .card-contenedor-imagen{
    overflow: hidden;
    height: 210px;
  }
}
</style>
