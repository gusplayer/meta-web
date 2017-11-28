<template lang="html">
  <div class="principal">

    <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ name: 'prensa'}">Noticias</el-breadcrumb-item>
    <el-breadcrumb-item> No. {{noticias.idTimeline}}</el-breadcrumb-item>
    </el-breadcrumb>

    <router-link to="/prensa">
      <el-button type="info" plain> <-  Regresar a noticias</el-button>
    </router-link>

    <div class="noticia">
      <img :src="`https://intranet.meta.gov.co/imagen_timeline/${noticias.imagenes[0].nombre_imagen}`"
      v-if="noticias.imagenes[0]">
      <h2>{{noticias.titulo}}</h2><br>
      <p v-html="noticias.contenido"></p>
      <br>

      <!-- <iframe
      width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252157011&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe> -->
    </div>

    <!-- <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Compartir en Facebook</a></div> -->
    <br>
    <router-link to="/prensa">
      <el-button type="info" plain> <-  Regresar a noticias</el-button>
    </router-link>
  </div>
</template>

<script>
import Breadcrumb from './breadcrumb.vue'
import axios from 'axios';
export default {
  created(){
    axios.get(`https://intranet.meta.gov.co/web/ver/timeline/${this.$route.params.id}`)
    .then( response => {
      this.noticias = response.data.timeline;
    })
    .catch(e => {
     this.errors.push(e)
   })
  },
  data(){
    return{
      noticias: []
    }
  },
  components: {Breadcrumb},
}
</script>

<style scoped>
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
