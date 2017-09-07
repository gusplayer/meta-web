<template>
<div>
  <div class="general">
    <div class="menutop">
      <menu-top ></menu-top>

    </div>
    <div id="app" class="contenedor">
      <router-view></router-view>
    </div>

  </div>
  <footerWeb></footerWeb>
</div>
</template>

<script>
import menuTop from './components/menu_top.vue'
import footerWeb from './components/footer.vue'
export default {
  components: { menuTop, footerWeb },
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  /*color: #393939;*/
  font-family: 'Roboto', sans-serif;
}
#app{
  display: flex;
  flex-wrap: wrap;
  background-image: linear-gradient(to bottom, #f1f8fa, #ffffff);
}
.views{
  width: calc(100% - 180px);
  min-height: 100vh;
}
.upload-demo, .upload-demo > .el-upload, .upload-demo .el-upload-dragger{
  width: 100%;
}
.general{
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CFD8DC;
}
.contenedor{
  height: 200px;
  width: 1200px;
  background-color: red;
}
.menutop{
  width: 1200px;
  display: flex;
}

footer{
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer img{
  width: 110px;
  margin-bottom: 10px;
}
footer p{
  font-size: 15px;
}
@media(max-width: 750px){
  .views{
    width: 100%;
  }
}
</style>
