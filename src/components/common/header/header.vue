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
          </div>
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
        <div class="detail-close" @click="hideDetail">
          <i class="iconfont icon-cha"></i>
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
      document.body.style='overflow:hidden'
    },
    hideDetail(){
      this.detailShow = false;
      document.body.style='overflow:auto'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../../public/stylus/base/_mixin.styl";

#vheader
  position relative
  color: #fff
  overflow hidden
  background: rgba(7, 17, 27, 0.5)
  .header-inner
    position relative
    padding rem(48) rem(24) rem(36) rem(48)
    font-size 0
    .avatar
      display inline-block
      vertical-align top
      img
        width rem(128)
        height rem(128)
        border-radius rem(8)
    .content
      display inline-block
      margin-left rem(32)
      .title
        margin rem(4) 0 rem(16) 0
        .brand
          width rem(60)
          height rem(36)
          display inline-block;
          bg-image('../../../assets/images/header/brand')
          background-size rem(60) rem(36)
          background-repeat no-repeat
        .name
          margin-left rem(12)
          font-size 100%
          line-height rem(36)
          font-weight bold
          vertical-align top
      .description
        margin-bottom rem(20)
        line-height rem(24)
        font-size rem(24)
      .support
        margin-bottom rem(4)
        .icon
          display inline-block
          width rem(24)
          height rem(24)
          vertical-align top
          margin-right rem(8)
          background-size rem(24) rem(24)
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
          line-height rem(24)
          font-size rem(24)
          vertical-align top
    .supports-count
      padding 0 rem(28)
      position absolute
      right rem(24)
      bottom rem(32)
      height rem(48)
      line-height rem(48)
      border-radius rem(24)
      background rgba(0, 0, 0, 0.2)
      text-align center
      font-size rem(20)
      cursor pointer
      .count
        font-size rem(20)
        vertical-align top
      .icon
        margin-left rem(4)
        line-height rem(48)
        font-size rem(20)
  .bulletin-wrapper
    position relative
    background-color rgba(7, 17, 27, 0.2)
    height rem(56)
    line-height rem(56)
    padding 0 rem(44) 0 rem(24)
    white-space normal
    overflow hidden
    text-overflow ellipsis
    .bulletin-title
      display inline-block
      vertical-align top
      margin-top rem(16)
      width rem(44)
      height rem(24)
      bg-image('../../../assets/images/header/bulletin')
      background-size rem(44) rem(24)
      background-repeat no-repeat
    .bulletin-text
      vertical-align top
      margin 0 rem(8)
      font-size rem(20)
    .icon 
      position absolute
      font-size rem(40)
      right rem(24)
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
    filter blur(rem(10))
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
        margin-top rem(128)
        padding-bottom rem(128)
        .name
          line-height rem(32)
          text-align center
          font-size rem(32)
          font-weight 700px
      .star-wrapper
        margin-top 18px
        padding 2px 0
        text-align center
        .title
          width 80%
          display flex
          margin 28px auto 0 auto
          .line
            flex: 1
            position relative
            top -6px
            border-bottom 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding 0px 12px
            font-size 16px
            font-weight 700px
      //   .supports
      //     width 80%
      //     margin 22px auto
      //     .support-item
      //       padding 0 12px
      //       font-size 0px
      //       margin-bottom 12px
      //       &:last-child
      //         margin-bottom 0px
      //       .icon
      //         display inline-block
      //         width 16px
      //         height 16px
      //         vertical-align top
      //         margin-right 6px
      //         background-size 16px 16px
      //         background-repeat no-repeat
      //         &.decrease
      //          bg-image('../../../assets/images/header/decrease_2')
      //         &.discount
      //           bg-image('../../../assets/images/header/discount_2')
      //         &.guarantee
      //           bg-image('../../../assets/images/header/guarantee_2')
      //         &.invoice
      //           bg-image('../../../assets/images/header/invoice_2')
      //         &.special
      //           bg-image('../../../assets/images/header/special_2')
      //       .text
      //         line-height 12px
      //         font-size 12px
      //         color #ffffff
      //   .bulletin
      //     width 80%
      //     height 200px
      //     margin 22px auto
      //     .content
      //      padding 0 12px
      //      line-height 24px
      //      font-size 12px
    .detail-close
      position relative
      width rem(62)
      height rem(62)
      margin rem(-128) auto 0 auto
      clear both
      font-size rem(62)
</style>
