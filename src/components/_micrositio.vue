<template>
  <div class="principal">
  <Breadcrumb></Breadcrumb>
  <BannerMicro :imagen="`http://intranet.meta.gov.co/micrositios_banners/${datos.data[0].banners[0].banner}`"></BannerMicro>

  <div class="contenido">
    <div class="texto">
      <div class="info_micrositio">
        hola aqui va el video
      </div>

      <el-collapse v-model="activeNames" @change="handleChange">

        <el-collapse-item :title="item.titulo" :name="item.id" v-for="item in datos.data[0].secciones">
          <div>
            <el-tabs tab-position="top" style="height: 200px;" >
                <el-tab-pane :label="sub.titulo" v-for="sub in item.sub_secciones">
                  <div class="">
                    {{sub.titulo}}
                  </div>

                  <div>
                    {{sub.textos.texto}}
                  </div>
                </el-tab-pane>
            </el-tabs>
          </div>
        </el-collapse-item>

      </el-collapse>

      <br><br>

      <div class="galeria">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://images.pexels.com/photos/6496/man-person-jumping-desert.jpg?w=940&h=650&auto=compress&cs=tinysrgb" class="image">
        </el-card>

        <el-card :body-style="{ padding: '0px' }">
          <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" class="image">
        </el-card>
      </div>

    </div>

    <div class="lateral">

      <div class="social_botones_cuadro">
        <iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpSytf-8tPo4RNiqM54NzV0M&key=AIzaSyBocvLGZd1i7uxy95idGFnPq1FJsrGFrWo" allowfullscreen></iframe>
      </div>

      <div class="social_botones_cuadro">
        <a class="twitter-timeline" href="https://twitter.com/marcela_amayag">Cargando Twitter...</a>
      </div>

      <div class="social_botones_cuadro">
        <div id="fb-root"></div>
        <div class="fb-page" data-href="https://www.facebook.com/GobMeta/"
          data-tabs="timeline" data-small-header="false" data-adapt-container-width="true"
          data-hide-cover="false" data-show-facepile="true" data-width="500" style="width:100%">
          <blockquote cite="https://www.facebook.com/GobMeta/" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/GobMeta/">Cargando Facebook...</a></blockquote>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.10&appId=1513660055361840";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

import BannerMicro from './bannerMicro.vue'
import Breadcrumb from './breadcrumb.vue'
import axios from 'axios';

export default {
  components: {BannerMicro, Breadcrumb},
  name: 'app',
  created(){
    axios.get('http://intranet.meta.gov.co/api/micrositio/informacion/20')
    .then( response => {
      this.datos = response.data;
    })
    .catch(e => {
     this.errors.push(e)
   })
  },
  data(){
    return{
      imagenBanner:'http://www.meta.gov.co/web/sites/default/files/img_micrositios/Prensa-01.png',
      tabPosition: 'left',
      activeNames: ['1'],
      datos: ''
    }
  }
}
</script>

<style scoped>
p{
  font-size: 12pt;
  font-weight: 400;
  color: #4a4a4a;
  letter-spacing: 0.2px;
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
.texto{
  display: flex;
  flex: 5;
  min-width: 400px;
  box-shadow: 0 0 8px 0 rgba(94, 92, 92, 0.20);
  padding: 15px;
  margin-right: 20px;
  height: 100%;;
  text-align: justify;
  flex-direction: column;
}
.info_micrositio{

}
.lateral{
  display: flex;
  flex: 1;
  min-width: 350px;
  flex-direction: column;
}
.google_maps{
  display: flex;
  min-width: 300px;
  height: 400px;
  margin-bottom: 15px
}
.social_botones_cuadro{
  display: flex;
  height: 500px;
  max-width: 400px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow:auto;
  margin-bottom: 20px
}
.galeria{
  display: flex;
  flex-direction: row;
  flex: 3
}
.el-card{
  margin-bottom: 10px;
  display: flex;
  flex: 1;
  height: 200px
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
@media screen and (max-width: 1000px) {

  .lateral {
    min-width: 400px;
    flex:1;
  }
  .texto{
    margin-right: 10px;
    margin-bottom: 15px;
  }
  .social_botones_cuadro{
    max-width: 100%;
    min-width: 300px;
    margin-bottom: 15px;
  }

}
@media screen and (max-width: 500px) {
  p{
    font-size: 10pt;
  }
  .contenido{
    flex-direction: column;
  }
  .lateral{
    width: 100%;
    min-width: 0px;
    flex-direction: column;
    align-items: center
  }
  .texto{
    width: 100%;
    min-width: 250px;
    box-sizing: border-box;
    margin-right: 0px
  }
  .social_botones_cuadro{
    margin-right: 0px;
    min-width: 290px;
    padding: 0px;
    width: 100%;
  }

}
</style>
