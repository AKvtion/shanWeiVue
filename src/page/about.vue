<!--
 * @Author: fauchard
 * @Date: 2021-12-08 09:15:37
 * @LastEditTime: 2021-12-14 16:45:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_vue\src\page\about.vue
-->
<template>
  <div>
    <!-- 导航栏 -->
    <navbar></navbar>
    <div class="container" style="position: relative; top: 10px;height:40%" >
      <b-img
        src="https://s4.ax1x.com/2021/12/08/oRvRyt.jpg"
        fluid
        alt="Responsive image"
        class="img1"
      ></b-img>

      <!-- 地址 -->
      <div
        class="container"
        style="position: relative; top: 20px; text-align: left"
      >
        <div class="row">
          <div class="col-md-6">
            <ul>
              <li class="about_title">
                <h4 style="text-align: left;background-color: rgb(56, 132, 192);color: aliceblue;">
                  <b>学院名称:</b>汕尾职业技术学院
                </h4>
                <p>Shanwei Vocational and Technical College</p>
              </li>
              <li class="about_p">
                <p>电话：0660-3362144</p>
              </li>
              <li>
                <p>中国 · 汕尾</p>
                <p>地址：广东省汕尾市城区文德路</p>
              </li>
              <li class="about_p">
                <p>电子邮箱：swzzz@163.com</p>
              </li>
            </ul>
          </div>

          <baidu-map
            :center="center"
            :zoom="zoom"
            @ready="handler"
            class="col-md-6 bm-view"
          >
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
          </baidu-map>
        </div>
      </div>

      <div
        class="container"
        style="
          padding: 7%;
          position: relative;
          top: 40px;
          background: url('http://1.rc.xiniu.com/rc/Contents/29122/images/LYbg.png?d=20170508094738839')
            repeat;
        "
      >
        <form action="" style="margin: 2%">
          <h2>联系我们</h2>
          <div class="hrs"></div>
          <ul>
            <li class="row">
              <div class="col-md-6 uname">
                <span>您的姓名 : <b></b> </span>
                <el-input type="text" size="small"></el-input>
              </div>
              <div class="col-md-6 phone">
                <span>您的邮箱 : <b></b> </span>
                <el-input type="text" size="small"></el-input>
              </div>
            </li>
            <li class="uemil">
              <span>您的建议 : <b></b> </span>
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
              ></el-input>
            </li>

            <li>
              <p><el-button type="primary" round>提交表单</el-button></p>
            </li>
          </ul>
        </form>
      </div>
      <!-- 表单 -->
      
    </div>

    <dmf></dmf>
  </div>
</template>

<script type="text/javascript">
import Dmf from "../components/Dmf.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar, Dmf },

  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
    };
  },

  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 115.374684;
      this.center.lat = 22.798538;
      this.zoom = 17;
    },
  },
};
</script>

<style>
ul li {
  list-style: none;
}
h4 h2 {
  background-color: rgb(56, 132, 192);
  color: aliceblue;
}
.bm-view {
  width: 300px;
  height: 300px;
}
.img1{
  width: 100%;
  height: 100%;
}
</style>