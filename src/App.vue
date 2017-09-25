<template>
  <div id="app">
    <header id="header">
      <div class="header-inner">
        I am header!
      </div>
    </header>
    <nav id="nav">
      <div class="nav-inner">
        I am nav !
      </div>
    </nav>
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
  export default {
    name: 'app'
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  *
    padding:0
    margin:0
  header 
    width:100%
    height:268px
    background:url('./assets/images/header_bg.jpg')
    background-size: cover
</style>
