<template>
  <div class="principal">
    <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
    <el-breadcrumb-item>{{datos.data[0].titulo}}</el-breadcrumb-item>
    </el-breadcrumb>
  <BannerMicro :imagen="`http://intranet.meta.gov.co/micrositio_banners/${datos.data[0].banners[0].banner}`"
  v-if="datos.data[0].banners[0]">
  </BannerMicro>

  <!-- <el-carousel :interval="9000" arrow="always" indicator-position="outside" >
    <el-carousel-item v-for="item in datos.data[0].banners[0].banner[0]" :key="item">
      <img :src="`http://intranet.meta.gov.co/imagen_banners/${item.imagen}`">
    </el-carousel-item>
  </el-carousel> -->

  <div class="contenido">
    <div class="texto">
      <div class="info_micrositio">
        <h2>{{datos.data[0].titulo}}</h2>
        <br><br>
      </div>

      <el-collapse v-model="activeNames" @change="handleChange">

        <el-collapse-item :title="setTitle(item.titulo)" :name="item.id" v-for="item in datos.data[0].secciones">

            <div class="sub_texto" v-for="texto_seccion in item.textos">
              <p v-html="texto_seccion.texto"> </p>
            </div><br>

            <div class="secciones_docs" v-for="archivo in item.archivos">
              <i class="el-icon-document"></i>
              <div class="secciones_docs_descarga">
                <p>{{archivo.titulo}}</p>

                <a :href="`http://intranet.meta.gov.co/secciones_archivos/${archivo.archivo}`" target="_blank">
                <el-button type="primary">Descarga</el-button>
                </a>
              </div>
            </div>

            <iframe v-for="video in item.videos"
            width="640" height="360"
            :src="`https://www.youtube.com/embed/${videoYoutube(video.video)}`"
            frameborder="0" gesture="media"
            allowfullscreen>
            </iframe>

            <div class="galeria" v-if="item.imagenes[0]">
              <br><br><template>
                <el-carousel :interval="12000" style="width:100%; max-width:700px,">
                  <el-carousel-item v-for="foto in item.imagenes" :key="item">
                    <img :src="`http://intranet.meta.gov.co/secciones_imagenes/${foto.imagen}`"
                          width="auto" style="max-height:100%">
                  </el-carousel-item>
                </el-carousel>
              </template>
            </div><br>

            <div class="social_botones_url_externa" v-for="item in item.urls">
              <a :href="item.url" target="_blank">
                <img :src="`http://intranet.meta.gov.co/secciones_images_url_externas/${item.imagen}`" alt="">
              </a>
            </div>



            <div class="social_botones_cuadro"
            v-for="iframe in item.iframes" v-html="iframe.iframe">
            </div>

            <el-button type="primary" icon="el-icon-delete">hola</el-button>
            <i class="el-icon-delete"></i>

              <div class="sub_secciones">
                  <el-tabs tab-position="top" style="height: auto;" >
                      <el-tab-pane :label="sub.titulo" v-for="sub in item.sub_secciones">
                        <br><h3>{{sub.titulo}}</h3><br>
                        <div class="sub_texto" v-for="texto in sub.textos">
                          <p v-html="texto.texto"> </p>
                        </div>
                        <div>{{sub.textos.texto}}</div>
                      </el-tab-pane>
                  </el-tabs>
              </div>

        </el-collapse-item>
      </el-collapse>

      <br><br><h2 v-if="datos.data[0].galeria[0]">Galeria</h2><br>
      <div class="galeria" v-if="datos.data[0].galeria[0]">
        <template>
          <el-carousel :interval="7000" type="card" height="200px" style="width:100%">
            <el-carousel-item v-for="foto in datos.data[0].galeria" :key="item">
              <img :src="`http://intranet.meta.gov.co/micrositio_galeria/${foto.imagen}`" alt="titulo" width="100%">
            </el-carousel-item>
          </el-carousel>
        </template>
      </div><br>

      <div class="contacto">
        <br><h2>Contacto</h2><br>
        <div class="contacto_telefono" v-if="datos.data[0].telefono">
          <p><b>Telefono:</b> {{datos.data[0].telefono}}</p>
        </div>

        <div class="contacto_telefono" v-if="datos.data[0].direccion">
          <p><b>Dirección:</b> {{datos.data[0].direccion}}</p>
        </div>

        <div class="contacto_telefono" v-if="datos.data[0].email">
          <p><b>Correo electronico:</b> {{datos.data[0].email}}</p>
        </div>


        <div class="contacto_redes" v-if="datos.data[0].facebook">
          <a :href="datos.data[0].facebook" target="_blank">
            <img src="../assets/facebook.svg">
          </a>
          <a :href="datos.data[0].twitter" target="_blank">
           <img src="../assets/twitter.svg" >
          </a>
        </div>
      </div>

    </div>

    <div class="lateral">

      <div class="social_botones_url_externa" v-for="boton in datos.data[0].url_externa">
        <a :href="boton.url" target="_blank">
          <img :src="`http://intranet.meta.gov.co/micrositio_img_urls/${boton.imagen}`" alt="">
        </a>
      </div>

      <div class="social_botones_cuadro" v-for="iframe in datos.data[0].iframes" v-html="iframe.iframe">
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
    // router.replace({$route.name: 'diferentes'});
    axios.get(`http://intranet.meta.gov.co/api/micrositio/informacion/${this.$route.params.id}`)
    .then( response => {
      this.datos = response.data;
    })
    .catch(e => {
     this.errors.push(e)
   })
  },
  watch:{
    "$route" (){
      axios.get(`http://intranet.meta.gov.co/api/micrositio/informacion/${this.$route.params.id}`)
      .then( response => {
        this.datos = response.data;
      })
      .catch(e => {
       this.errors.push(e)
     })
    }
  },
  data(){
    return{
      imagenBanner:'http://www.meta.gov.co/web/sites/default/files/img_micrositios/Prensa-01.png',
      tabPosition: 'left',
      activeNames: ['1'],
      datos: '',
    }
  },
  methods:{
    setTitle(value){
       if(value){
         value = value.toLowerCase();
         return value.replace(/^\w|\s\w/g, l => l.toUpperCase())
       }
     },
     videoYoutube(urlVideo){
       let index;
    			if(urlVideo.includes('?v=')){
    				index = urlVideo.indexOf('?v=')+3;
    			}else{
    				index = urlVideo.indexOf('.be/')+4;
    			}
        	let idYoutube = urlVideo.substring(index);
    			return idYoutube;
     }
  }
}
</script>

<style scoped>
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
.social_botones_google_maps{
  display: flex;
  min-width: 300px;
  height: 300px;
  margin-bottom: 15px
}
.social_botones_cuadro{
  display: flex;
  max-height: 600px;
  max-width: 400px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow:hidden;
  margin-bottom: 20px
}
.social_botones_cuadro iframe{
  height: 100% !important;
  width: 100% !im
}
.social_botones_url_externa{
  display: flex;
  height: auto;
  max-width: 400px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow:auto;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  padding: 5px
}
.social_botones_url_externa img{
  width: 100%
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
.contacto_telefono{
  margin-bottom: 4px
}
.contacto_redes {
  margin-top: 10px
}
.contacto_redes a{
  margin-right: 20px
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: white;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: white;
  }
  .el-carousel__container{
    height: 500px !important;
    display: flex;
    justify-content: center;
  }
  .secciones_docs{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    align-items: center;
    background-color: #f6f6f6;
    box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  }
  .secciones_docs_descarga{
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    width: 100%
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
