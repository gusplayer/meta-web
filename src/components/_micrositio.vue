<template>
  <div class="principal" v-loading="loading">
    <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
    <el-breadcrumb-item>{{datos.data[0].titulo}}</el-breadcrumb-item>
    </el-breadcrumb>
  <BannerMicro :imagen="`https://intranet.meta.gov.co/micrositio_banners/${datos.data[0].banners[0].banner}`"
  v-if="datos.data[0].banners[0]">
  </BannerMicro>

  <!-- <el-carousel :interval="9000" arrow="always" indicator-position="outside" >
    <el-carousel-item v-for="item in datos.data[0].banners[0].banner[0]" :key="item">
      <img :src="`https://intranet.meta.gov.co/imagen_banners/${item.imagen}`">
    </el-carousel-item>
  </el-carousel> -->

  <div class="contenido">
    <div class="texto">
      <div class="info_micrositio">
        <h2>{{datos.data[0].titulo}}</h2>
        <br><br>
        <p v-html="datos.data[0].texto"></p>
        <br><br>
      </div>

      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item :title="setTitle(item.titulo)" :name="item.id" v-for="(item,index) in datos.data[0].secciones" :key="index">

            <div class="sub_texto" v-for="(texto_seccion,index) in item.textos" :key="index">
              <p v-html="texto_seccion.texto"> </p>
            </div><br>

            <div class="secciones_docs" v-for="(archivo,index) in item.archivos" :key="index">
              <i class="el-icon-document"></i>
              <div class="secciones_docs_descarga">
                <p>{{archivo.titulo}}</p>
                <a :href="`https://intranet.meta.gov.co/secciones_archivos/${archivo.archivo}`" target="_blank">
                <el-button type="primary">Descarga</el-button>
                </a>
              </div>
            </div>

            <iframe v-for="(video,index) in item.videos" :key="index"
            width="640" height="360"
            :src="`https://www.youtube.com/embed/${videoYoutube(video.video)}`"
            frameborder="0" gesture="media"
            allowfullscreen>
            </iframe>

            <div class="galeria" v-if="item.imagenes[0]">
              <br><br>
              <template>
                <el-carousel :interval="12000" style="width:100%; max-width:700px,">
                  <el-carousel-item v-for="(foto,index) in item.imagenes" :key="index">
                    <img :src="`https://intranet.meta.gov.co/secciones_imagenes/${foto.imagen}`"
                          width="auto" style="max-height:100%">
                  </el-carousel-item>
                </el-carousel>
              </template>
            </div><br>

            <div class="social_btn" v-if="item.urls[0]">
              <div class="social_botones_url_externa" v-for="(item,index) in item.urls" :key="index" >
                <a :href="item.url" target="_blank">
                  <img :src="`https://intranet.meta.gov.co/secciones_images_url_externas/${item.imagen}`" alt="">
                </a>
              </div>
            </div>

            <div class="iframe_cuadro"
            v-for="(iframe,index) in item.iframes" v-html="iframe.iframe" :key="index">
            </div>

              <div class="sub_secciones" v-if="item.sub_secciones[0]">
                  <el-tabs type="border-card" tab-position="top" style="height: auto;" >
                      <el-tab-pane :label="sub.titulo" v-for="(sub,index) in item.sub_secciones" :key="index" class="reverse" >



                        <div class="sub_texto" v-for="(texto,index) in sub.textos" :key="index">
                          <p v-html="texto.texto"> </p>
                        </div>

                        <iframe v-for="(video,index) in sub.videos" :key="index"
                        width="640" height="360"
                        :src="`https://www.youtube.com/embed/${videoYoutube(video.video)}`"
                        frameborder="0" gesture="media"
                        allowfullscreen>
                        </iframe>

                        <div class="secciones_docs" v-for="(archivo, index) in sub.archivos" :key="index">
                          <i class="el-icon-document"></i>
                          <div class="secciones_docs_descarga">
                            <p>{{archivo.titulo}}</p>
                            <a :href="`https://intranet.meta.gov.co/secciones_archivos/${archivo.archivo}`" target="_blank">
                            <el-button type="primary">Descarga</el-button>
                            </a>
                          </div>
                        </div>

                        <div class="galeria" v-if="sub.imagenes[0]">
                          <br><br><template>
                            <el-carousel :interval="8000" style="width:100%; max-width:700px,">
                              <el-carousel-item v-for="(foto, index) in sub.imagenes" :key="index">
                                <img :src="`https://intranet.meta.gov.co/secciones_imagenes/${foto.imagen}`"
                                      width="auto" style="max-height:100%">
                              </el-carousel-item>
                            </el-carousel>
                          </template>
                        </div><br>

                        <div class="iframe_cuadro"
                        v-for="(iframe,index) in sub.iframes" v-html="iframe.iframe" :key="index">
                        </div>

                        <div class="social_btn" v-if="sub.urls[0]">
                            <div class="social_botones_url_externa" v-for="(item,index) in sub.urls" :key="index">
                              <a :href="item.url" target="_blank">
                                <img :src="`https://intranet.meta.gov.co/secciones_images_url_externas/${item.imagen}`" alt="">
                              </a>
                            </div>
                        </div>

                        <div class="sub_sub_secciones" v-if="sub.sub_secciones[0]">
                            <el-tabs type="border-card" tab-position="top" style="height: auto;" >
                                <el-tab-pane :label="subsub.titulo" v-for="(subsub,index) in sub.sub_secciones" class="reverse" :key="index">



                                  <div class="sub_texto"  v-for="(texto, index) in subsub.textos" :key="index">
                                    <p v-html="texto.texto"> </p>
                                  </div>

                                  <iframe v-for="(video,index) in subsub.videos" :key="index"
                                  width="640" height="360"
                                  :src="`https://www.youtube.com/embed/${videoYoutube(video.video)}`"
                                  frameborder="0" gesture="media"
                                  allowfullscreen>
                                  </iframe>

                                  <div class="secciones_docs" v-for="(archivo, index) in subsub.archivos" :key="index">
                                    <i class="el-icon-document"></i>
                                    <div class="secciones_docs_descarga">
                                      <p>{{archivo.titulo}}</p>
                                      <a :href="`https://intranet.meta.gov.co/secciones_archivos/${archivo.archivo}`" target="_blank">
                                      <el-button type="primary">Descarga</el-button>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="galeria" v-if="subsub.imagenes[0]">
                                    <br><br><template>
                                      <el-carousel :interval="8000" style="width:100%; max-width:700px,">
                                        <el-carousel-item v-for="(foto,index) in subsub.imagenes" :key="index">
                                          <img :src="`https://intranet.meta.gov.co/secciones_imagenes/${foto.imagen}`"
                                                width="auto" style="max-height:100%">
                                        </el-carousel-item>
                                      </el-carousel>
                                    </template>
                                  </div><br>

                                  <div class="social_botones_cuadro"
                                  v-for="(iframe,index) in subsub.iframes" v-html="iframe.iframe" :key="index">
                                  </div>

                                  <div class="social_botones_url_externa" v-for="(item, index) in subsub.urls" :key="index">
                                    <a :href="item.url" target="_blank">
                                      <img :src="`https://intranet.meta.gov.co/secciones_images_url_externas/${item.imagen}`" alt="">
                                    </a>
                                  </div>


                                        <div class="sub_sub_secciones">
                                            <el-tabs tab-position="top" style="height: auto;" >
                                                <el-tab-pane :label="subsub.titulo" v-for="(subsub,index) in subsub.sub_secciones" class="reverse" :key="index">



                                                  <div class="sub_texto" v-for="(texto,index) in subsub.textos" :key="index">
                                                    <p v-html="texto.texto"> </p>
                                                  </div>

                                                  <iframe v-for="(video,index) in subsub.videos" :key="index"
                                                  width="640" height="360"
                                                  :src="`https://www.youtube.com/embed/${videoYoutube(video.video)}`"
                                                  frameborder="0" gesture="media"
                                                  allowfullscreen>
                                                  </iframe>

                                                  <div class="secciones_docs" v-for="(archivo,index) in subsub.archivos" :key="index">
                                                    <i class="el-icon-document"></i>
                                                    <div class="secciones_docs_descarga">
                                                      <p>{{archivo.titulo}}</p>
                                                      <a :href="`https://intranet.meta.gov.co/secciones_archivos/${archivo.archivo}`" target="_blank">
                                                      <el-button type="primary">Descarga</el-button>
                                                      </a>
                                                    </div>
                                                  </div>

                                                  <div class="galeria" v-if="subsub.imagenes[0]">
                                                    <br><br><template>
                                                      <el-carousel :interval="8000" style="width:100%; max-width:700px,">
                                                        <el-carousel-item v-for="(foto,index) in subsub.imagenes" :key="index">
                                                          <img :src="`https://intranet.meta.gov.co/secciones_imagenes/${foto.imagen}`"
                                                                width="auto" style="max-height:100%">
                                                        </el-carousel-item>
                                                      </el-carousel>
                                                    </template>
                                                  </div><br>

                                                  <div class="social_botones_cuadro"
                                                  v-for="(iframe,index) in subsub.iframes" v-html="iframe.iframe" :key="index">
                                                  </div>

                                                  <div class="social_botones_url_externa" v-for="(item,index) in subsub.urls" :key="index">
                                                    <a :href="item.url" target="_blank">
                                                      <img :src="`https://intranet.meta.gov.co/secciones_images_url_externas/${item.imagen}`" alt="">
                                                    </a>
                                                  </div>

                                                </el-tab-pane>
                                            </el-tabs>
                                        </div>


                                </el-tab-pane>
                            </el-tabs>
                        </div>

                      </el-tab-pane>
                  </el-tabs>
              </div>

        </el-collapse-item>
      </el-collapse>

      <br><br><h2 v-if="datos.data[0].galeria[0]">Galeria</h2><br>
      <div class="galeria" v-if="datos.data[0].galeria[0]">
        <template>
          <el-carousel :interval="7000" type="card" height="200px" style="width:100%">
            <el-carousel-item v-for="(foto,index) in datos.data[0].galeria" :key="index">
              <img :src="`https://intranet.meta.gov.co/micrositio_galeria/${foto.imagen}`" alt="titulo" width="100%">
            </el-carousel-item>
          </el-carousel>
        </template>
      </div><br>

      <div class="contacto">
        <!-- <br><h2>Contacto</h2><br> -->
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

    <div class="lateral" v-if="datos.data[0].menu_lateral == 1">
      <div class="social_botones_url_externa" v-for="(boton,index) in datos.data[0].url_externa" :key="index">
        <a :href="boton.url" target="_blank">
          <img :src="`https://intranet.meta.gov.co/micrositio_img_urls/${boton.imagen}`" alt="">
        </a>
      </div>

      <div class="social_botones_cuadro" v-for="(iframe,index) in datos.data[0].iframes" :key="index" v-html="iframe.iframe">
      </div>
    </div>

  </div>
</div>
</template>

<script>



import BannerMicro from './bannerMicro.vue'
import Breadcrumb from './breadcrumb.vue'
import axios from 'axios';

export default {
  components: {BannerMicro, Breadcrumb},
  name: 'app',
  created(){
    axios.get(`https://intranet.meta.gov.co/api/micrositio/informacion/${this.$route.params.id}`)
    .then( response => {
      this.datos = response.data;
      if(this.datos.data[0].secciones[0].secciones[0].id)
      {
        this.activeNames = this.datos.data[0].secciones[0].id
      }
        if(this.datos.data[0].url_redireccion == null)
        {
          setTimeout( (()=>this.loading = false), 3000)
          
        }
        else {  window.location = this.datos.data[0].url_redireccion  }
    })
 
  },
  watch:{
    "$route" (){
      axios.get(`https://intranet.meta.gov.co/api/micrositio/informacion/${this.$route.params.id}`)
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
      loading: true,
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
     },
  },
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
.iframe_cuadro{
  width: 100%;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow:hidden;
  margin-bottom: 20px
}

.iframe_cuadro p iframe{
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow:hidden;
  margin-bottom: 100px
}

.social_botones_cuadro iframe{
  height: 100% !important;
  width: 100% !important
}
.social_btn{
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.social_botones_url_externa{
  display: flex;
  height: auto;
  max-width: 400px;
  width: auto;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  box-shadow: 0 1px 1px 0 rgba(154, 152, 152, 0.5);
  overflow:auto;
  justify-content: center;
  align-items: center;
  padding: 5px 10px

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
  .reverse{
    display: flex;
    flex-direction: column-reverse;
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
