<template>
  <div>
  <Breadcrumb></Breadcrumb>
  <BannerMicro :imagen="imagenBanner"></BannerMicro>
</div>
</template>

<script>
import BannerMicro from './bannerMicro.vue'
import Breadcrumb from './breadcrumb.vue'

export default {
  components: {BannerMicro, Breadcrumb},
  name: 'app',
  data(){
    return{
      imagenBanner:'http://www.meta.gov.co/web/sites/default/files/img_micrositios/Perfil_Gober-01.png'
    }
  }
}
</script>

<style>
</style>
