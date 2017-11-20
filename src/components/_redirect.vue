<template lang="html">

</template>

<script>
export default {

  beforeRouteEnter(to, from, next){
    console.log(to)
    if(to.params.newtab == "true")
    {
      window.open(to.params.link,'_blank');

    }
    else {
      window.location = to.params.link;
    }
  }
}
</script>
