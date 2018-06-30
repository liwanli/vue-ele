<template>
  <transition name="slide-fade">
  	<div id="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food" @addshop="addFood"></cartcontrol>
          </div>
          <transition name="fade">
            <div class="buy" @click.stop.prevent="addFirst" v-show="!food.count || food.count===0">加入购物车
            </div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品介绍</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect @select="selectRating" @toggle="toggleContent" :select-type="selectType" :desc="desc" :ratings="food.ratings" :only-content="onlyContent"></ratingselect>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li class="rating-item border-1px" v-show="needShow(rating.rateType,rating.text)"  v-for="rating in food.ratings" v-bind:key="rating.username">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" :src="rating.avatar">
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
                </p>
              </li>
              <!-- <li class="rating-item border-1px" v-show="needShow(rating.rateType,rating.text)"  v-for="rating in food.ratings">暂无评论 
              </li>-->
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评论</div>
          </div>
        </div>
      </div>
  	</div>
  </transition>
</template>
<script>
  import {formatDate} from '../../../public/js/date.js';
  import BScroll from 'better-scroll';
  import cartcontrol from '@/components/common/cartcontrol/cartcontrol';
  import split from '@/components/common/split/split';
  import ratingselect from '@/components/common/ratingselect/ratingselect';
  
  const ALL = 2;
  export default {
    name: 'food',
    props: {
      food:{
        type: Object
      }
    },
    data(){
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    methods: {
      show(){
        this.showFlag = true;
        this.$nextTick(function(){
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food,{
              click: true
            })
          }
        })
      },
      hide() {
        this.showFlag = false;
      },
      addFirst(event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('addshop', event.target);
        this.$set(this.food, 'count', 1);
      },
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      addFood(target) {
        this.$emit('addshop', target);
      },
      selectRating(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      toggleContent() {
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    components:{
      cartcontrol,
      split,
      ratingselect
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
  @import '../../../public/stylus/_mixin.styl'
    #food
      position fixed
      left 0
      top 0
      bottom 0
      z-index 30
      width 100%
      overflow hidden
      background #fff
      &.slide-fade-enter-active,&.slide-fade-leave-active {
        transition all 0.2s linear
        transform translate3d(0, 0, 0)
      }
      &.slide-fade-enter, &.slide-fade-leave-to{
        transform translate3d(100%, 0, 0)
      }
      &.buy-enter-active .buy, &.buy-leave-active .buy
        transition all 0.2s
        opacity 1
      &.buy-enter .buy, &.buy-leave-to .buy
        opacity 0

      .image-header
        position relative
        width 100%
        height 0
        padding-top 100%
        img
          position absolute
          top 0
          left 0
          width 100%
          height 100%
        .back
          position absolute
          top 20px
          left 0
          .icon-arrow_lift
            display block
            padding 20px
            font-size 40px
            color #fff
            position relative
            padding 18px
      .content
        position relative
        padding 36px
        .title
          line-height 28px
          margin-bottom 16px
          font-size 28px
          font-weight 700
          color rgb(7, 17, 27)
        .detail
          margin-bottom 36px
          line-height 20px
          font-size 0
          .sell-count, .rating
            font-size 20px
            color rgb(147, 153, 159)
            line-height 1
          .sell-count
            margin-right 24px
        .price
          font-weight 700
          line-height 48px
          .now
            margin-right 16px
            font-size 28px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 20px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 24px
          bottom 24px
        .buy
          position absolute
          right 36px
          bottom 36px
          z-index 10
          height 48px
          line-height 48px
          padding 0 24px
          box-sizing border-box
          border-radius 24px
          font-size 20px
          color #fff
          background rgb(0, 160, 220)
      .info
        padding 36px
        .title
          line-height 28px
          margin-bottom 12px
          font-size 28px
          color rgb(7, 17, 27)
        .text
          line-height 48px
          padding 0 16px
          font-size 24px
          color rgb(77, 85, 93)
      .rating
        padding-top 36px
        padding-bottom 96px
        .title
          line-height 28px;
          margin-left 36px;
          font-size 28px;
          color #07111b;
      .rating-wrapper
        padding 0 36px
        .rating-item
          position relative
          padding 32px 0
          list-style-type none
          border-1px(rgba(7, 17, 27, 0.1))
          .user
            position absolute
            right 0
            top 32px
            line-height 24px
            font-size 0
            .name
              display inline-block
              margin-right 12px
              vertical-align top
              font-size 20px
              color rgb(147, 153, 159)
            .avatar
              border-radius 50%
          .time
            margin-bottom 12px
            line-height 24px
            font-size 20px
            color rgb(147, 153, 159)
          .text
            line-height 32px
            font-size 24px
            color rgb(7, 17, 27)
            .icon-thumb_up, .icon-thumb_down
              margin-right 8px
              line-height 32px
              font-size 24px
            .icon-thumb_up
              color rgb(0, 160, 220)
            .icon-thumb_down
              color rgb(147, 153, 159)

        .no-rating
          padding 32px 0
          font-size 24px
          list-style-type none
          color rgb(147, 153, 159)

</style>