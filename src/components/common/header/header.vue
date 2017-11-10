<template>
  <div id="header">
    <div class="header-inner">
      <div class="avatar">
        <img :src="seller.avatar" alt="logo">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon iconfont icon-zuoyoujiantou"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon iconfont icon-zuoyoujiantou"></i>
    </div>
    <div class="backgroundImg">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail" @click="hideDetail" transition="fade">
        <div class="detail-wrapper">
          <div class="detail-inner">
            <h1 class="name">{{seller.name}}</h1>
          </div>
          <div class="star-wrapper">
            <div :size="48" :score="seller.score"></div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="iconfont icon-cha"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false,
    }
  },
  methods: {
    showDetail(){
      this.detailShow = true;
      document.body.style='overflow:hidden'
    },
    hideDetail(){
      this.detailShow = false;
      document.body.style='overflow:auto'
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  mounted: function() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang='stylus' rel="stylesheet/stylus">
 @import '../../../public/stylus/common/_header.styl'
</style>
