import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/_inicio'
import Meta from '@/components/_meta'
import Galeria from '@/components/_galeria'
import Entidad from '@/components/_entidad'
import Atencion from '@/components/_atencion'
import Prensa from '@/components/_prensa'
import Transparencia from '@/components/_transparencia'
import Soporte from '@/components/_soporte'
import Ayuda from '@/components/_ayuda'
import Sitemap from '@/components/_sitemap'
import Privacidad from '@/components/_privacidad'
import Condiciones from '@/components/_condiciones'
import Contacto from '@/components/_contacto'
import Micrositio from '@/components/_micrositio'
import Gobernadora from '@/components/_gobernadora'
import Documentacion from '@/components/_centroDocumentacion'
import Convocatorias from '@/components/_convocatorias'
import Calidad from '@/components/_gestionCalidad'
import Redirect from '@/components/_redirect'
import NoticiaDetalle from '@/components/_noticiaDetalle'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/entidad/transparencia',
      name: 'transparencia',
      component: Transparencia,
    },
    {
      path: '/meta',
      name: 'meta',
      component: Meta
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
    },
    {
      path: '/noticia/:id',
      name: 'noticia',
      component: NoticiaDetalle
    },
    {
      path: '/privacidad',
      name: 'privacidad',
      component: Privacidad
    },
    {
      path: '/condiciones',
      name: 'condiciones',
      component: Condiciones
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/ayuda',
      name: 'ayuda',
      component: Ayuda
    },
    {
      path: '/soporte',
      name: 'soporte',
      component: Soporte
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: Sitemap
    },
    {
      path: '/micrositio/:id',
      name: 'micrositio',
      component: Micrositio,
    },
    {
      path: '/entidad/gobernadora',
      name: 'Entidad / Gobernadora',
      component: Gobernadora
    },
    {
      path: '/documentacion/documentos',
      name: 'documentación / Centro de documentación',
      component: Documentacion
    },
    {
      path: '/documentacion/convocatorias',
      name: 'convocatorias',
      component: Convocatorias
    },
    {
      path: '/documentacion/calidad',
      name: 'calidad',
      component: Calidad
    },
    {
      path:'/redirect',
      name:'redirect',
      component: Redirect
    }


  ]
})
