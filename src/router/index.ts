//创建路由构造器（在router文件夹的index.js中引入创建路由的组件）
import { createRouter, createWebHistory } from "vue-router";
import { constantRouteMap } from "./router.config";
//创建路由实例（index.js）
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),//历史模式
  routes: constantRouteMap, //路由规则(静态)
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: 'smooth',
      }
    }
  },//使浏览器滚动变得流畅
})

export default router //将路由缺省暴露出去，其他文件才可访问