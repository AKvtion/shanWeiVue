<!--
 * @Author: your name
 * @Date: 2021-11-13 21:49:00
 * @LastEditTime: 2021-12-08 10:39:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_project_master\src\App.vue
-->
<template>
  <div id="app">
    <!-- logo -->
    
      <b-img
          src="https://z3.ax1x.com/2021/11/11/I07G7V.png"
          fluid
          alt="Responsive image"></b-img>

    
   

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
