/*
 * @Author: fauchard
 * @Date: 2021-11-13 21:49:00
 * @LastEditTime: 2021-12-14 16:28:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_project_master\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//Bootstrap 是一套用于 HTML、CSS 和 JS 开发的开源工具集
import BootstrapVue from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'


//VueAwesomeSwiper Swiper常用于移动端网站的内容触摸滑动
// Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端。
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/swiper-bundle.css'


//element-plus UI
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import ElementPlus from 'element-plus'
// import '../node_modules/element-plus/theme-chalk/index.css';


import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'ZlXRL6NzVdmcioI2WxyrFi7Rx8q4XGzD'
})


Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)
Vue.use(element)
// Vue.use(ElementPlus)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
