<!--
 * @Author: fauchard
 * @Date: 2021-11-14 09:29:05
 * @LastEditTime: 2021-12-14 17:01:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_project_master\src\components\Navbar.vue  variant="primary"
-->
<template>
  <div>
    <!-- bootstrapVue + elementUI 响应式的导航栏-->
    <b-navbar
      toggleable="lg"
      type="dark"
      style="background: rgb(12, 88, 150); list-style: none;font-size: 26px"
    >
    <!--   -->
      <b-container class="container">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          style="font-size: 30px; margin: 10px; padding: 5px"
          text-color="white"
          background-color="#0c5896"
          active-text-color="white"
        >
          <el-menu-item index="7"><router-link to="/#">首页</router-link></el-menu-item>
          <el-submenu index="1">
            <template slot="title"><router-link to="/#">学院概况</router-link></template>
            <el-menu-item index="1-1" to="/introduce"><router-link to="/introduce">学院简介</router-link></el-menu-item>
            <el-menu-item index="1-2" to="/#">现任领导</el-menu-item>
            <el-menu-item index="1-3" to="/#">院士寄语</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><router-link to="/#">学院动态</router-link></template>
            <el-menu-item index="2-1" to="/#"><router-link to="/journalism">学院动态</router-link></el-menu-item>
            <el-menu-item index="2-2" to="/#">学生动态</el-menu-item>
            <el-menu-item index="2-3" to="/#">校友风采</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><router-link to="/#">教学机构</router-link></template>
            <el-menu-item index="3-1" to="/#"><router-link to="/engineering">工程学院</router-link></el-menu-item>
            <el-menu-item index="3-2" to="/#">经贸学院</el-menu-item>
            <el-menu-item index="3-3" to="/#">艺术学院</el-menu-item>
            <el-menu-item index="3-4" to="/#">人文学院</el-menu-item>
            <el-menu-item index="3-5" to="/#">管理学院</el-menu-item>
            <el-menu-item index="3-6" to="/#">海洋学院</el-menu-item>
            <el-menu-item index="3-7" to="/#">马克思主义学院</el-menu-item>
            <el-menu-item index="3-8" to="/#">教师教育学院</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><router-link to="/#">招生工作</router-link></template>
            <el-menu-item index="4-1" to="/#">本科招生</el-menu-item>
            <el-menu-item index="4-2" to="/#">研究生招生</el-menu-item>
            <el-menu-item index="4-3" to="/#">博士招生</el-menu-item>
          </el-submenu>
          <el-menu-item index="8" to="/#"><router-link to="/#">网络中心</router-link></el-menu-item>
          <el-menu-item index="9" to="/#"><router-link to="/journalism">校园新闻</router-link></el-menu-item>
          <el-menu-item index="10" to="/#"><router-link to="/#">通知公告</router-link></el-menu-item>
          <el-menu-item index="12" to="/about"><router-link to="/about">联系我们</router-link></el-menu-item>
          
        </el-menu>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
a {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-family: "宋体";
  font-weight: bold;
}
</style>