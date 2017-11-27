<template>
<div>
  <div id="fb-root"></div>
  <div class="general">
    <PopUp></PopUp>
    <menu-top ></menu-top>

    <div class="contenedor">

      <div class="menu">
        <menuPrincipal></menuPrincipal>
      </div>

      <router-view></router-view>
    </div>

  </div>
     <footerWeb></footerWeb>
</div>
</template>

<script>



import menuTop from './components/menu_top.vue'
import footerWeb from './components/footer.vue'
import menuPrincipal from './components/menu.vue'
import PopUp from './components/popup.vue';

export default {
  created(){
    
  },
  components: { menuTop, footerWeb, menuPrincipal, PopUp },


}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}
.upload-demo, .upload-demo > .el-upload, .upload-demo .el-upload-dragger{
  width: 100%;
}

.general{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  min-height: calc(100vh - 400px)
}
.menu{
  width: 100%;
  display: flex;
  background-color: white
}
.contenedor{
  max-width: 1200px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px 0 rgba(94, 92, 92, 0.32);
  background-color: white;
}
.menutop{
  width: 1300px;
  display: flex;
  margin-bottom: 0px
}
.alerta{
  font-size: 11pt;
  max-width: 800px

}
.el-collapse-item .el-collapse-item__header{
display: flex;
align-items: center;
line-height: initial
}

@media(max-width: 750px){
  .views{
    width: 100%;
  }

}
</style>
