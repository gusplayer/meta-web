<template>
  <div class="general">

      <div class="banner">
        <bannerTop></bannerTop>
      </div>

      <div class="botones_banner">
          <a href="#" class="botones_banner_accion">
            <div><span>Acción comunal y participación ciudadana</span></div>
            <img src="../assets/business-person-silhouette-wearing-tie.png">
          </a>
          <a href="#" class="botones_banner_accion botones_banner_regalias">
            <div><span>Regalías Meta</span></div>
            <img src="../assets/bitmap.png">
          </a>
          <a href="#" class="botones_banner_accion botones_banner_calendario">
            <div><span>Calendario eventos</span></div>
            <img src="../assets/calendar.jpg">
          </a>
          <a href="#" class="botones_banner_accion botones_banner_liquidacion">
             <div><span>Liquidación impuesto vehiculos</span></div>
             <img src="../assets/impuestoscar.png">
          </a>
      </div>

      <div class="contenido">
        <div class="noticias">

          <div class="noticias_contenedor" v-for="noticia in noticias" :key="noticias">
                  <img v-if="noticia.imagenes[0]"
                  :src="`http://intranet.meta.gov.co/imagen_timeline/${noticia.imagenes[0].nombre_imagen}`">
                  <div>
                    <h2>{{noticia.titulo}}</h2>
                    <!-- <div :id="`setText${noticia.idTimeline}`" class="noticias_contenedor_p"> -->
                      <div v-html="rawHtml">
                        Message : {{ noticia.contenido }}
                      </div>
                   <!-- </div> -->
                    <button type="button" name="button">Ver más</button>
                  </div>
          </div>

          <div class="card" >
             <el-col :span="8" v-for="noticia in noticias" :key="noticias" class="card-col">
                <el-card :body-style="{ padding: '0px' }">
                  <img v-if="noticia.imagenes[0]" :src="noticia.imagenes[0].nombre_imagen" class="card-image">
                  <div style="padding: 14px;">
                    <span>{{noticia.titulo}}</span>
                    <div class="card-bottom card-clearfix">
                      <time class="time">{{noticia.fecha}}</time>
                      <el-button type="text" class="card-button">Ver más</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
          </div>

        </div>
        <div class="lateral">


          <h2>Información Servicios</h2>

          <div class="lateral_line"><p></p></div>

          <button type="button" name="button" class="lateral_line_boton">
            <img src="../assets/check.png" >
            <span>Transparencia</span>
          </button>
          <button type="button" name="button" class="lateral_line_boton">
            <img src="../assets/check.png">
            <span>Intranet</span>
          </button>
          <button type="button" name="button" class="lateral_line_boton">
            <img src="../assets/check.png" >
            <span>Regalias</span>
          </button>

          <div class="lateral_line"><p></p></div>

          <div class="lateral_cuadros">
            <img src="../assets/prensa-papa-2017-1.jpg">
          </div>

          <div class="lateral_cuadros">
            <img src="../assets/gobierno-sobre-ruedas-01.jpg">
          </div>

          <div class="lateral_cuadros">
            <img src="../assets/boton-1063.jpg">
          </div>

          <div class="lateral_cuadros">
            <img src="../assets/logo-ctpd-0-1.jpg">
          </div>

          <div class="lateral_line"><p></p></div>


          <iframe
          class="lateral_video"
          src="https://www.youtube.com/embed/8jtfXHadYIE"
          frameborder="0" allowfullscreen>
          </iframe>

          <div class="carrito">
          </div>

        </div>



      </div>

      <div class="social_botones">



        <div class="social_botones_cuadro">
          <div id="fb-root"></div>
          <div class="fb-page" data-href="https://www.facebook.com/GobMeta/"
            data-tabs="timeline" data-small-header="false" data-adapt-container-width="true"
            data-hide-cover="false" data-show-facepile="true" data-width="500" style="width:100%">
            <blockquote cite="https://www.facebook.com/GobMeta/" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/GobMeta/">Cargando Facebook...</a></blockquote>
          </div>
        </div>

        <div class="social_botones_cuadro">
          <a class="twitter-timeline" href="https://twitter.com/marcela_amayag">Cargando Twitter...</a>
        </div>

        <div class="social_botones_cuadro2">
          <h2>Suscribete</h2>
          <p>Dejanos tu correo electronico y recibe boletines de noticias</p>
          <el-input placeholder="Escribe tu correo electronico" v-model="input"></el-input>
          <el-button type="primary">Suscribete</el-button>
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

import bannerTop from './banner.vue'
import axios from 'axios';
export default {
  components: {bannerTop},
  created(){
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
    axios.get('http://intranet.meta.gov.co/timeline/web')
    .then( response => {
      this.noticias = response.data.timeline;
    })
    .catch(e => {
     this.errors.push(e)
   })
  },
  data(){
     return{
           input: '',
           noticias: [],
           errors:[]
           }
         },
  methods:{
    setcontenido(noticia){
      setTimeout(() => {
        document.getElementById(`setText${noticia.idTimeline}`).innerHTML = noticia.contenido;
      }, 100)
    }
  }
}
</script>

<style scoped>
.general{
  max-width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white
}
.menu{
  width: 100%;
  display: flex;
  background-color: white
}
.banner{
  width: 100%;
}
.botones_banner{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px
}
.botones_banner_accion{
  min-width: 199px;
  width: 100%;
  height: 128px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #9b9b9b;
  box-shadow: 0 1px 4px 0 rgba(118, 118, 118, 0.38);
  margin: 5px;
}
.botones_banner_accion div{
  padding: 20px;
	font-size: 16px;
	font-weight: 400;
	color: #ffffff;
}
.botones_banner_accion img{
  padding: 0px;
}
.botones_banner_regalias{
  background-color: #f5f5f5;
}
.botones_banner_regalias div{
  color: #393939;
}
.botones_banner_calendario{
  background-color: #3fbef6;
}
.botones_banner_liquidacion{
  background-color: #818A89
}

.contenido{
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.noticias{
  display: flex;
  flex-direction: column;
}
.noticias_contenedor{
  max-width: 755px;
  width: 100%;
	height: 220px;
  display: flex;
  flex-direction: row;
	background-color: #f6f6f6;
  margin-bottom: 20px;
  box-shadow: 0 1px 4px 0 rgba(118, 118, 118, 0.38);
}
.noticias_contenedor img{
  height: 220px;
  width: 300px;
}
.noticias_contenedor div{
  width: 460px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.noticias_contenedor  h2{
	font-size: 22px;
	color: #4f6983;
  font-weight: 300;
}
.noticias_contenedor_p p{
	font-size: 14px;
	line-height: 2.02;
	letter-spacing: 0.2px;
	color: #393939;
}
.noticias_contenedor button{
  	width: 110px;
  	height: 45px;
  	border: solid 1px #009d3d;
    background-color: white;
    margin-top: 20px;
    font-size: 14px;
	  font-weight: 500;
	  color: #393939;
    font-size: 12px;
  	font-weight: 500;
  	color: #128f2e;
}

.card{
  display: flex;
  display: none;
  margin-top: 10px;

}
.card-col{
  flex: 1;
  max-width: 300px;
  margin-bottom: 20px;

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

.card-image {
    height: 100%;
    width: auto;
    display: block;
  }

.card-clearfix:before,
.card-clearfix:after {
      display: table;
      content: "";
  }

.card-clearfix:after {
      clear: both
  }

.lateral{
  max-width: 384.1px;
  width: 100%;
	background-color: #f6f6f6;
	box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.lateral_video{
  width: 100%;
  height: 235px;
  margin-bottom: 10px;
}
.lateral h2{
  font-size: 22px;
  font-weight: 300;
	color: #4f6983;
  display: flex;
  align-self: flex-end;
  margin-bottom: 5px
}
.lateral_line {
	width: 100%;
	height: 1px;
	border: solid 1px rgba(155, 155, 155, 0.62);
  margin-bottom: 25px
}
.lateral_line_boton {
	width: 100%;
	height: 45px;
	background-color: #f1f1f1;
	border: solid 1px rgba(155, 155, 155, 0.96);
  margin-bottom: 15px;
  font-size: 14px;
	font-weight: 500;
	color: #393939;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 60px;
}
.lateral_line_boton img{
  margin-right: 75px;
  height: 20px
}
.lateral_cuadros {
	width: 100%;
  min-width: 40%;
	background-color: #ffffff;
	box-shadow: 0 2px 4px 0 #b7b5b7;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 15px
}
.social_botones{
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.social_botones_cuadro{
  display: flex;
  flex: 1;
  max-width: 32%;
  min-width: 300px;
  height: 500px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow:auto;
  margin-right: 0px
}
.social_botones_cuadro2{
  display: flex;
  height: 500px;
  max-width: 385px;
  min-width: 300px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px 0 rgba(154, 152, 152, 0.5);
  overflow:auto;
  padding: 90px 40px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.social_botones_cuadro2 h2{
  font-size: 22px;
	color: #4f6983;
  font-weight: 300;
  margin-bottom: 60px
}
.social_botones_cuadro2 p{
  color: #393939;
  text-align: center
}
.el-button--primary{
  width: 100%
}
@media screen and (max-width: 1100px) {
  .botones_banner{
    flex-wrap: wrap;
  }
  .botones_banner_accion{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 90px
  }
  .botones_banner_accion img{
    display: none;
  }
  .botones_banner_accion div{
    padding: 0px;
    text-align: center;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-bottom: 30px;
    justify-content: space-between;
  }
  .lateral{
    flex:1;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
  }
  .lateral_line_boton {
  	max-width: 49%;
    min-width: 360px;
  }
  .lateral_cuadros {
  	max-width: 49%;
    min-width: 360px;
  }
  .social_botones_cuadro2{
    flex: 1;
    max-width: 100%;
    margin-top: 0px;
    display: none;
  }
  .social_botones_cuadro{
    flex: 1;
    max-width: 48%;
    margin-bottom: 15px;
  }
  .noticias{
    width: 100%;
    max-width: 1000px
  }
  .noticias_contenedor{
    width: 100%;
    max-width: 1000px;
    display: none
  }
  .noticias_contenedor img{
    height: 220px;
    width: 300px;
  }

}
@media screen and (max-width: 500px) {
  .botones_banner_accion{
    justify-content: space-between;
    padding: 20px;
    height: 60px
  }
  .botones_banner_accion img{
    display: inline;
    max-width: 40px;
    max-height: 40px;
  }
  .botones_banner_accion div{
    display: inline;
    text-align: left;
    font-size: 14px
  }
  .lateral_line_boton{
    max-width: 100%;
    min-width: 0px;
  }
  .lateral_line_boton img{
    margin-right: 15px
  }
  .lateral_cuadros{
    max-width: 100%;
    min-width: 0px;

  }
  .social_botones_cuadro{
    max-width: 100%;
    margin-right: 0px;
    min-width: 250px;
  }
  .social_botones_cuadro2{
    height: 300px;
    padding: 30px 40px;
  }
  .noticias_contenedor img{
    max-height: auto;
    max-width: 100%;
  }
  .noticias_contenedor{
    display: none;
  }
  .noticias_card{
    display: run-in;
  }
  .card-col{
    width: 100%;
    max-width: 500px
  }
}
</style>
