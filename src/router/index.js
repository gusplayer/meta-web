import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/_inicio'
import Meta from '@/components/_meta'
import Galeria from '@/components/_galeria'
import Gobierno from '@/components/_gobierno'
import Atencion from '@/components/_atencion'
import Prensa from '@/components/_prensa'
import Transparencia from '@/components/_transparencia'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/gobierno',
      name: 'gobierno',
      component: Gobierno
    },
    {
      path: '/meta',
      name: 'meta',
      component: Meta
    },
    {
      path: '/transparencia',
      name: 'transparencia',
      component: Transparencia
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: Galeria
    },
    {
      path: '/prensa',
      name: 'prensa',
      component: Prensa
    }
  ]
})
