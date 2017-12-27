<template lang="html">
  <div class="principal">

    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/documentacion/convocatorias' }">Convocatorias</el-breadcrumb-item>
      <el-breadcrumb-item>Educación</el-breadcrumb-item>
    </el-breadcrumb>

    <BannerMicro :imagen="`https://intranet.meta.gov.co/micrositio_banners/${datos.data[0].banners[0].banner}`"
    v-if="datos.data[0].banners[0]">"></BannerMicro>

    <h2>Convocatorias</h2>
    <b>Educacion / Convocatoria No. 12443</b>


    <div class="contenido">

      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Fecha Publicación"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Titulo "
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Descripción">
        </el-table-column>
        <el-table-column
          label="">
          <template slot-scope="scope">
              <el-button size="medium" type="info" plain icon="el-icon-search">Ver detalles</el-button>
          </template>
        </el-table-column>
      </el-table>

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

<style lang="css">

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

</style>
