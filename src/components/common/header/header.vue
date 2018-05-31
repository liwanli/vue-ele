<template>
  <div id="vheader">
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
        <i class="icon iconfont icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon iconfont icon-keyboard_arrow_right"></i>
    </div>
    <div class="backgroundImg">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail" @click="hideDetail" transition="fade">
        <div class="detail-wrapper">
          <div class="detail-inner">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <v-star :size="36" :score="seller.score"></v-star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <div class="supports" v-if="seller.supports">
              <ul>
                <li class="support-item" v-for="(item,index) in seller.supports" track-by>
                  <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                  <span class="text">{{seller.supports[index].description}}</span>
                </li>

              </ul>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="iconfont icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import star from '@/components/page/star/star.vue';
export default {
  name: 'vheader',
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
  components: {
    "v-star" : star
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  mounted: function() {
  },
  methods: {
    showDetail(){
      this.detailShow = true;
    },
    hideDetail(){
      this.detailShow = false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../../public/stylus/_mixin.styl";

#vheader
  position relative
  color: #fff
  overflow hidden
  background: rgba(7, 17, 27, 0.5)
  .header-inner
    position relative
    padding 48px 24px 36px 48px
    font-size 0
    .avatar
      display inline-block
      vertical-align top
      img
        width 128px
        height 128px
        border-radius 8px
    .content
      display inline-block
      margin-left 32px
      .title
        margin 4px 0 16px 0
        .brand
          width 60px
          height 36px
          display inline-block;
          bg-image('../../../assets/images/header/brand')
          background-size 60px 36px
          background-repeat no-repeat
        .name
          margin-left 12px
          font-size 100%
          line-height 36px
          font-weight bold
          vertical-align top
      .description
        margin-bottom 20px
        line-height 24px
        font-size 24px
      .support
        margin-bottom 4px
        .icon
          display inline-block
          width 24px
          height 24px
          vertical-align top
          margin-right 8px
          background-size 24px 24px
          background-repeat no-repeat
          &.decrease
            bg-image('../../../assets/images/header/decrease_1')
          &.discount
            bg-image('../../../assets/images/header/discount_1')
          &.guarantee
            bg-image('../../../assets/images/header/guarantee_1')
          &.invoice
            bg-image('../../../assets/images/header/invoice_1')
          &.special
            bg-image('../../../assets/images/header/special_1')
        .text
          line-height 24px
          font-size 24px
          vertical-align top
    .supports-count
      padding 0 28px
      position absolute
      right 24px
      bottom 32px
      height 48px
      line-height 48px
      border-radius 24px
      background rgba(0, 0, 0, 0.2)
      text-align center
      font-size 20px
      cursor pointer
      .count
        font-size 20px
        vertical-align top
      .icon
        margin-left 4px
        line-height 48px
        font-size 20px
  .bulletin-wrapper
    position relative
    background-color rgba(7, 17, 27, 0.2)
    height 56px
    line-height 56px
    padding 0 44px 0 24px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    .bulletin-title
      display inline-block
      vertical-align top
      margin-top 16px
      width 44px
      height 24px
      bg-image('../../../assets/images/header/bulletin')
      background-size 44px 24px
      background-repeat no-repeat
    .bulletin-text
      vertical-align top
      margin 0 8px
      font-size 20px
    .icon 
      position absolute
      font-size 40px
      right 24px
      top: 0
    .icon-keyboard_arrow_right {
      position: absolute;
      font-size: 10px;
      right: 12px;
      top: 8px;
    }
  .backgroundImg
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    z-index -1
    filter blur(10px)
  .detail
    position fixed
    z-index 100
    top 0
    right 0
    width 100%
    height 100%
    overflow auto
    background rgba(7, 17, 27, 0.8)
    -webkit-backdrop-filter blur(10px)
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .5s ease     
    &.fade-enter, &.fade-leave-active
      opacity: 0
    .detail-wrapper
      width 100%
      min-height 100%
      .detail-inner
        margin-top: 128px
        padding-bottom: 128px
        .name
          font-size 32px
          font-weight 700
          text-align: center
          color rgb(255,255,255)
          line-height 32px
        .star-wrapper
          margin-top: 36px
          padding: 4px 0
          text-align: center
        .title
          width 80%
          display flex
          margin: 56px auto 48px auto
          .line
            flex: 1
            position relative
            top -12px
            border-bottom 2px solid rgba(255, 255, 255, 0.2)
          .text
            padding: 0 24px
            font-weight: 700
            font-size: 28px
        .supports
          width 80%
          margin 44px auto
          .support-item
            padding 0 24px
            font-size 0px
            margin-bottom 24px
            &:last-child
              margin-bottom 0px
            .icon
              display inline-block
              width 32px
              height 32px
              vertical-align top
              margin-right 12px
              background-size 32px 32px
              background-repeat no-repeat
              &.decrease
               bg-image('../../../assets/images/header/decrease_2')
              &.discount
                bg-image('../../../assets/images/header/discount_2')
              &.guarantee
                bg-image('../../../assets/images/header/guarantee_2')
              &.invoice
                bg-image('../../../assets/images/header/invoice_2')
              &.special
                bg-image('../../../assets/images/header/special_2')
            .text
              line-height 24px
              font-size 24px
              color #ffffff
        .bulletin
          width: 80%
          margin: 0 auto
          .content
            padding: 0 24px
            line-height: 48px
            font-size: 24px
    .detail-close
      position: relative
      width: 64px
      height: 64px
      margin: 32px auto 0 auto
      clear: both
      font-size: 64px
</style>
