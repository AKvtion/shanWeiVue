/*
 * @Author: fauchard
 * @Date: 2021-11-19 15:03:35
 * @LastEditTime: 2021-12-14 17:00:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_vue\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'

//懒加载 缓解首页加载缓慢
const about = () => import("@/page/about");

const journalism = () => import("@/page/journalism");

const introduce = () => import("@/page/introduce");

const engineering = () => import("@/page/engineering");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path:'/about',
      name:'about',
      component: about
    },

    {
      path:'/journalism',
      name:'journalism',
      component:journalism
    },
    
    {
      path:'/introduce',
      name:'introduce',
      component:introduce
    },

    {
      path:'/engineering',
      name:'engineering',
      component:engineering
    }
    
  ]
})
