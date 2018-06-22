<template>
  <div id="seller" class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{690}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{20}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{4}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{39}}</span>分钟
            </div>
          </li>
        </ul>
      </div>
      <div class="favorite"></div>
      <split></split>
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
  import split from '@/components/common/split/split';
  import star from '@/components/common/star/star';
  export default {
    name: 'seller',
    props: {
      seller:{
        type: Object
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      split,
      star
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
  @import '../../../public/stylus/_mixin.styl';
  #seller 
    position absolute
    top 344px
    bottom 0
    left 0
    width 100%
    overflow hidden
    .overview
      position relative
      padding 36px
      .title 
        font-size 28px
        line-height 1
        margin-bottom 16px
        color: rgb(7, 17, 27)
      .desc
        padding-bottom 36px
        border-1px(rgba(7, 17, 27, 0.1))
        font-size 0
        .star
          display inline-block
          margin-right 16px
          vertical-align top
        .text
          font-size 20px
          line-height 1.3
          display inline-block
          vertical-align top
          margin-right 24px
          font-size 20px
          color: rgb(77, 85, 93)
      .remark
        display flex
        padding-top 36px
        .block
          flex 1
          text-align center
          border-right 1px solid rgba(7, 17, 27, 0.1)
          &:last-child
            border none
          h2
            margin-bottom 8px
            font-size 20px
            line-height 1
            font-weight 200
            color rgb(147, 153, 159)
          .content
            line-height 48px
            font-size: 20px
            color: rgb(7, 17, 27)
            .stress
              font-size 48px

</style>
