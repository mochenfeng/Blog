<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="inner-width">
        <i class="iconfont iconlogo-vimeo logo"></i>
        <a href="" class="logo"></a>
        <button class="menu-toggler" :class="{active: isActive}" @click="appear">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="navbar-menu" :class="{active: isActive}">
          <!-- :class="{menu_a: isMenu}" -->
          <a href="#" v-for="(menu,index) in menus" :key="index"  @click="menuclick(index)">{{menu.text}}</a>
        </div>
      </div>
    </nav>


    <!-- Home -->
    <section id="home">
      <div class="inner-width">
        <div class="content">
          <h1>Hi I'm</h1>
          <div class="sm"></div>
          <div class="buttons">
            <a href="#" :class="{buttons_a: isChanged_a}" @click="change">Contact me</a>
            <a href="#" :class="{buttons_a: isChanged_b}" @click="change">Download CV</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about">
      <div class="inner-width">
        <h1 class="section-title">About</h1>
        <div class="about-content">
          <img src="../assets/4.jpg" class="about-pic" alt="">
          <div class="about-text">
            <h2>Hi! I'm Darkcode</h2>
            <h3>
              <span>Developer</span>
              <span>Designer</span>
              <span>Youtuber</span>
            </h3>

            <p>《彩虹岛》又名《彩虹岛Online》，是一款由韩国游戏公司Actoz Soft开发，2007年2月由盛趣游戏
              [1] 代理的休闲网络游戏，是一款拥有童话般可爱风格的横卷轴动作网游。
              《彩虹岛》以变化无穷的武器锻造、畅快淋漓的劲暴格斗和不断成长的宠物养成为特色，
              搭配清新可爱的游戏画面；变化多样的创意表情和动感十足的动作设计，使玩家在一个充满神话色彩的世界中展开冒险。
            </p>
          </div>
        </div>

        <div class="skills">
          <div class="skill">
            <div class="skill-info">
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div class="skill-bar html"></div>
          </div>

          <div class="skill">
            <div class="skill-info">
              <span>CSS</span>
              <span>80%</span>
            </div>
            <div class="skill-bar css"></div>
          </div>

          <div class="skill">
            <div class="skill-info">
              <span>JavaScript</span>
              <span>70%</span>
            </div>
            <div class="skill-bar js"></div>
          </div>

          <div class="skill">
            <div class="skill-info">
              <span>PHP</span>
              <span>60%</span>
            </div>
            <div class="skill-bar php"></div>
          </div>

          <div class="skill">
            <div class="skill-info">
              <span>MySQL</span>
              <span>90%</span>
            </div>
            <div class="skill-bar mysql"></div>
          </div>

          <div class="skill">
            <div class="skill-info">
              <span>C#</span>
              <span>80%</span>
            </div>
            <div class="skill-bar cs"></div>
          </div>
        </div>
      </div>
    </section>


    <!-- Services -->
    <section id="services" class="dark">
      <div class="inner-width">
        <h1 class="section-title">Services</h1>
        <div class="services">
          <div class="service">
            <i class="iconfont icon19shuxie3x"></i>
            <h4>学习</h4>
            <p>学习才能进步。</p>
          </div>

          <div class="service">
            <i class="iconfont icon21shouye3x"></i>
            <h4>寺庙</h4>
            <p>寺庙——我国的艺术瑰宝库，
              它是我国悠久历史文化的象征。
            </p>
          </div>

          <div class="service">
            <i class="iconfont icon9daipingjia3x"></i>
            <h4>评价</h4>
            <p>好的评价能够使人虚心进步。</p>
          </div>

          <div class="service">
            <i class="iconfont icon4shuju3x"></i>
            <h4>数据</h4>
            <p>现在的互联网是大数据时代。</p>
          </div>

          <div class="service">
            <i class="iconfont icon14guanyu3x"></i>
            <h4>关于</h4>
            <p>这是一关于这个网站的事情。</p>
          </div>

          <div class="service">
            <i class="iconfont icon18dianzan3x"></i>
            <h4>点赞</h4>
            <p>长按点赞三连。</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script type="text/javascript">
  import { index } from "../../static/js/index.js"
  export default {
    name: "app",
    data() {
      return {
        menus: [
          {text: "Home"},
          {text: "About"},
          {text: "Service"},
          {text: "Education"},
          {text: "Works"},
          {text: "Contact"}
        ],
        isMenu: true,
        isActive: false,
        isChanged_a: true,
        isChanged_b: false,
       
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll)
      // this.automatic()
    },
    methods: {
      // automatic() {
      //   console.log(this.menus[0])
      // },

      menuclick(index) {
        console.log(index)
      },
      appear() {
        this.isActive = !this.isActive

      },
      change() {
        this.isChanged_a = !this.isChanged_a;
        this.isChanged_b = !this.isChanged_b;
      }
    }
  }
</script>

<style src="../../static/css/index.css"></style>
<style scoped>

</style>