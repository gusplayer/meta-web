<template>
  <div id="menuTop">
    <div class="logo">
      <router-link to="/">
        <img class="logo_meta" src="../assets/logo.png" />
      </router-link>
      <img class="logo_colombia" src="../assets/colombia.png" />
    </div>
    <nav class="go_menu">
      <ul class="go_menu_list">
        <li class="go_menu_list_item" v-for="(item,index) in menuDefault" :key="index"><router-link :to="item.url">{{ item.titulo }}<i class="el-icon-caret-bottom" v-show="item.haveChildren"></i></router-link>
          <ul class="go_menu_sublist" v-if="item.haveChildren">
            <li class="go_menu_list_item" v-for="(subitem,index) in item.children" :key="index"><router-link :to="subitem.url">{{ subitem.titulo }}<i class="el-icon-caret-right" v-show="subitem.haveChildren"></i></router-link>
              <ul class="go_menu_sublist" v-if="subitem.haveChildren">
                <li class="go_menu_list_item" v-if="subitem.children" v-for="(subitem2,index) in subitem.children" :key="index"><router-link :to="subitem2.url">{{ subitem2.titulo }}</router-link></li>
                <li class="go_menu_list_item" v-if="subitem.childrenDynamic" v-for="(item,index) in filterMenu(subitem.id)" :key="index"><router-link :to="`/micrositio/${item.id}`">{{ item.titulo }}</router-link></li>
              </ul>
            </li>
            <li class="go_menu_list_item" v-if="item.childrenDynamic" v-for="(subitem,index) in filterMenu(item.id)" :key="index"><router-link :to="`/micrositio/${subitem.id}`">{{ subitem.titulo }}</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- <a href="javascript:void(0);" class="icon" v-on:click="transition = !transition">&#9776;</a> -->

<div>

    <transition name="el-zoom-in-top">
        <div v-show="transition" class="menuresponsive">
          <el-menu default-active="2" class="el-menu-vertical" v-show="transition">
            <template v-for="(item, index) in menuDefault">
              <el-menu-item v-if="!item.haveChildren" :index="index.toString()">
                <router-link :to="item.url">{{ item.titulo }}</router-link>
              </el-menu-item>
              <el-submenu v-else :index="index.toString()">
                <span slot="title"></i>{{ item.titulo }}</span>
                <template v-for="(item2, index2) in item.children">
                  <el-menu-item v-if="!item2.haveChildren" :index="`${index}-${index2}`"><router-link :to="item2.url">{{ item2.titulo }}</router-link></el-menu-item>
                  <el-submenu v-else :index="`${index}-${index2}`">
                    <span slot="title">{{ item2.titulo }}</span>
                    <el-menu-item v-for="(item3, index3) in item2.children" :index="`${index}-${index2}-${index3}`">{{ item3.titulo }}</el-menu-item>
                    <el-menu-item v-if="item2.childrenDynamic" v-for="(item3, index3) in filterMenu(item2.id)" :index="`${index}-${index2}-${index3}`"><router-link to="/contacto">{{ item3.titulo }}</router-link></el-menu-item>
                  </el-submenu>
                </template>
                <el-menu-item v-if="item.childrenDynamic" v-for="(item2, index2) in filterMenu(item.id)" :index="`${index}-${index2}`"><router-link :to="item2.url">{{ item2.titulo }}</router-link></el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
        </div>
    </transition>

</div>


<!-- <transition name="el-fade-in-linear">
<div class="fondo_transition" v-show="transition"></div>
</transition> -->

<transition name="fade">
<el-button class="icon2" @click="transition = !transition">&#9776; Menu</el-button>
</transition>

<!-- <img class="search_icon" src="../assets/search.png" height="20px"/> -->

</div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("https://intranet.meta.gov.co/api/micrositio/listado")
      .then(response => {
        this.menuDynamic = response.data.data;
      });
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      transition: false,
      menuDefault: [
        {
          titulo: "Inicio",
          haveChildren: false,
          childrenDynamic: false,
          url: "/"
        },
        {
          id: "1",
          titulo: "Nuestra entidad",
          haveChildren: true,
          childrenDynamic: true,
          url: "/",
          children: [
            {
              titulo: "Nuestra Gobernadora",
              haveChildren: false,
              childrenDynamic: false,
              url: "/entidad/gobernadora"
            },
            {
              titulo: "Gabinete de gobierno",
              haveChildren: false,
              childrenDynamic: false,
              url: "/micrositio/93"
            },
            {
              titulo: "Elementos Estrategicos",
              haveChildren: false,
              childrenDynamic: false,
              url: "/micrositio/67"
            },
            {
              id: "9",
              titulo: "Gestion de gobierno",
              haveChildren: true,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link:
                    "http://www.meta.gov.co/web/content/gesti%C3%B3n-de-gobierno",
                  newtab: "true"
                }
              },
              children: [
                {
                  titulo: "Control y rendicion de cuentas",
                  haveChildren: false,
                  childrenDynamic: false,
                  url: {
                    name: "redirect",
                    params: {
                      link:
                        "http://www.meta.gov.co/web/content/rendici%C3%B3n-de-cuentas",
                      newtab: "true"
                    }
                  }
                },
                {
                  titulo:
                    "Plan de Accion general y plan operativo anual de inversiones (POAI)",
                  haveChildren: false,
                  childrenDynamic: false,
                  url: {
                    name: "redirect",
                    params: {
                      link: "https://meta.gov.co/micrositio/53",
                      newtab: "false"
                    }
                  }
                }
              ],
              childrenDynamic: true
            },
            {
              id: "2",
              titulo: "Secretarías",
              haveChildren: true,
              childrenDynamic: true,
              url: "/"
            },
            {
              id: "7",
              titulo: "Institutos y Gerencias",
              haveChildren: true,
              childrenDynamic: true,
              url: "/",
              children: [
                {
                  titulo: "Oficina promotora de paz",
                  haveChildren: false,
                  childrenDynamic: false,
                  url: {
                    name: "redirect",
                    params: {
                      link:
                        "http://www.meta.gov.co/web/content/oficina-promotora-de-paz",
                      newtab: "true"
                    }
                  }
                }
              ],
              childrenDynamic: true
            },
            {
              titulo: "Plan de desarrollo",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link: "http://www.meta.gov.co/web/content/plan-de-desarrollo",
                  newtab: "true"
                }
              }
            },
            {
              titulo: "Control interno",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link: "https://meta.gov.co/micrositio/103",
                  newtab: "false"
                }
              }
            }
          ]
        },
        {
          id: "3",
          titulo: "El Meta",
          haveChildren: true,
          childrenDynamic: true,
          url: "/",
          children: [
            {
              titulo: "Nuestro departamento",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link:
                    "http://www.meta.gov.co/web/content/nuestro-departamento",
                  newtab: "true"
                }
              }
            },
            {
              titulo: "Municipios",
              haveChildren: false,
              childrenDynamic: false,
              url: "/"
            },
            {
              titulo: "Agremiaciones",
              haveChildren: false,
              childrenDynamic: false,
              url: "/"
            },
            {
              titulo: "Gobernadores",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link: "http://www.meta.gov.co/web/content/gobernadores",
                  newtab: "true"
                }
              }
            },
            {
              titulo: "Mapas",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link:
                    "http://www.meta.gov.co/web/content/departamento-del-meta",
                  newtab: "true"
                }
              }
            },
            {
              titulo: "Portal de niños",
              haveChildren: false,
              childrenDynamic: false,
              url: ""
            }
          ],
          childrenDynamic: true
        },
        {
          id: "4",
          titulo: "Documentación",
          haveChildren: true,
          childrenDynamic: true,
          url: "/",
          children: [
            {
              titulo: "Centro de documentation",
              haveChildren: false,
              childrenDynamic: false,
              url: "/documentacion/documentos"
            },
            {
              titulo: "Politicas publicas",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link: "http://www.meta.gov.co/web/content/equidad-de-genero",
                  newtab: "true"
                }
              }
            },
            {
              titulo: "Gestión Documental Archivo",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link: "https://meta.gov.co/micrositio/87",
                  newtab: "false"
                }
              }
            },
            {
              titulo: "Convocatorias",
              haveChildren: false,
              childrenDynamic: false,
              url: "/documentacion/convocatorias"
            },
            {
              titulo: "Transparencia",
              haveChildren: false,
              childrenDynamic: false,
              url: "/transparencia"
            }
          ],
          childrenDynamic: true
        },
        {
          id: "5",
          titulo: "Prensa",
          haveChildren: true,
          childrenDynamic: true,
          url: "/",
          children: [
            {
              titulo: "Archivo de noticias",
              haveChildren: false,
              childrenDynamic: false,
              url: "/prensa"
            },
            // {
            //   titulo: 'Galeria fotografica',
            //   haveChildren: false,
            //   childrenDynamic: false,
            //   url: "/"
            // },
            {
              titulo: "Galeria de videos",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link: "https://www.youtube.com/user/GobMeta/videos",
                  newtab: "true"
                }
              }
            },
            {
              titulo: "Galeria de audios",
              haveChildren: false,
              childrenDynamic: false,
              url: {
                name: "redirect",
                params: {
                  link: "http://www.meta.gov.co/web/content/galeria-de-audios",
                  newtab: "true"
                }
              }
            },
            {
              titulo: "Manual de identidad de marca",
              haveChildren: false,
              childrenDynamic: false,
              url: "/"
            }
          ],
          childrenDynamic: true
        },
        {
          id: "6",
          titulo: "Atencion al ciudadano",
          haveChildren: false,
          childrenDynamic: false,
          url: "/micrositio/26"
        }
      ],
      menuDynamic: []
    };
  },
  watch: {
    $route(to, from) {
      this.transition = false;
    }
  },
  methods: {
    filterMenu(parameterMenu) {
      return this.menuDynamic.filter(item => item.menu == parameterMenu);
    }
  }
};
</script>

<style scoped>
#menuTop {
  width: 100%;
  height: 80px;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 11;
}
.go_menu * {
  list-style: none;
  color: #48576a;
  font-size: 15px;
}
.go_menu {
  margin: 0px 5px;
}
.go_menu_list {
  display: flex;
  align-items: flex-start;
}
.go_menu_list > .go_menu_list_item {
  border-bottom: 5px solid transparent;
}
.go_menu_list > .go_menu_list_item:hover {
  border-bottom: 5px solid #20a0ff;
}
.go_menu_list_item {
  position: relative;
  display: flex;
}
.go_menu_list_item a {
  padding: 20px 18px;
}
.go_menu_list_item i {
  margin-left: 5px;
  font-size: 12px;
  color: #97a8be;
}
.go_menu_list_item:hover {
  background-color: #eef1f6;
}
.go_menu_sublist {
  position: absolute;
  top: calc(100% + 10px);
  left: 0px;
  width: 150%;
  background-color: #fff;
  border: 1px solid #d1dbe5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.go_menu_list_item > .go_menu_sublist {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
.go_menu_list_item:hover > .go_menu_sublist {
  visibility: visible;
  opacity: 1;
}
.go_menu_sublist .go_menu_list_item a {
  padding: 15px 20px;
}
.go_menu_sublist .go_menu_list_item .go_menu_sublist {
  top: 0;
  left: calc(100% + 5px);
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
.go_menu_sublist .go_menu_list_item:hover .go_menu_sublist {
  display: block;
  visibility: visible;
  opacity: 1;
}
.logo {
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  margin-left: 10px;
}
.logo_meta {
  height: 70px;
}
.logo_colombia {
  height: 64px;
}
.el-menu-demo {
  width: 800px;
  display: flex;
  justify-content: space-around;
}
.el-menu {
  background-color: white;
}
.topnav {
  display: none;
}
.icon {
  display: none;
}
.icon2 {
  display: none;
}
.menuresponsive {
  display: none;
}
@media screen and (max-width: 1000px) {
  .go_menu {
    display: none;
  }
  #menuTop {
    display: flex;
    justify-content: space-between;
  }
  .search_icon {
    display: none;
  }
  .topnav {
    display: flex;
  }
  .icon {
    display: flex;
    margin-right: 10px;
  }
  .icon2 {
    display: flex;
    z-index: 20;
  }
  a.icon {
    float: right;
    display: block;
    font-size: 28px;
    color: #008e3a;
  }
  .menuresponsive {
    z-index: 50;
    display: flex;
    margin-top: 50px;
    width: 100%;
    background-color: #e0e0e0;
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  .el-menu-vertical {
    width: 500px !important;
  }

  .el-menu-demo {
    display: none;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .logo_meta {
    height: 47px;
    margin-right: 9px;
  }
  .logo_colombia {
    height: 40px;
  }
}
</style>
