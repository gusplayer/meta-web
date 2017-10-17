<template>
  <div class="general">

      <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
      <el-breadcrumb-item>contacto</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="banner">
        <div class="banner_text">
          <h2>Canales de atención</h2><br>

        </div>
      </div>

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

<style scoped>
h2{
  font-size: 35px;
  font-weight: 400;
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
.general{
  max-width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white
}
.breadcrumb{
  display: flex;
  align-self: flex-start;
  margin-bottom: 15px;
}
.banner{
  display: flex;
  width: 100%;
  height: 300px;
  background-size: cover;
  background:url('https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?w=1240&h=auto&auto=compress&cs=tinysrgb');
  margin-bottom: 20px;
}
.banner_text{
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding: 15px;
  height: 80px;
  width: 100%;
  background:rgba(255,255,255,0.6)
}
.contenido{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}
.texto{
  display: flex;
  flex: 1;
  width: 49%;
  min-width: 400px;
  box-shadow: 0 0 10px 0 rgba(94, 92, 92, 0.32);
  padding: 18px;

}
.google_maps{
  display: flex;
  flex: 1;
  width: 49%;
  min-width: 400px;
  box-shadow: 0 0 10px 0 rgba(94, 92, 92, 0.32);
}
</style>
