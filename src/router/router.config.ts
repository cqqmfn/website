import { RouteRecordRaw } from "vue-router";
import BasicDesign from "~/layouts/BasicDesign.vue";

export const constantRouteMap: RouteRecordRaw[] = [
  {
  path: '/',
  redirect: '/index',//重定向
  component: BasicDesign,
  children: [
      {
        path: '/index',
        component: () => import('~/views/index/index.vue')
      },
      {
        path: '/about',
        component: () => import('~/views/about/index.vue')
      },
  ],
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('~/views/exception/404.vue')
  }
]