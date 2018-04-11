<template>
  <div id="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>

    </div>
    <div class="food-wrapper border-1px">
      <div v-for="item in goods">
        <h1 class="title">{{item.name}}</h1>
        <ul>
          <li class="food-item border-1px" v-for="food in item.foods">
            <span class="icon">
              <img width="100%" :src="food.icon">
            </span>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extar">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="now">
                  ￥{{food.price}}
                </span>
                <span class="old" v-show="food.oldPrice">
                  ￥{{food.oldPrice}}
                </span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cartcontrol from '@/components/common/cartcontrol/cartcontrol'
const ERR_OK = 0;
export default {
  name: 'goods',
  data () {
    return {
      goods: []
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.error==ERR_OK) {
        this.goods = response.data;
      }
    })  
  },
  methods: {

  },
  mounted: function() {
  },
  components: {
   'cartcontrol':cartcontrol
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
  @import '../../../public/stylus/base/_mixin.styl'
  #goods
    display flex
    position absolute
    top rem(348)
    bottom rem(92)
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 rem(80*2)
      width rem(80*2)
      background: #f3f5f7
      .menu-item
        display:table
        height: rem(54*2)
        width: rem(56*2)
        line-height rem(14*2)
        padding: 0 rem(12*2)
        .icon
          display inline-block
          vertical-align top
          width rem(24)
          height rem(24)
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
          display: table-cell
          width: rem(112)
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: rem(24)
    .food-wrapper
      flex 1
      overflow hidden
      .title
        padding-left rem(28)
        height rem(52)
        line-height rem(52)
        border-left rem(4) solid #d9dde1
        font-size rem(24)
        color rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: rem(36)
        padding-bottom: rem(36)
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 rem(114)
          margin-right: rem(20)
        .content
          flex: 1
          .name
            margin: rem(4) 0 rem(16) 0
            height: rem(28)
            line-height: rem(28)
            font-size: rem(28)
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: rem(20)
            font-size: rem(20)
            color: rgb(147, 153, 159)
          .desc
            line-height: rem(24)
            margin-bottom: rem(16)
          .extra
            .count
              margin-right: rem(24)
          .price
            font-weight: 700
            line-height: rem(48)
            .now
              margin-right: rem(16)
              font-size: rem(28)
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: rem(20)
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: rem(24)
</style>
