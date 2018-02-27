<template lang="html">

<div class="principal">

<b>{{det.titulo}}</b><br />

<div class="submenu">
  <router-link :to="{path: '/documentacion/convocatorias'}">
    <el-button size="medium" type="info" plain icon="el-icon-back">Volver a Categorias</el-button>
  </router-link>
  <router-link :to="{path: `/documentacion/convocatorias/listado/${det.parent_id}`}">
    <span style="margin: 5px 7px -10px; font-size: 22px; font-weight: 200; color: #bfc1c3">/</span>
    <el-button size="medium" type="warning" plain icon="el-icon-back">Volver a Listado</el-button>
  </router-link>
</div>
<hr>

    <div class="contenido">

      <div class="convocatoria">

        <div class="convocatoria_texto">
         
            <div class="convocatoria_texto_titulo">
            <h1>{{det.titulo}}</h1>
            <span>Fecha: {{ det.created_at }}</span>
            </div>
          
          <br />
          <div class="convocatoria_texto_cotenido">
            <b>Descripción:</b>
            <p> {{ det.textos[0].texto }} ds ds d sf dfdf dlf sljkfsdlkfsdklf sdlkf sdfkjs djklaf dñgfjgñjsag jsdañgdañ</p>
          </div>
          <br>          

          <div class="secciones_docs" v-for="(archivo, index) in det.archivos" :key="index">
            <i class="el-icon-document"></i>
            <div class="secciones_docs_descarga">
              <p>{{archivo.titulo}}</p>
              <a :href="`https://intranet.meta.gov.co/secciones_archivos/${archivo.archivo}`" target="_blank">
              <el-button type="primary">Descarga</el-button>
              </a>
            </div>
          </div><br>

          <div class="social_botones_cuadro"
                v-for="(iframe,index) in det.iframes" v-html="iframe.iframe" :key="index">
          </div>

          <div class="social_botones_url_externa" v-for="(item, index) in det.urls" :key="index">
             <a :href="item.url" target="_blank">
              <img :src="`https://intranet.meta.gov.co/secciones_images_url_externas/${item.imagen}`" alt="">
            </a>
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
import BannerMicro from "./bannerMicro.vue";
import Breadcrumb from "./breadcrumb.vue";
import axios from "axios";

export default {
  components: {
    BannerMicro,
    Breadcrumb
  },
  name: "app",
  created() {
    //do something after creating vue instance
    axios
      .get("https://intranet.meta.gov.co/api/micrositio/informacion/47")
      .then(response => {
        this.detalles = response.data;
        this.detalles = this.detalles.data[0].secciones;
        this.det = this.detalles.map(a => {
          let finder = a.sub_secciones.filter(
            b => b.id == this.$route.params.id
          );
          return finder;
        });
        this.det = this.det.filter(a => a != "");
        this.det = this.det[0];
        this.det = this.det[0];
        // this.detalles = this.det[0]
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  data() {
    return {
      detalles: "",
      det: ""
    };
  }
};
</script>

<style lang="css" scoped>
.breadcrumb {
  display: flex;
  align-self: flex-start;
  margin-bottom: 15px;
  background-color: #fafafa;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
}
p {
  font-size: 10pt;
  font-weight: 400;
  color: #4a4a4a;
  letter-spacing: 0.2px;
}
h1,
h2,
h3,
b {
  color: #48576a;
}
.principal {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100%;
  padding: 12px;
}
.contenido {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%;
}
.submenu {
  width: 100%;
  display: flex;
  padding: 5px 8px;
}
.card {
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
  clear: both;
}
.card-col {
  display: flex;
  max-width: 380px;
  min-width: 250px;
  width: 100%;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
}
.card-contenedor-imagen {
  overflow: hidden;
  height: 170px;
}
.card-image {
  width: 100%;
  display: block;
}
.card-titulo {
  font-size: 11 pt;
}
.card-fecha {
  font-size: 13px;
  color: #999;
}
.convocatoria {
  display: flex;
  width: 100%;
  margin-top: 10px;
  box-shadow: 0 0 5px 0 rgba(94, 92, 92, 0.32);
  padding: 20px;
}
 .secciones_docs{
    display: flex;
    flex-direction: row;
    max-width: 600px;
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
    align-items: center;
    margin-left: 30px;
    width: 100%;
    padding: 10px
  }
</style>
