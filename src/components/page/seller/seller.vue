<template>
  <div id="seller" class="seller" ref="seller">
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
      <div class="favorite" @click="toggleFavorite">
        <span class="icon-favorite" :class="{'active':favorite}"></span>
        <span class="text">{{favoriteText}}</span>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul class="supports">
          <li class="supports-item border-1px" v-for="item in seller.supports">
            <span class="icon" :class="classMap[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="100%" height="90">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>
    </div>
    <shopcart ref="shopcart" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"  :selectFoods="selectFoods"></shopcart>
  </div>
</template>

<script>
  import BScorll from 'better-scroll';
  import {saveToLocal, loadFromLocal} from '../../../public/js/localdata';
  import split from '@/components/common/split/split';
  import star from '@/components/common/star/star';
  import shopcart from "@/components/common/shopcart/shopcart";

  export default {
    name: 'seller',
    props: {
      seller:{
        type: Object
      },
      goods: {
        type: Array
      }
    },
    data () {
      return {
        favorite: loadFromLocal(this.seller.id, 'favorite', false),
      }
    },
    methods: {
      toggleFavorite(event){
        if (!event._constructed)return;
        this.favorite = !this.favorite;
        saveToLocal(this.seller.id, 'favorite', this.favorite)
      },
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScorll(this.$refs.seller, {
            click: true
          })
        }else{
          this.scroll.refresh();
        }
      },
      _initPics(){
        if (this.seller.pics) {
          let picWidth = 120,
              margin   = 6,
              width    = (picWidth + margin) * this.seller.pics.length - margin;
          this.$refs.picList.style.width = width + 'px';
          this.$nextTick(()=>{
            if (!this.picScroll) {
              this.picScroll = new BScorll(this.$refs.picWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              });
            }else{
              this.picScroll.refresh();
            }
          })

        }
      }
    },
    computed: {
      favoriteText() {
        return this.favorite ? '已收藏' : '收藏';
      },
      selectFoods() {
        let foods = [];
        this.goods.forEach(good => {
          good.foods.forEach(food => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    mounted() {
      this._initScroll();
      this._initPics();
    },
    created() {
      // dom还没有加载
      this.classMap = ['decrease','discount','guarantee','invoice','special']
    },
    watch: {
      'seller'(){
        this._initScroll();
        this._initPics();
      }
    },
    components:{
      split,
      star,
      shopcart
    }
  }
  /*
    created,创建
    mounted,挂载
    updated,更新
    destroyed销毁
    
  */
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
          list-style none
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
    .favorite
      position absolute 
      width 100px
      right 22px
      top 36px
      text-align center
      .icon-favorite
        display block
        margin-bottom 8px
        font-size 48px
        line-height 1
        color #d4d6d9
        &.active
          color rgb(240, 20, 20)
      .text
        font-size 20px
        line-height 1
        color rgb(77, 85, 93)
    .bulletin
      position relative
      padding 36px 36px 0 36px
      .title
        margin-bottom 16px
        font-size 28px
        line-height 1
        color rgb(7, 17, 27)
      .content-wrapper
        padding 0 24px 32px 24px
        border-1px(rgba(7, 17, 27, 0.1))
        .content
          line-height 48px
          font-size 24px
          color rgb(240, 20, 20)
      .supports
        position relative
        .supports-item
          padding 32px 24px
          border-1px(rgba(7, 17, 27, 0.1))
          font-size 0
          &:last-child
            border-none()
          .icon
            display inline-block
            width 32px
            height 32px
            vertical-align top
            margin-right 12px
            background-size 32px 32px
            background-repeat no-repeat
            &.decrease
              bg-image('../../../assets/images/seller/decrease_4')
            &.discount
              bg-image('../../../assets/images/seller/discount_4')
            &.guarantee
              bg-image('../../../assets/images/seller/guarantee_4')
            &.invoice
              bg-image('../../../assets/images/seller/invoice_4')
            &.special
              bg-image('../../../assets/images/seller/special_4')
          .text
            line-height 32/24
            font-size 24px
            color rgb(7, 17, 27)
    .pics
      padding: 36px
      .title
        margin-bottom: 24px
        line-height: 1
        color: rgb(7, 17, 27)
        font-size: 28px
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 12px
            width: 240px
            height: 180px
            &:last-child
              margin: 0
    .info
      padding: 36px 36px 96px 36px
      color: rgb(7, 17, 27)
      .title
        padding-bottom: 24px
        line-height: 1
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 28px
      .info-item
        padding: 32px 24px
        list-style none
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 24px
        line-height: 1.4
        &:last-child
          border-none()

</style>
