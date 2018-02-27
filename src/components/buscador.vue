<template>
    <el-input
        placeholder="Buscador"
        v-model="input23"
        class="input-search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</template>

<script>
export default {
  name: 'buscador',
}
</script>

<style>
.input-search{
    width: 200px
}

</style>


