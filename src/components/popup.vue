<template>

  <transition name="fade">
    <div class="pop-up" v-if="popup" >
      <div class="pop-up-image" v-if="imagen" >
        <img :src="imagen" height="auto" width="100%">
     </div>
      <div class="pop-up-video" v-else-if="video" >
        <iframe
         v-if="video"
        :src="`https://www.youtube.com/embed/${video}?autoplay=1`"
        frameborder="0" allowfullscreen width="100%">
        </iframe>
      </div>
      <br><el-button v-on:click="visiblePopUp">Continuar</el-button>
    </div>
  </transition>

</template>

<script>
export default {
  create(){
    axios.get('https://intranet.meta.gov.co/api/informacion/popup')
    .thien(response => this.datos = response.data)
  },
  data(){
    return{
      popup: false,
      imagen: require("../assets/salud_tv.png"),
      video: "OsruQoXPoX8",
      datos:''
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
  z-index: 100;
  padding: 20px
}

.pop-up-image img{
  max-height: 80vh;
}

.pop-up-video iframe{
	height:500px;
	width:750px;
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
  .pop-up-video iframe{
  	height:260px;
  	width:380px;
  }
}
</style>
