<template>
  <div id="menuTop">

    <div class="encabezado_menu">
      <router-link to="/ayuda"><span>Ayuda</span></router-link>
      <router-link to="/sitemap"><span>Mapa del sitio</span></router-link>
      <span>English</span>
      <span>Contraste</span>
    </div>

    <div class="encabezado_icons">
      <span><b>A</b></span>
      <span><b>A</b>-</span>
      <span><b>A</b>+</span>
      <a href="https://www.facebook.com/GobMeta/" target="_blank"><img src="../assets/facebook.svg" ></a>
      <a href="https://twitter.com/marcela_amayag" target="_blank"><img src="../assets/twitter.svg"></a>
    </div>

  </div>
</template>

<script>

</script>

<style scoped>
#menuTop{
  max-width: 1300px;
  width: 95%;
  height: 70px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.encabezado_menu{
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.encabezado_menu span {
	font-size: 14px;
	font-weight: 500;
	color: rgba(74, 74, 74, 0.87);
}
.encabezado_icons{
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.encabezado_icons img {
	height:  16px;
}
.encabezado_icons span{
  font-size: 16px;
  font-weight: 500;
  color: rgba(74, 74, 74, 0.87);
}
@media screen and (max-width: 600px) {
  #menuTop{
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
  .encabezado_menu{
    display: none
  }
}
</style>
