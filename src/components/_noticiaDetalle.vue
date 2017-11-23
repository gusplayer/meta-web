<template lang="html">
  <div class="principal">
    <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
    <el-breadcrumb-item>Noticia</el-breadcrumb-item>
    </el-breadcrumb>

    <router-link to="/prensa">
      <el-button type="info" plain> <-  Regresar a noticas</el-button>
    </router-link>

    <div class="noticia">
      <img :src="`http://intranet.meta.gov.co/imagen_timeline/${$route.params.imagen[0].nombre_imagen}`">
      <h2>{{$route.params.titulo}}</h2><br>
      <p v-html="$route.params.contenido"></p>
    </div>

    <router-link to="/prensa">
      <el-button type="info" plain> <-  Regresar a noticas</el-button>
    </router-link>

  </div>
</template>

<script>
import Breadcrumb from './breadcrumb.vue'
export default {
  components: {Breadcrumb},
}
</script>

<style>
.principal{
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100%;
  padding: 12px
}
.noticia{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #d1dbe5;
  border-radius: 4px;
  box-shadow:  0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  margin: 25px 120px;
  padding: 0px 40px 40px 40px;
}
.noticia p{
  text-align: justify;
}
.noticia img{
  width: calc(100% + 80px);
  margin-bottom: 30px;
  border-radius: 4px 4px 0px 0px;
}
@media screen and (max-width: 1100px) {
.noticia{
  width: 100%;
  padding: 0px 10px 10px 10px;
}
.noticia img{
  width: calc(100% + 20px);
}
.noticia p{
  font-size: 11pt
}
.noticia h2{
  font-size: 13pt
}

}
</style>
