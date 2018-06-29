<template>
  <div id="menuTop">

    <div class="encabezado_menu">
      <a href="https://intranet.meta.gov.co" target="_blank"><span>Intranet </span></a>
      <a href="../../static/manual_intranet.pdf" target="_blank"><span>Manual de ayuda</span></a>

    </div>

    

    <div class="encabezado_icons">
      <Buscador/>
      <!-- <span><b>A</b></span>
      <span><b>A</b>-</span>
      <span><b>A</b>+</span> -->
      
      <a href="https://www.facebook.com/GobMeta/" target="_blank"><img src="../assets/facebook.svg" ></a>
      <a href="https://twitter.com/marcela_amayag" target="_blank"><img src="../assets/twitter.svg"></a>
    </div>

  </div>
</template>

<script>
import Buscador from "./buscador.vue";
export default {
  components: {
    Buscador
  },
  name: "app"
};
</script>

<style scoped>
#menuTop {
  max-width: 1300px;
  width: 95%;
  height: 70px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.encabezado_menu {
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.encabezado_menu span {
  font-size: 14px;
  font-weight: 500;
  color: rgba(74, 74, 74, 0.87);
}
.encabezado_icons {
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.encabezado_icons img {
  height: 16px;
}
.encabezado_icons span {
  font-size: 16px;
  font-weight: 500;
  color: rgba(74, 74, 74, 0.87);
}
@media screen and (max-width: 600px) {
  #menuTop {
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .encabezado_menu {
    display: none;
  }
}
</style>
