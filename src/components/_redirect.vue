<template lang="html">

</template>

<script>
export default {

  created(){
    if(this.$route.params.newtab == "true")
    {
      window.open(this.$route.params.link,'_blank')
    }
    else {
      window.location = this.$route.params.link;
    }
  }
}
</script>

<style lang="css">
</style>
