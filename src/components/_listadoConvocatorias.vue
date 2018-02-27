<template lang="html">
  <div class="principal">

    <b>{{listado[0].titulo}}</b><br />

    <div class="submenu">
      <router-link :to="{path: '/documentacion/convocatorias'}">
        <el-button size="medium" type="warning" plain icon="el-icon-back">Volver a Categorias</el-button>
      </router-link>
    </div>


    <div class="contenido" >
      <el-table
        type="index"
        :data="listado"
        border
        key
        index
        style="width: 100%"
        v-loading=load>
        <el-table-column
          prop="created_at"
          label="Fecha Publicación"
          width="180">
        </el-table-column>
        <el-table-column
          prop="titulo"
          label="Titulo Convocatoria"
          width="180">
        </el-table-column>
        <el-table-column
          prop="textos[0].texto"
          label="Descripción">
        </el-table-column>
        <el-table-column
          label="">
          <template slot-scope="scope">
            <router-link :to="{path: `/documentacion/convocatorias/detalles/${scope.row.id}`}">
              <el-button size="medium" type="success" plain icon="el-icon-search">Ver detalles</el-button>
            </router-link>
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
        this.listado = response.data
        this.listado = this.listado.data[0].secciones
        this.listado = this.listado.filter( a => a.id == this.$route.params.id )
        this.listado = this.listado[0].sub_secciones
        this.listado = this.listado.reverse()
        
      })
      .catch(e => {
        this.errors.push(e)
      })
      this.load = false
  },
  data() {
    return {
      listado: '',
      load: true
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

</style>
