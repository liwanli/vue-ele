<template>
<div>
  <div class="shopcart" id="shopcart">
    <div class="content" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount>0}">
            <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>          
      </div>
      <div class="content-right" >
        <div class="pay not-enough" :class="payClass" @click.stop.prevent="pay">
          {{payDesc}}
        </div>
      </div>
    </div>
    <div class="ball-container">
      <div>
        <!--  @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop" -->
        <transition name="drop">
          <div class="ball">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="empty">清空</span>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li class="food" v-for="(foodItem,index) in selectFoods" v-bind:key="index">
              <span class="name">{{foodItem.name}}</span>
              <div class="price">
                <span>￥{{foodItem.price*foodItem.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="foodItem"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
  <transition name="fade">
    <div class="list-mask" tran @click="hideList" v-show="listShow"></div>
  </transition>
</div>
</template>

<script>
  import BScroll from 'better-scroll';
	import cartcontrol from '@/components/common/cartcontrol/cartcontrol'
  export default {
    props: {
      selectFoods:{
        type: Array,
        default() {
          return [
            {
              price: 10,
              count: 1
            }
          ];
        }
      },
      minPrice:{
        type: Number,
        default: 0
      },
      deliveryPrice:{
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        dropBalls: [],
        fold: true
      };
    },
    computed: {
      //总价格
      totalPrice() {
        let price = 0;
        this.selectFoods.forEach(food => {
          price += food.price * food.count;
        });
        return price;
      },
      //总数量
      totalCount() {
        let count = 0;
        this.selectFoods.forEach(food => {
          count += food.count;
        });
        return count;
      },
      //支付显示
      payDesc() {
        if (this.totalPrice > 0) {
          return `￥${this.minPrice}元起送`;
        } else if ( this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差￥${diff}元起送`;
        } else {
          return '去结算';
        }
      },
      payClass() {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      },
      listShow(){
        if (!this.totalCount) {
          this.fold = true;
          return false;
        }
        if (!this.fold) {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        }
        return !this.fold;
      }
    },
    methods: {
      drop(el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      toggleList() {
        if (!this.totalCount) {
          return;
        }
        this.fold = !this.fold;
      },
      hideList(){
        this.fold = true;
      },
      //清空
      empty(){
        this.selectFoods.forEach(function(food){
          food.count = 0;
        })
      },
      //支付
      pay(){
        if (this.totalPrice>this.minPrice) {
          alert(`需要支付${this.totalPrice}元`)
        }
      }

    },
    components: {
      cartcontrol
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
  @import '../../../public/stylus/_mixin.styl'

  #shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 96px
    .content
      display: flex
      background: #141d27
      font-size: 0
      color: rgba(255, 255, 255, 0.4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -20px
          margin: 0 24px
          padding: 12px
          width: 112px
          height: 112px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            &.highlight
              background: rgb(0, 160, 220)
            .icon-shopping_cart
              line-height: 88px
              font-size: 48px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 48px
            height: 32px
            line-height: 32px
            text-align: center
            border-radius: 32px
            font-size: 18px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 24px
          line-height: 48px
          padding-right: 24px
          box-sizing: border-box
          border-right: 2px solid rgba(255, 255, 255, 0.1)
          font-size: 32px
          font-weight: 700
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin: 24px 0 0 24px
          line-height: 48px
          font-size: 20px
      .content-right
        flex: 0 0 210px
        width: 210px
        .pay
          height: 96px
          line-height: 96px
          text-align: center
          font-size: 24px
          font-weight: 700
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: rgb(0, 160, 220)
          transition: all 0.4s linear
    .shopcart-list
      position: absolute
      left: 0
      top: 0
      z-index: -1
      width: 100%
      transform: translate3d(0, -100%, 0)
      &.fold-enter-active, &.fold-leave-active
        transition: all 0.5s
      &.fold-enter, &.fold-leave-active
        transform: translate3d(0, 0, 0)
      .list-header
        height: 80px
        line-height: 80px
        padding: 0 36px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title
          float: left
          font-size: 28px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 24px
          color: rgb(0, 160, 220)

      .list-content
        padding: 0 36px
        max-height: 217px
        overflow: hidden
        background: #fff
        .food
          position: relative
          padding: 24px 0
          box-sizing: border-box
          border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height: 48px
            font-size: 28px
            color: rgb(7, 17, 27)
          .price
            position: absolute
            right: 180px
            bottom: 24px
            line-height: 48px
            font-size: 28px
            font-weight: 700
            color: rgb(240, 20, 20)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
  .list-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 40
    backdrop-filter: blur(10px)
    opacity: 1
    background: rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: rgba(7, 17, 27, 0)

</style>