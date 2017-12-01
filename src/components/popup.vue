<template>

  <transition name="fade">
    <div class="pop-up" v-show="popup" >
      <img src="../assets/1diciembre.jpg" height="auto" width="100%"><br>
      <el-button v-on:click="visiblePopUp">Continuar</el-button>
    </div>
  </transition>

</template>

<script>
export default {

  data(){
    return{
      popup: true
    }
  },
  methods:{
    visiblePopUp(){
      this.popup = false
    }
  },
}
</script>

<style lang="css" scoped>

.pop-up{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  flex:1;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 47, 61, 0.9);
  position: fixed;
  z-index: 100
}
.pop-up img{
  width: 750px
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .80s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

@media(max-width: 750px){
  .pop-up img{
    width: 100%;
    height: auto;
    padding: 5px;
  }
}
</style>
