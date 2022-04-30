<!--
 * @Author: fauchard
 * @Date: 2021-11-14 10:12:20
 * @LastEditTime: 2021-12-14 12:33:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_project_master\src\components\Swiper.vue
-->
<template>
  <div class="container">
    <!-- Swiper 
     http://www.swpt.edu.cn/ueditor/php/upload/image/20210402/1617351203234652.jpg"
    http://www.swpt.edu.cn/ueditor/php/upload/image/20201120/1605867451258664.jpg"
     http://www.swpt.edu.cn/ueditor/php/upload/image/20201120/1605865192131535.jpg"
     http://www.swpt.edu.cn/ueditor/php/upload/image/20210930/1632990791474167.png"
    -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <b-img
            src="https://z3.ax1x.com/2021/06/14/27kMDS.jpg"
  
            fluid
            alt="Responsive image"
          ></b-img>
          
        </div>

        <div class="swiper-slide">
          <b-img
            src="https://z3.ax1x.com/2021/06/14/27knjf.jpg"  
          
            fluid
            alt="Responsive image"
          ></b-img>
        </div>

        <div class="swiper-slide">
          <b-img
            src="https://z3.ax1x.com/2021/06/14/27kY3q.jpg"
            
            fluid
            alt="Responsive image"
          ></b-img>
        </div>

        <div class="swiper-slide">
          <b-img
            src="https://z3.ax1x.com/2021/06/14/27kKu8.jpg"

            fluid
            alt="Responsive image"
          ></b-img>
        </div>

        

      </div>

      <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    </div>

    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
import "../assets/js/swiper.min.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      scrollbar: ".swiper-scrollbar",
    });
  },
};
</script>
<style scoped>
@import "../assets/css/swiper.min.css";
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  /* width: 500px;
        height: 300px; */
  margin: 25px auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>