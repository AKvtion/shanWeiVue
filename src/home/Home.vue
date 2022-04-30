<!--
 * @Author: fauchard
 * @Date: 2021-11-11 15:44:38
 * @LastEditTime: 2022-03-28 22:49:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_web_project\src\components\home.vue
-->
<template>
  <div class="hello">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 轮播图 -->
    <swiper></swiper>
    
    <hr />
    <div class="container">
      <news></news>
    </div>
    <dmf></dmf>
    

  </div>
</template>

<script>
import Dmf from "../components/Dmf.vue";

import Navbar from "../components/Navbar.vue";
// import News from "./NewsO.vue";
import News from "../components/News.vue";
import Swiper from "../components/Swiper.vue";
export default {
  components: { Swiper, Navbar, News, Dmf },
  name: "HelloWorld",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
