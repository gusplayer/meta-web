<template lang="html">

    <div class="contenido">
        <div class="card" >
           <el-col :span="8" class="card-col" v-for="id in datos.data[0].secciones" :key="id.key">
             <router-link :to="{path: '/documentacion/convocatorias/listado/:id'}">
              <el-card :body-style="{ padding: '0px' }">
                <div class="card-contenedor-imagen">
                  <img v-if="id.imagenes[0]"
                  :src="`https://intranet.meta.gov.co/secciones_imagenes/${id.imagenes[0].imagen}`"
                  class="card-image">
                </div>
                <div style="padding: 14px;">
                  <span class="card-titulo">{{id.titulo}}</span>
                </div>
               </el-card>
              </router-link>
            </el-col>
        </div>
    </div>

</template>

<script>
import BannerMicro from './bannerMicro.vue'
import Breadcrumb from './breadcrumb.vue'
import axios from 'axios';

export default {

  created() {
    //do something after creating vue instance
    axios.get('https://intranet.meta.gov.co/api/micrositio/informacion/47')
      .then(response => {
        this.datos = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  data() {
    return {
      datos: '',
    }
  },
}
</script>

<style lang="css" scoped>


p{
  font-size: 10pt;
  font-weight: 400;
  color: #4a4a4a;
  letter-spacing: 0.2px;
}
h1, h2, h3{
  color: #48576a;
}

.contenido{
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%
}
.card{
  display: flex;
  flex: 1;
  margin-bottom: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
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
</style>
