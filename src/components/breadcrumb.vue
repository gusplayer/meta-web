<template lang="html">
  <el-breadcrumb separator="/" class="breadcrumb">
  <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
}
</script>

<style scoped>

.breadcrumb{
  display: flex;
  align-self: flex-start;
  margin-bottom: 15px;
}
</style>
