<template lang="html">
  <el-breadcrumb separator="/" class="breadcrumb">
  <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style>
.breadcrumb{
  display: flex;
  align-self: flex-start;
  margin-bottom: 15px;
  background-color: #fafafa;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px
}
</style>
