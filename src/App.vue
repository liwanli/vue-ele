<template>
  <div id="app">
    <!-- header 头部内容 Star -->
    <v-header v-bind:seller="seller"></v-header>
    <!-- header 头部内容 End -->
    <!-- 切换菜单 Star -->
    <div class="tab border-1px">
      <div class="tab-item"><router-link tag="a" to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link tag="a" to="/seller">评价</router-link></div>
      <div class="tab-item"><router-link tag="a" to="/bar">商家</router-link></div>
    </div>
    <!-- 切换菜单 End -->
    <router-view></router-view>

  <!--   <footer id="footer">
      <div class="footer-inner">
      

      </div> -->
    </footer>
  </div>
</template>

<script>
  import header from '@/components/common/header/header';
  import BScroll from 'better-scroll';

  const ERR_OK = 0;
  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    created(){
      this.$http.get('/api/seller').then((response)=>{
        response = response.body;
        if (response.error == ERR_OK) {
          this.seller = response.data;
        }
      });
    },
    components:{
      'v-header' : header
    }
  }
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
  @import './public/stylus/_mixin.styl'
  #app
    .tab
      display flex
      width 100%
      align-item: center;
      height 79px
      line-height 79px
      border-bottom 2px solid rgba(7,17,27,0.1)
      .tab-item
        flex: 1
        justfiy-content: center;
        text-align: center
        a 
          display: block
          font-size 28px
          text-decoration none
          color: rgb( 77, 85, 93)
        .active
          color: rgb( 240, 20, 20)
      
</style>
