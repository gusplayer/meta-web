<template>
  <div class="principal">
  <Breadcrumb></Breadcrumb>
  <BannerMicro :imagen="imagenBanner"></BannerMicro>

  <div class="contenido">
    <div class="texto">
      <p>
        <b>Marcela Amaya García.</b> Villavicencio, 8 de noviembre de 1968<br><br>

        Nuestra Gobernadora, Marcela Amaya García,  es oriunda de Villavicencio, capital de nuestro Departamento, es la mayor de tres hermanos, casada con el abogado Jorge Carmelo Pérez Alvarado, con quién tiene tres hijas; Daniela, Pamela e Isabela.<br><br>

        Su profesión es administradora de empresas de la universidad del Meta, y especialista en Gestión de Entidades Territoriales de la Universidad Externado de Colombia.<br><br>

        Marcela Amaya Garcia, siempre se visibilizó en la política de nuestro departamento, es el corazón de su familia y ahora la líder de los Metenses. Su Plan de Desarrollo - El Meta Tierra de Oportunidades con Inclusión, Reconciliación y Equidad; tiene como objetivo general la recuperación de la vocación agrícola y pecuaria, con un sentido turístico de preservación y en la búsqueda de posicionar al departamento en el renglón mas importante de la economía, pues su sueño es generar progreso, bienestar y calidad de vida a todos y todas las personas.<br><br>

        Fue elegida Diputada del Meta para el periodo 2008-2011, con la más alta votación, y única mujer con asiento en la Asamblea Departamental, estamento en donde se reflejó su compromiso con el Departamento del  Meta, reconocida por su carisma, virtud que le permitió identificarse como gran lideresa en dicho periodo; su paso por la Asamblea  también le permitió trabajar en favor de la infancia, el bienestar de los adultos mayores, la salud sexual y reproductiva y por la educación.  Así, promovió una ordenanza para la prevención del cáncer de cuello uterino, y  lideró la modificación/ampliación de la cobertura del Fondo para la Educación Superior, ejerciendo un proceso de arduos debates de control político  y visibilidad política y social.<br><br>

        Posteriormente  elegida Representante a la  Cámara por el Departamento del Meta para el periodo legislativo 2010-2014,  en dicho momento se caracterizó por representar a la mujer llanera, con templanza, empuje, trabajo y amor por su tierra; siendo autora y coautora de trece proyectos de Ley; y fue elegida presidenta de la Comisión Quinta Constitucional permanente, desde donde lideró temas ambientales, agrícolas, pecuarios, pesqueros, mineros, energéticos y de hidrocarburos. Desde esta comisión luchó para que las regalías generadas en el Meta, se quedaran en la región defendiendo la descentralización, y apoyó la Ley de Víctimas.<br><br>

        En todo su quehacer político se ha concentrado en  defender los intereses de las personas más afectadas por la violencia  y actualmente es una abanderada de la equidad de genero en la región, su elección como primera  mujer Gobernadora por voto popular en el Departamento para el periodo 2016 – 2019, es un gran paso para la democracia de la región, para los imaginarios sociales y para el avance de los derechos sobre la equidad, pues su papel ha sido notorio, con carácter y corazón, hoy se le reconoce no sólo como una gran lideresa sino como una mujer con enorme sentido social.
      </p>
    </div>
    <div class="lateral">

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

export default {
  components: {BannerMicro, Breadcrumb},
  name: 'app',
  data(){
    return{
      imagenBanner:'https://www.meta.gov.co/web/sites/default/files/img_micrositios/Perfil_Gober-01.png'
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
  margin-top: 10px
}
.texto{
  display: flex;
  flex: 1;
  min-width: 400px;
  box-shadow: 0 0 8px 0 rgba(94, 92, 92, 0.20);
  padding: 28px;
  margin-right: 20px;
  height: 100%;;
  text-align: justify;
}
.lateral{
  display: flex;
  min-width: 400px;
  flex-direction: column;
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
