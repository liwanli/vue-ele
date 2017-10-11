<template>
  <div id="app">
    <!-- header 头部内容 Star -->
    <v-header></v-header>
    <!-- header 头部内容 End -->
    <!-- 切换菜单 Star -->
    <nav id="tab">
      <div class="tab-inner">
        I am tab !
        <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/goods">/goods</router-link></li>
        <li><router-link to="/seller">/seller</router-link></li>
        <router-link tag="li" to="/bar">/bar</router-link>
      </ul>
      </div>
    </nav>
    <!-- 切换菜单 End -->

    <div class="main">
      <div class="main-inner">
        <router-view></router-view>
      </div>
    </div>
    <footer id="footer">
      <div class="footer-inner">
        I am footer!
      </div>
    </footer>
  </div>
</template>

<script>
  import header from './components/header/header';
  export default {
    name: 'app',
    components:{
      'v-header' : header
    }
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  @import 'common/stylus/common.styl'
</style>
