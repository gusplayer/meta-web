<template lang="html">
  <div class="principal"
    v-loading="loading"
    element-loading-text="Cargando Noticias.."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">>

    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/documentacion/convocatorias' }">Transparencia</el-breadcrumb-item>
    </el-breadcrumb>

    <BannerMicro :imagen="`https://intranet.meta.gov.co/micrositio_banners/${datos.data[0].banners[0].banner}`"
    v-if="datos.data[0].banners[0]"></BannerMicro>

    <h2>Transparencia y acceso a la información pública</h2><br />

   
    <!-- <el-input style="width:300px" placeholder="Buscar" prefix-icon="el-icon-search" v-model="search"></el-input> -->

    <div class="contenido">

        <div class="contenido-col" v-for="(dato, index) in sortedArray" :key="index" >
          <h2>{{dato.titulo}}</h2>
          <hr>
          <br />

          <p class="contenido-col-seccion" v-for="(url, index) in dato.urls" ><a :href="url.url">{{url.titulo}}</a></p>        

            <!-- <p class="contenido-col-contenido"><a href="#">Guía del usuario</a></p> -->
          
        </div>

    </div>

  </div>
</template>

<script>
import BannerMicro from './bannerMicro.vue'
import Breadcrumb from './breadcrumb.vue'
import axios from 'axios';

export default {
  components: {
    BannerMicro,
    Breadcrumb
  },
  name: 'app',
  created() {
    //do something after creating vue instance
    axios.get('https://intranet.meta.gov.co/api/micrositio/informacion/56')
      .then(response => {  this.datos = response.data
                           this.secciones = response.data.data[0].secciones
                           this.loading = false 
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  data() {
    return {
      datos: [],
      search: '',
      secciones: '',
      loading: true
    }
  },
  computed: {
     filterData: function(){
       return this.secciones.filter( (dato) => {let tittle = dato.titulo.toUpperCase(); return tittle.includes(this.search.toUpperCase())} )
     },
    sortedArray: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
    return this.secciones.sort(compare);
    }
  }
}
</script>

<style lang="css">

.breadcrumb{
  display: flex;
  align-self: flex-start;
  margin-bottom: 15px;
  background-color: #fafafa;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px
}
p{
  font-size: 10pt;
  font-weight: 400;
  color: #4a4a4a;
  letter-spacing: 0.2px;
}
h1, h2, h3{
  color: #48576a;
}
.principal{
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100%;
  padding: 12px
}
.contenido{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%
}
.contenido-col{
  display: flex;
  background-color: #ffffff;
  width: 48%;
  padding: 15px;
  margin: 1%;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(94, 92, 92, 0.32)
}
.contenido-col h2{
  margin-bottom: 15px;
  font-size: 11pt
}
.contenido-col-seccion{
  margin-top: 5px;
  color: green;
  margin-left: 5px
}
.contenido-col-contenido{
  margin-top: 5px;
  margin-left: 40px
}
.contenido-col > div:first-child {
  margin-right: 20px
}

@media screen and (max-width: 800px) {
  .contenido-col{

    width: 100%;
    padding: 10px

  }
  h2{
    font-size: 12pt
  }
}

</style>
