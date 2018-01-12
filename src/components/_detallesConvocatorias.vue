<template lang="html">

<div class="principal">

<b>Información detallada: Convocatoria No. 1232</b><br />

<div class="submenu">
  <router-link :to="{path: '/documentacion/convocatorias'}">
    <el-button size="medium" type="info" plain icon="el-icon-back">Volver a Categorias</el-button>
  </router-link>
  <router-link :to="{path: '/documentacion/convocatorias/listado/:id'}">
    <span style="margin: 5px 7px -10px; font-size: 22px; font-weight: 200; color: #bfc1c3">/</span>
    <el-button size="medium" type="warning" plain icon="el-icon-back">Volver a Listado</el-button>
  </router-link>
</div>
<hr>

    <div class="contenido">

      <div class="convocatoria">

        <div class="convocatoria_texto">
          <div class="convocatoria_texto_titulo">
            <h1>Convocatoria de Doctorados Nacionales 2017</h1>
          </div>
          <br />
          <div class="convocatoria_texto_cotenido">
            <b>Descripción:</b>
            <p>Apoyar la formación de investigadores colombianos en los programas doctorales incluidos en los bancos de elegibles definitivos de las Convocatorias No. 727 Doctorados Nacionales 2015 y No. 767 Doctorados Nacionales Jóvenes 2016, a través de la constitución de un banco de potenciales beneficiarios, resultado de la validación del interés por parte de los aspirantes no financiados en la convocatoria 757 de 2016.</p>
          </div>

        </div>
        <div class="convocatoria_documento">

        </div>
        <div class="convocatoria_video">

        </div>

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
  components: {
    BannerMicro,
    Breadcrumb
  },
  name: 'app',
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
      imagenBanner: 'https://intranet.meta.gov.co/imagen_banners/33-blob',
      datos: '',
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office'
      }]
    }
  },

}
</script>

<style lang="css" scoped>

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
h1, h2, h3, b{
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
.submenu{
  width: 100%;
  display: flex;
  padding:5px 8px ;
}
.card{
  display: flex;
  flex: 1;
  margin-bottom: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
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

.card-clearfix:before,
.card-clearfix:after {
      display: table;
      content: "";
  }

.card-clearfix:after {
      clear: both
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
.card-fecha{
  font-size: 13px;
  color: #999;
}
.convocatoria{
  display: flex;
  width: 100%;
  margin-top: 10px;
  box-shadow: 0 0 5px 0 rgba(94, 92, 92, 0.32);
  padding: 20px
}
.convocatoria_texto{

}
.convocatoria_texto_titulo{

}
.convocatoria_video{

}

</style>
