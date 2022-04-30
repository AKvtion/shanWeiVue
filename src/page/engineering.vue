<!--
 * @Author: fauchard
 * @Date: 2021-12-14 16:43:24
 * @LastEditTime: 2021-12-14 20:58:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \sw_vue\src\page\gongchen.vue
-->

<template>
  <div>
    <navbar></navbar>
    <div class="container" style="position: relative; top: 10px; height: 40%">
      <b-img
        src="https://s4.ax1x.com/2021/12/14/ovD01A.jpg"
        fluid
        alt="Responsive image"
        class="img1"
      ></b-img>
    </div>

    <h2 align="center">专业介绍</h2>

    <!-- <hr size="4" color="#F51216" width="750px">加粗分割线 -->

    <nav style="position: relative; top: 20px">
      <a href="#new1" class="two">软件技术</a>
      <a href="#new2" class="two">计算机网络</a>
      <a href="#new3" class="two">云计算</a>
      <a href="#new4" class="two">计算机应用技术专业</a>
    </nav>
    <!--这是设置导航栏-->
    <div class="container">
      <dl id="new1">
        <dd>一、专业名称：软件技术专业</dd>
        <dd>二、专业代码：610205</dd>
        <dd>三、招生对象：普通高中毕业生</dd>
        <dd>
          四、培养目标：培养熟练掌握网站开发技术、中小型企业网站开发与设计能力，熟悉网站开发规范和标准，具备从事网站开发、运维和数据库管理等工作的高技能应用型专业人才。
        </dd>
        <dd>
          五、主干课程：
          Java程序设计、HTML5应用开发、JavaScript技术与应用、网页UI设计、数据库技术与应用、PHP网站开发、JSP网站开发、Android应用开发、企业网站开发（Java
          Web项目开发）、移动互联网项目开发等。
        </dd>
        <dd>
          六、就业岗位：
          Web前端开发，移动Web前端开发，Web后端开发，初级PHP开发工程师、初级java开发工程师，初级android开发工程师，网站管理与维护等。
        </dd>
        <dd>本专业与汕尾易购、汕尾市民网、善为网合作形式：<br /></dd>
        <dd>
          （1）二年级第一学期学生会有一个星期的实训到以上三家公司，在公司里了解公司的基本工作，并协助公司进行简单的网站开发和维护，实际体验了网站的开发过程后很大的激发了他们学习专业课的动力。
          <br />（2）经过1周的实训，有些技术比较好的学生会和公司建立良好的合作关系，平常也可帮忙开发些小项目以锻炼自己的专业能力。
          <br />（3）三年级第二学期学生也可选择在这三家公司实习，继续提高自己的实际工作能力，并在此过程中应用到自己的专业知识。
        </dd>
      </dl>
    </div>

    <div class="container">
      <dl id="new2">
        <dd>一、专业名称：计算机网络技术</dd>
        <dd>二、专业代码： 610202</dd>
        <dd>三、招生对象 招生对象为普通高中毕业生。</dd>
        <dd>四、修业年限 全日制三年。</dd>
        <dd>
          五、培养目标
          培养掌握计算机网络基本理论和应用技术、网站开发技术，具备计算机网络系统方案设计、安装实施、调试和维护管理能力，能够从事计算机网络的基础设施建设、网络系统集成、网络运行管理与系统维护、云计算系统管理与维护，网站设计开发工作的技术应用型专门人才。
        </dd>
        <dd>
          六、专业核心课程
          计算机网络技术、网页设计与制作、Linux网络操作系统、数据库技术与应用、路由与交换技术、网络综合布线技术、计算机网络安全、云计算技术、网络组建与管理实训、网站开发与建设实训等。
        </dd>
        <dd>
          七、本专业当前可考取的职业资格或技能证书（须考取以下证书之一）：
          <br />(1)全国计算机等级考试三级网络技术证书（或四级网络工程师证书）；
          <br />(2)网页设计师证书； <br />(3)行业证书（思科、华为、锐捷等）。
        </dd>
        <dd>
          八、毕业生就业方向
          在地方政府、企事业单位从事计算机网络管理与维护，网站建设与管理,云计算系统管理与维护，网络软、硬件产品的销售与服务等工作，可灵活就业。
        </dd>
        <dd>
          九、实习基地
          深圳市稳速网络科技有限公司、广州国为信息科技有限公司、汕尾市民网等。
        </dd>
      </dl>
    </div>

    <div class="container">
      <dl id="new3">
        <dd>一、专业名称：云计算技术与应用</dd>
        <dd>二、专业代码：610213</dd>
        <dd>三、招生对象 招生对象为普通高中毕业生。</dd>
        <dd>四、修业年限 全日制三年。</dd>
        <dd>
          五、培养目标
          培养掌握云计算平台部署与运维、云数据中心运维、服务器系统集成等能力，具备综合云平台应用、大数据分析与应用能力。适应生产和管理第一线需要的复合型高素质高技能专业人才。
        </dd>
        <dd>
          六、主干课程
          Linux服务器管理、Hadoop大数据管理与应用、HTML5网页设计、OpenStack部署、云存储系统部署、交换机与路由器配置、Python统计分析、Java
          Web开发、大数据平台及应用综合实训、云平台及应用综合实训等课程。
        </dd>
        <dd>
          七、专业核心课程 <br />1、Linux服务器管理
          <br />Linux服务器管理主要介绍操作系统基本概念和工作原理，Linux系统的网络组建和服务器配置的方法，网络基本配置，放火墙配置。通过本课程学习，使学生在深刻理解网络操作系统概念的基础之上，熟练掌握Linux网络配置，掌握服务器配置和管理，熟悉Linux的shell编程，能够进行Linux服务器的日常维护和远程管理。
          <br />2、云平台部署
          <br />云平台部署主要介绍虚拟化技术、桌面虚拟化协议，重点介绍OpenStack/CloudStack等云平台的部署，虚拟机动态迁移技术。通过该课程的学习，学生可以掌握kvm的安装与使用，熟练OpenStack/CloudStack云平台的部署，掌握桌面云的安装与交付，掌握虚拟主机迁移的配置方法。
          <br />3、Hadoop管理与应用
          <br />Hadoop管理与应用主要介绍Hadoop基本原理、部署配置方式、核心组件、使用和编程方法，讲解分布式计算框架及未来发展方向，讲解Hadoop的安装与部署，MapReduce的工作原理和编程思想。学生通过深入理解Hadoop技术架构,对Hadoop运作机制有清晰全面的认识，可以独立规划及部署生产环境的Hadoop集群，掌握Hadoop基本运维思路和方法，对Hadoop集群进行管理和优化。从而熟练使用Hadoop进行MapReduce程序开发，熟练使用Pig工具及Pig编程。
        </dd>
        <dd>
          八、本专业当前可考取的职业资格或技能证书
          <br />全国计算机等级考试二级、三级、四级证书；
          <br />全国计算机信息高新技术考试职业资格证书：程序设计、网页制作、多媒体软件制作等模块证书。
          <br />工业与信息化部计算机技术与软件考试“程序员”职业资格证书。
          <br />工业与信息化部 “网页设计师”职业资格证书。
          <br />毕业时必须考取NCRE二级证书（如：Java语言程序设计、MySQL数据库程序设计、Web程序设计），可以考取NCRE三级证书（如：数据库技术、网络技术），Redhat公司的RHCSA证书考试，华为公司的HCNA
          Cloud证书考试等。
        </dd>
      </dl>
    </div>

    <div class="container">
      <dl id="new4">
        <dd>一、专业名称：计算机应用技术专业（传媒技术）</dd>
        <dd>二、专业代码：610201</dd>
        <dd>
          三、招生对象：招生对象为普通高中毕业生和三校生（普通（成人）中专、中等职业学校、技工学校的毕业生），文理兼招。
        </dd>
        <dd>四、修业年限：全日制三年</dd>
        <dd>
          五、培养目标
          培养掌握计算机硬件和计算机软件系统的操作、管理、维护能力，具备影视摄录与编辑、影视特效设计制作、图像处理、二维动画制作、三维动画制作、影视栏目包装与影视广告等核心技术，能够在计算机应用技术领域从事影视节目制作、平面设计、动画设计、数字媒体开发等方面工作的高技能应用型专业人才。
        </dd>
        <dd>
          六、专业核心能力
          本专业的学习要求具有基本的美术基础。通过学习能够熟练使用图形图像设计、动画设计、摄影摄像技术以及影视节目制作等核心技术，进行较复杂的多媒体制作,
          掌握有关构图、色彩、声音、交互设计等基本知识，能进行广告设计、动画设计、影视节目制作等。
        </dd>
        <dd>
          七、主干课程
          Photoshop、计算机组装维护、Flash动画设计、移动APP开发、摄影摄像技术、计算机辅助设计(Cad)、3ds
          Max动画设计、Premiere、After Effect特效制作、广告艺术设计。
        </dd>
        <dd>
          八、专业核心课程简介 <br />·
          flash动画设计：flash动画设计课程主要学习掌握adobe flash
          CS系列软件的操作使用。该软件是目前二维动画市场的主流软件，是从事平面动画设计、网页设计不可或缺的技术。同时flash还可以对音视频进行编辑处理，能制作出非常精美的动画和视频。
          <br />· 3ds max动画设计：3ds max动画设计课程主要学习掌握autodesk 3ds
          max软件的建模、材质及贴图、灯光、摄像机、粒子特效、动画等相关知识与技能。3ds
          max软件在影视动画及特效设计、建筑动画设计、室内装饰效果图设计、游戏开发等领域起着不可替代的作用。
          <br />·
          电视摄像及画面编辑：该课程主要学习掌握视频节目制作必备的理论与实践知识，能拍摄出符合需求的视频素材，能利用adobe
          premiere或edius软件对素材进行剪辑及组接，制作出优秀的电视画面，是从事影视工作必备技能。
          <br />· 数字影视特效制作：该课程主要学习掌握adobe
          aftereffec软件的操作与使用，利用该技术能设计出画面优美、视觉冲击力强的特效，是影视栏目包装、影视广告制作中比用技术。
        </dd>
      </dl>
    </div>

    <dmf></dmf>
  </div>
</template>


<script type="text/javascript">
import Dmf from "../components/Dmf.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar, Dmf },
};
</script>

<style scoped>
/*{list-style:none; outline:none}*/
h2 {
  position: relative;
  top: 20px;
}

a:link {
  padding: 0 25px;
  text-indent: 0px; /*将段落的第一行缩进 2像素*/
  display: inline-block; /*设置不独占一行的块级元素*/
  font-size: 32px;
  color: #000000;
} /*这是导航栏的字体设置*/

/*链接伪类*/
a:nth-child(1) {
  text-indent: 7px;
} /*设置第一个链接的首行缩进为0*/
a:link,
a:visited {
  text-decoration: none;
} /*这是访问后超链接的状态*/
a:hover {
  color: #000000;
  text-decoration: underline;
} /*鼠标经过，悬停时链接的状态*/
a:active {
  color: #000000;
} /*鼠标单击不动*/

/*通过dl控制，加载页面后显示效果为隐藏，并在文字内容前添加小图片，统一设置奇数行的文字样式等等*/
dl {
  display: none;
}
dd {
  position: relative;
  top: 40px;
  line-height: 44px;
  font-family: "宋体";
  font-weight: 38px;
  font-size: 22px;
  color: #000000;
  text-align: left;
}

:target {
  display: block;
}
</style>