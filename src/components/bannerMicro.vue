<template>
  <div
  :style="styles"
  class="banner">
    <div class="banner_text" v-show="texto">
      <h2>{{ texto }}</h2><br>
    </div>
  </div>
</template>

<script>
export default {
  name:'bannerMicro',
  props: ['texto','imagen'],
  computed: {
    styles(){
      return `background:url('${this.imagen}'); background-size: 100% auto;`
    }
  }
}
</script>

<style scoped>
.banner{
  display: flex;
  width: 100%;
  height: 370px;

  margin-bottom: 30px;
}
.banner_text{
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding: 15px;
  height: 60px;
  width: 100%;
  background:rgba(255,255,255,0.7)
}
@media  screen and (max-width: 900px){
  .banner{
    height: 280px;
    background-repeat: no-repeat;
  }
}
@media screen and  (max-width: 450px){
  .banner{
    height: 90px;
  }
}
</style>
