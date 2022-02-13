import Vue from "vue";
import VueRouter from 'vue-router'

import inicio from './components/inicio'
import principal1 from './components/principal1'
import contenido1 from './components/contenido1'
import contenido1a from './components/contenido1a'
import contenido1b from './components/contenido1b'
import contenido2 from './components/contenido2'
import contenido3 from './components/contenido3'
import contenido3a from './components/contenido3a'
import contenido3b from './components/contenido3b'
import contenido3c from './components/contenido3c'
import contenido4 from './components/contenido4'
import contenido5 from './components/contenido5'
import contenido6 from './components/contenido6'
import contenido7 from './components/contenido7'
import contenido8 from './components/contenido8'
import actividades from './components/actividades' 
import act2 from './components/act2' 
import act1 from './components/act1' 
import creditos from './components/creditos'
    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "inicio",
      component: inicio
    },
    {
        path: "/principal1",
        name: "principal1",
        component: principal1,

        children:[
            {
            path:'/contenido1',
            name:'contenido1',
            component: contenido1,
          },
          {
            path:'/contenido1a',
            name:'contenido1a',
            component: contenido1a,
          },
          {
            path:'/contenido1b',
            name:'contenido1b',
            component: contenido1b,
          },
          {
            path:'/contenido2',
            name:'contenido2',
            component: contenido2,
          },
          {
            path:'/contenido3',
            name:'contenido3',
            component: contenido3,
          },
          {
            path:'/contenido3a',
            name:'contenido3a',
            component: contenido3a,
          },
          {
            path:'/contenido3b',
            name:'contenido3b',
            component: contenido3b,
          },
          {
            path:'/contenido3c',
            name:'contenido3c',
            component: contenido3c,
          },
          {
            path:'/contenido4',
            name:'contenido4',
            component: contenido4,
          },
          {
            path:'/contenido5',
            name:'contenido5',
            component: contenido5,
          },
          {
            path:'/contenido6',
            name:'contenido6',
            component: contenido6,
          },
          {
            path:'/contenido7',
            name:'contenido7',
            component: contenido7,
          },
          {
            path:'/contenido8',
            name:'contenido8',
            component: contenido8,
          },
          {
            path:'/actividades',
            name:'actividades',
            component: actividades,
          }, 
         
          {
            path:'/act1',
            name:'act1',
            component: act1,
          }, 
          {
            path:'/act2',
            name:'act2',
            component: act2,
          }, 
          {
            path:'/creditos',
            name:'creditos',
            component: creditos,
          },
        ]
          },
      ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;