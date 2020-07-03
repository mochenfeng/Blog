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
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Service</a>
          <a href="">Education</a>
          <a href="">Workds</a>
          <a href="">Contact</a>
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
            <a href="#">Contact me</a>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </section>

    <p>《彩虹岛》又名《彩虹岛Online》，是一款由韩国游戏公司Actoz Soft开发，2007年2月由盛趣游戏 [1] 代理的休闲网络游戏，是一款拥有童话般可爱风格的横卷轴动作网游。
      《彩虹岛》以变化无穷的武器锻造、畅快淋漓的劲暴格斗和不断成长的宠物养成为特色，搭配清新可爱的游戏画面；变化多样的创意表情和动感十足的动作设计，使玩家在一个充满神话色彩的世界中展开冒险。</p>
  </div>
</template>


<script type="text/javascript">
  import { index } from "../../static/js/index.js"
  export default {
    name: "app",
    data() {
      return {
        isActive: false
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll)
    },
    methods: {
      appear() {
        this.isActive = !this.isActive
      },
    }
  }
</script>

<style src="../../static/css/index.css"></style>
<style scoped>

</style>