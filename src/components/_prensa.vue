<template>
  <div>
    <div>

    </div>
      <el-row>
        <el-col :span="8" v-for="item in items" :key="item">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/logo.png" class="image">
            <div style="padding: 14px;">
              <span>{{items.titulo}}</span>
              <div class="bottom clearfix">
                <time class="time">Feb. 20 - 2015</time>
                <el-button type="text" class="button">Operating button</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
          {
            titulo: 'Gobierno del meta el mejor',
            foto:'http://globe-views.com/dcim/dreams/people/people-03.jpg'
          }
      ]
    };
  }
}
</script>

<style>
  .buscador{

  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
