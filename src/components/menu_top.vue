<template>
  <div id="menuTop">
    <div class="encabezado">
      <img src="../assets/logo.png">
      <img :src="escudo">
    </div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/">Inicio</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/gobierno">Gobierno</router-link></el-menu-item>
      <el-submenu index="3">
        <template slot="title">El Meta</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><router-link to="/transparencia">Transparencia </router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/prensa">Prensa</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="atencion">Atencion al ciudadano</router-link></el-menu-item>
    </el-menu>
    <banner></banner>
  </div>
</template>

<script>
  import banner from './banner.vue'
  export default {
    components: { banner },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        escudo: require('../assets/escudo_colombia.png')
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
#menuTop{
  top: 0;
  width: 100vh;
  justify-content: space-around;
}
.encabezado{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-menu-demo{
  display: flex;
  justify-content: space-around;
}
</style>
