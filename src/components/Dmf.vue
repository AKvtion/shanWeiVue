<!--
 * @Author: your name
 * @Date: 2021-11-16 17:09:29
 * @LastEditTime: 2022-01-13 22:05:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_project_master\src\components\Demof.vue
-->

<template>
  <div>
      <div class="container2">
        <!--友情链接-->
        <div  style="background:rgb(12, 88, 150);color:white;">
          友情链接：
          <a href="http://eea.gd.gov.cn/" target="_blank">广东省教育考试院</a>
          <a href="https://www.ldpoly.edu.cn/" target="_blank"
            >罗定职业技术学院</a
          >
          <a href="http://www.hypt.edu.cn/" target="_blank">河源职业技术学院</a>
          <a href="https://www.stpt.edu.cn/" target="_blank"
            >汕头职业技术学院</a
          >
          <a href="http://www.chaoshan.cn/index.html" target="_blank"
            >潮汕职业技术学院</a
          >
          <a href="http://www.jyc.edu.cn/" target="_blank">揭阳职业技术学院</a>
          <a href="http://localhost:9876/" target="_blank">学院新闻管理系统</a>
        </div>
      </div>

      <!--备案号-->
      <div class="footer-button">
        <div class="container3">
          <!-- logo -->
          <img src="../assets/img/blue.png" alt="事业单位" />
          <span>联系热线：0660-3362144 传真：0660-3371568 </span>

          <span
            >Copyright © 2006-2020 汕尾职业技术学院 |
            <img src="../assets/img/beian.png" alt="公安" />  
            <a href="http://www.beian.gov.cn/portal/index.do" target="_blank" style="color:white">粤ICP备20020012号</a> </span
          ><br />

          <img
            src="../assets/img/home/wxgzh.jpeg"
            alt="汕尾职业技术学院公众号"
            width="100px"
            height="100px"
          />
          
        </div>
      </div>

      
    </div>

  
</template>

<script>
export default {};
</script>

<style>
h3 {
  font-family: "楷体";
}
.container2 a{
    color:aliceblue;
    margin-right: 20px;
}
.container2{
    color: aliceblue;
    margin-top: 80px;
    padding-top: 50px;
    padding-bottom: 40px;
    background: rgb(12, 88, 150);
}
.container3{
    color: aliceblue;
    background: rgb(12, 88, 150);
}
</style>