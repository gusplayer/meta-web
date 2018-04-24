<template>
    <div class="search">
        <el-input
            placeholder="Buscador"
            v-model="inputsearch"
            class="input-search">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>        
        </el-input>
        <el-button type="info" v-on:click="doSearch">Buscar</el-button>
    </div>
</template>

<script>
export default {
  name: 'buscador',
  data(){
      return{
      inputsearch: ''
      }
  },
  methods:{
      doSearch(){
          this.$router.push({ name: 'buscador', params: { search: this.inputsearch }})
      }
  }
}
</script>

<style>
.search{
    display: flex;
    flex-direction: row
}
.input-search{
    max-width: 150px;
    margin-right: 10px
}

</style>


