<template>
  <div class="prensa">
    <div class="contenedor_buscador">
      <el-input placeholder="Please input" v-model="input5" class="buscador">
        <el-select v-model="select" slot="prepend" placeholder="Select">
          <el-option label="Restaurant" value="1"></el-option>
           <el-option label="Order No." value="2"></el-option>
           <el-option label="Tel" value="3"></el-option>
         </el-select>
        <el-button slot="append" icon="search"></el-button>
      </el-input>
    </div>
    <div class="contenedor_blog">
        <el-col :span="7" v-for="item in items" :key="item.titulo" class="el-col" >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.foto" class="image">
            <div style="padding: 14px;">
              <span>{{items.titulo}}</span>
              <div class="bottom clearfix">
                <time class="time">Feb. 20 - 2015</time>
                <el-button type="text" class="button">{{item.titulo}}</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: '',
      items: [
          {
            titulo: 'Gobierno del meta el mejor',
            foto:'https://images.pexels.com/photos/509819/pexels-photo-509819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          },
          {
            titulo: 'Gobierno del meta el mejor',
            foto:'https://images.pexels.com/photos/509819/pexels-photo-509819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          },
          {
            titulo: 'Gobierno del meta el mejor',
            foto:'https://images.pexels.com/photos/509819/pexels-photo-509819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          },
          {
            titulo: 'Gobierno del meta el mejor',
            foto:'https://images.pexels.com/photos/509819/pexels-photo-509819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          },
          {
            titulo: 'Gobierno del meta el mejor',
            foto:'https://images.pexels.com/photos/509819/pexels-photo-509819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          },
          {
            titulo: 'Gobierno del meta el mejor',
            foto:'https://images.pexels.com/photos/509819/pexels-photo-509819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          },
          {
            titulo: 'Gobierno del meta el mejor',
            foto:'https://images.pexels.com/photos/509819/pexels-photo-509819.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          }
      ]
    };
  }
}
</script>

<style scoped>
  .prensa{

  }

  .contenedor_blog{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .contenedor_buscador{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin-bottom: -5px
  }
  .buscador{
    width: 500px;
  }
  .time {
    font-size: 15px;
    color: #999;
  }
  .el-col{
    padding: 5px;
    margin-bottom:  20px;
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
