<template>

  <transition name="fade">
    <div class="pop-up" v-if="imagen != '' || video != '' ">
      <div class="pop-up-image" v-if="imagen" >
        <img :src="`https://intranet.meta.gov.co/popup/${imagen}`" height="auto" width="100%">
     </div>
      <div class="pop-up-video" v-else-if="video" >
        <iframe
         v-if="video"
        :src="`https://www.youtube.com/embed/${videoYoutube}?autoplay=1`"
        frameborder="0" allowfullscreen width="100%">
        </iframe>
      </div>
      <br><el-button v-on:click="visiblePopUp">Continuar</el-button>
    </div>
  </transition>

</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("https://intranet.meta.gov.co/api/informacion/popup")
      .then(response => {
        this.data = response.data.poup;
        this.video = response.data.poup.video;
        this.imagen = response.data.poup.imagen;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  data() {
    return {
      data: "",
      video: "",
      imagen: ""
    };
  },
  methods: {
    visiblePopUp() {
      this.imagen = "";
      this.video = "";
    }
  },
  computed: {
    videoYoutube() {
      let urlVideo = this.data.video;
      let index;
      if (urlVideo.includes("?v=")) {
        index = urlVideo.indexOf("?v=") + 3;
      } else {
        index = urlVideo.indexOf(".be/") + 4;
      }
      let idYoutube = urlVideo.substring(index);
      return idYoutube;
    }
  }
};
</script>

<style lang="css" scoped>
.pop-up {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 47, 61, 0.9);
  position: fixed;
  z-index: 100;
  padding: 20px;
}

.pop-up-image img {
  max-height: 80vh;
}

.pop-up-video iframe {
  height: 500px;
  width: 750px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 750px) {
  .pop-up img {
    width: 100%;
    height: auto;
    padding: 5px;
  }
  .pop-up-video iframe {
    height: 260px;
    width: 380px;
  }
}
</style>