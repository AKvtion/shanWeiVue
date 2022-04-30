<!--
 * @Author: fauchard
 * @Date: 2021-12-08 09:16:18
 * @LastEditTime: 2021-12-08 20:35:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_vue\src\page\introduce.vue
-->
<template>
  <div>
    <!-- 导航栏 -->
    <navbar></navbar>
    <div class="container" style="position: relative; top: 20px; height: 40%">
      <b-img
        src="https://s4.ax1x.com/2021/12/08/oRIkLj.jpg"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    
    <!-- 简介 -->
    <div class="container" style="position: relative; top: 50px;">
      <div class="row gjianjie-jiesao">
        <div class="col-md-6">
          <h2>汕尾职业技术学院简介</h2>
          <p>
            <b>汕尾职业技术学院</b>
            坐落在风光旖旎的粤东滨海城市——广东省汕尾市城区，是一所由汕尾市人民政府创办，
            广东省人民政府批准，国家教育部备案的专科层次公办普通高等院校。学院遵循“以人为本、服务社会、
            内涵发展、彰显特色，的办学理念，注重人才培养质量，关注学生全面和谐发展。以促进学生健康成长为
            宗旨，关注学生全面和谐发展；树立“人才培养质量是学院生存与发展生命线”的观念，坚持内涵发展，
            注重抓好教学质量，严抓考风考纪，促进良好教风、学风建设和校风的形成；翔于’，双证书’‘制度，
            积极组织开展职业资格考核认定，毕业生职业技育爵口就业竞争力不断增强。自
            2001 年升格以来，在上级党政和学院党委的正确领导下，
            经过全体教职员工的不懈努力，学院综合实力明显增强， 2007
            年顺利通过教育部人才工作水平评估，学院各项事业健康发展。
          </p>
        </div>
        <a href="#" class="col-md-6">
          <img
            class="img1"
            src="https://z3.ax1x.com/2021/06/14/27k84s.jpg"
            alt="27Fg0g.jpg"
          />
        </a>
      </div>
      <div class="row gjianjie-jiesao">
        <div class="col-md-6" >
          <h2>现任领导班子</h2>
          <p style="text-align: left;">
            <b>党委书记：</b>林来平<br />

            <b>党委副书记、校长：</b>蔡昭权<br />

            <b>党委副书记、纪委书记、工会主席：</b>吴方晖<br />

            <b>副校长：</b>柳青<br />

            <b>党委委员、副校长：</b>林炳壮<br />

            <b>党委委员、副校长：</b>傅凤龙<br />
          </p>
        </div>
        <a href="#" class="col-md-6"
          ><img
            class="img2"
            src="https://z3.ax1x.com/2021/06/14/27Fg0g.jpg"
            alt="27k84s.jpg"
        /></a>
      </div>
    </div>
    
    <!-- 底部 -->
    <dmf></dmf>
  </div>
</template>

<script>
import Dmf from '../components/Dmf.vue';
import Navbar from '../components/Navbar.vue';
export default {
  components: { Dmf, Navbar },};
</script>

<style>
.img1{
    width: 100%;
    height: 90%;
}
.img2{
    width: 100%;
    height: 100%;
    
}
</style>