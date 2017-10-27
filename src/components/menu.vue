<template>
  <div id="menuTop">
    <div class="logo">
      <img class="logo_meta" src="../assets/logo.png" />
      <img class="logo_colombia" src="../assets/colombia.png" />
    </div>

    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">

      <router-link to="/">
        <el-menu-item index="1">Inicio</el-menu-item>
      </router-link>

      <el-submenu index="2">
        <template slot="title">
          Nuestra entidad
        </template>

        <router-link to="/entidad/gobernadora">
          <el-menu-item index="2-1">Nuestra Gobernadora</el-menu-item>
        </router-link>

        <router-link to="/entidad/gobernadora">
          <el-menu-item index="2-2">Gabinete de Gobierno</el-menu-item>
        </router-link>

        <router-link to="/entidad/gobernadora">
          <el-menu-item index="2-3">Gobernación</el-menu-item>
        </router-link>

        <el-menu-item index="2-4">
          <router-link to="/contacto">Secretarías</router-link>
        </el-menu-item>
        <el-menu-item index="2-5">
          <router-link to="/contacto">Impuestos</router-link>
        </el-menu-item>
        <el-menu-item index="2-6">
          <router-link to="/entidad/transparencia">Transparencia</router-link>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">El Meta</template>
        <el-menu-item index="3-1">Nuestro departamento</el-menu-item>
        <el-menu-item index="3-3">Indicadores</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">Documentación</template>

        <router-link to="/documentacion/documentos">
          <el-menu-item index="4-1">Centro de Documentación</el-menu-item>
        </router-link>

        <router-link to="/documentacion/calidad">
          <el-menu-item index="4-2">Gestión de Calidad</el-menu-item>
        </router-link>

        <router-link to="/documentacion/convocatorias">
          <el-menu-item index="4-3">Convocatorias</el-menu-item>
          </router-link>
      </el-submenu>


      <el-submenu index="5">
        <template slot="title">Prensa</template>
        <router-link to="/prensa">
         <el-menu-item index="5-1">Noticias Gobernación</el-menu-item>
        </router-link>
        <a href="https://www.youtube.com/user/GobMeta/videos" target="_blank">
         <el-menu-item index="5-2">Canal de videos</el-menu-item>
        </a>
        <router-link to="/prensa">
         <el-menu-item index="5-3">Galeria de Audios</el-menu-item>
        </router-link>

      </el-submenu>

      <el-submenu index="6">
        <template slot="title">Contáctanos</template>

        <router-link to="/contacto">
        <el-menu-item index="6-2">Medios de Contacto</el-menu-item>
        </router-link>

        <el-menu-item index="6-1">
          <router-link to="/atencion">Atención al ciudadano</router-link>
        </el-menu-item>

      </el-submenu>

    </el-menu>


    <!-- <a href="javascript:void(0);" class="icon" v-on:click="transition = !transition">&#9776;</a> -->

<div>

    <transition name="el-zoom-in-top">
        <div v-show="transition" class="menuresponsive">

          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-show="transition"  >
            <el-menu-item index="1">
              <router-link to="/">Inicio</router-link>
            </el-menu-item>

                <el-submenu index="2" >
                  <template slot="title"></i>Nuestra entidad</template>
                  <router-link to="/contacto">
                    <el-menu-item index="2-1">
                    Nuestra Gobernadora
                    </el-menu-item>
                  </router-link>
                </el-submenu>

                <el-submenu index="3" >
                  <template slot="title"></i>El Meta</template>
                  <router-link to="/contacto">
                    <el-menu-item index="2-1">
                    Nuestra Gobernadora
                    </el-menu-item>
                  </router-link>
                </el-submenu>

                <el-menu-item index="4">Documentación</el-menu-item>
                <el-menu-item index="5">Prensa</el-menu-item>

                <el-submenu index="6">
                  <template slot="title"></i>Contáctanos</template>
                  <router-link to="/contacto">
                    <el-menu-item index="2-1">
                     Atención al ciudadano
                    </el-menu-item>
                  </router-link>
                  <router-link to="/contacto">
                    <el-menu-item index="2-1">
                     Contacto
                    </el-menu-item>
                  </router-link>
                </el-submenu>

            </el-menu>
        </div>
    </transition>

</div>


<!-- <transition name="el-fade-in-linear">
<div class="fondo_transition" v-show="transition"></div>
</transition> -->

<transition name="fade">
<el-button class="icon2" @click="transition = !transition">&#9776; Menu</el-button>
</transition>

<img class="search_icon" src="../assets/search.png" height="20px"/>

</div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        transition: false
      };
    },
    watch:{
      '$route' (to, from){
        this.transition = false;
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

    }
}

</script>

<style scoped>
#menuTop{
  width: 100%;
  height: 80px;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo{
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  margin-left: 10px;
}
.logo_meta{
  height: 72px;
}
.logo_colombia{
  height: 66px;
}
.el-menu-demo{
  width: 800px;
  display: flex;
  justify-content: space-around;
}
.el-menu{
  background-color: white;
}
.topnav {
    display: none;
}
.icon {
    display: none;

}
.icon2 {
    display: none;

}
.menuresponsive {
    display: none;

}

@media screen and (max-width: 1000px) {
  #menuTop{
    display: flex;
    justify-content: space-between;
  }
  .search_icon{
    display: none;
  }
  .topnav {
      display: flex;
  }
  .icon {
      display: flex;
      margin-right: 10px;
  }
  .icon2 {
      display: flex;
      z-index: 20;
  }
  a.icon {
    float: right;
    display: block;
    font-size: 28px;
    color: #008E3A;
  }
  .menuresponsive{
    z-index: 50;
    display: flex;
    margin-top: 50px;
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: center;
    padding: 10px
  }
  .el-menu-vertical-demo{
    width: 500px !important;
  }

  .el-menu-demo{
    display: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .10s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {

  .logo_meta{
    height: 47px;
    margin-right: 9px;
  }
  .logo_colombia{
    height: 40px;
  }
}
</style>
