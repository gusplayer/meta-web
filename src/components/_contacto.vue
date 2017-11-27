<template>
  <div class="principal">

      <Breadcrumb></Breadcrumb>
      <BannerMicro :texto="texto" :imagen="imagenBanner"></BannerMicro>

    <div class="contenido">
      <div class="texto">
        <p>
        Los medios disponibles de atención y participación que tienen los ciudadanos para presentar Peticiones, Quejas , Reclamos, Sugerencias y Denuncias de Actos de Corrupción en la Gobernación del Meta, son:<br><br>
        <b>ATENCIÓN PERSONALIZADA:</b> La Oficina de Atención al Ciudadano, atiende a  los ciudadanos en las instalaciones del Nuevo Edificio de la Gobernación del Meta, ubicado en la Carrera 33 No.38 – 45, primer piso. Teléfono # 6 818500, Extensión 1301 - 1302 - 1303 - 1304, 1305 y 1306.
        <br><br>

        <b>HORARIO DE ATENCIÓN AL PÚBLICO:</b> De lunes a viernes en días hábiles laborales de 8:00 a.m. a 12:00 m. y de 2:00 p.m. a 6:00 p.m.
        <br><br>

        <b>HORARIO DE ATENCIÓN PARA RADICACIÓN DE CORRESPONDENCIA:</b> De lunes a viernes en días hábiles laborales de 8:00 a.m. a 11:30 a.m. y de 2:00 p.m. a 5:30 p.m.
        <br><br>

        <b>LINEA NACIONAL GRATUITA DE ATENCIÓN:</b> 018000129202
        <br><br>

        <b>LINEA DE ATENCIÓN PARA DENUNCIAS DE ACTOS DE CORRUPCIÓN:</b> # 6 8185003
        <br><br>

        <b>BUZÓN DE PQRS:</b> Ubicados en las instalaciones del Edificio de la Gobernación del Meta:en el Área de Atención al Ciudadano – Piso 1 y en el Mezzanine.
        <br><br>

        <b>PORTAL WEB INSTITUCIONAL DE LA GOBERNACIÓN DEL META:</b> www.meta.gov.co
        <br><br>

        <b>CORREO ELECTRÓNICO INSTITUCIONAL DE LA OFICINA DE ATENCIÓN AL CIUDADANO:</b> oficinaatencionalciudadano@meta.gov.co
        </p>
      </div>

      <div class="google_maps">
        <iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpSytf-8tPo4RNiqM54NzV0M&key=AIzaSyBocvLGZd1i7uxy95idGFnPq1FJsrGFrWo" allowfullscreen></iframe>
      </div>
    </div>

  </div>

</template>

<script>
import BannerMicro from './bannerMicro.vue'
import Breadcrumb from './breadcrumb.vue'

export default {
  components: {BannerMicro, Breadcrumb},
  name: 'app',
  data(){
    return{
      texto:'Medios de Contacto',
      imagenBanner:'https://www.meta.gov.co/web/sites/default/files/adjuntos/ocad/Banner_Planeacion.jpg'
    }
  }
}
</script>

<style scoped>
h2{
  font-size: 30px;
  font-weight: 600;
  color: #37474F;
}
p{
  font-size: 10pt;
  font-weight: 400;
  color: #4a4a4a;
  letter-spacing: 0.2px;
}
h3{
  font-size: 16px;
  font-weight: 500;
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
  justify-content: space-between;
  flex-wrap: wrap;

}
.texto{
  display: flex;
  flex: 1;
  min-width: 400px;
  box-shadow: 0 0 10px 0 rgba(94, 92, 92, 0.22);
  padding: 28px;
  margin-right: 20px
}
.google_maps{
  display: flex;
  min-width: 400px;
}

@media  screen and (max-width: 900px){

.texto{
  margin-right: 0px;
  margin-bottom: 15px;
}
.google_maps{
  flex: 1;
  height: 400px;
}
.banner{
  height: 280px;
}

}
@media  screen and (max-width: 490px){
  .banner_text{
    padding: 10px;
    height: 40px;
    width: 100%;
    background:rgba(255,255,255,0.7)
  }
  .contenido{
    flex-direction: column;
  }
  .texto{
    width: 100%;
    min-width: 100px;
    box-sizing: border-box;
  }
  .google_maps{
    min-width: 100px;
    width: 100%
  }
  h2{
    font-size: 18px;
    font-weight: 500;
    color: #37474F;
  }


}

</style>
