<template>
  <div id="menuTop">
    <div class="logo">
      <img src="../assets/logo.png" height="72px"/>
      <img src="../assets/colombia.png" height="66px"/>
    </div>

    <el-menu :default-active="activeIndex2" class="el-menu-demo topnav" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/">Inicio</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/gobierno">Gobierno</router-link></el-menu-item>
      <el-submenu index="3">
        <template slot="title">El Meta</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><router-link to="/transparencia">Documentación </router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/prensa">Prensa</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="atencion">Atencion al ciudadano</router-link></el-menu-item>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
    </el-menu>

    <img src="../assets/search.png" height="20px"/>

  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
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
.el-menu-demo{
  width: 800px;
  display: flex;
  justify-content: space-around;
}
.el-menu{
  background-color: white
}
/* Add a black background color to the top navigation */
.topnav {
    overflow: hidden;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
    display: none;
}
/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
