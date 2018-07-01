<template>
  <div class="ratings" ref="ratings">
   <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <div class="score">{{seller.score}}</div>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.foodScore}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
          <ratingselect @select="selectRating" @toggle="toggleContent" :select-type="selectType" :desc="desc" :ratings="ratings" :only-content="onlyContent"></ratingselect>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item border-1px"  v-show="needShow(rating.rateType,rating.text)" v-for="rating in ratings" >
            <div class="user">
              <span class="name">{{rating.username}}</span>
              <img class="avatar" width="12" height="12" :src="rating.avatar">
            </div>
            <div class="time">{{rating.rateTime}}</div>
            <p class="text">
              <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
            </p>
          </li>
          <!-- <li class="rating-item border-1px" v-show="needShow(rating.rateType,rating.text)"  v-for="rating in food.ratings">暂无评论  -->
          </li>
        </ul>
        <div class="no-rating" v-show="!ratings || !ratings.length">暂无评论</div>
      </div>
    </div>
    <shopcart ref="shopcart" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"  :selectFoods="selectFoods"></shopcart>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import star from "@/components/common/star/star.vue";
import split from "@/components/common/split/split.vue";
import ratingselect from "@/components/common/ratingselect/ratingselect.vue";
import shopcart from "@/components/common/shopcart/shopcart.vue";
  const ALL = 2;
  const ERR_OK = 0;

export default {
  name: 'ratings',
  props: {
    seller:{
      type: Object
    },
    ratings: {
      type: Array
    },
    goods: {
      type: Array
    }
  },
  data(){
    return {
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  methods:{
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
  computed:{
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
  created() {
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.ratings, {
      click: true
    });
  },
  components:{
    star,
    split,
    ratingselect,
    shopcart
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../public/stylus/_mixin.styl';
  .ratings
    position absolute
    top 348px
    bottom 0
    left 0
    width 100%
    overflow hidden
    .overview
      display flex
      padding 36px 0
      .overview-left
        flex 0 0 274px
        padding 12px 0
        width 274px
        border-right 1px solid rgba(7, 17, 27, 0.1)
        text-align center
        .score
          margin-bottom 12px
          line-height 56px
          font-size 48px
          color rgb(255, 153, 0)
        .title
          margin-bottom 16px
          line-height 24px
          font-size 24px
          color rgb(7, 17, 27)
        .rank
          line-height 1
          font-size 20px
          color rgb(147, 153, 159)
      .overview-right
        flex 1
        padding 12px 0 12px 48px
        .score-wrapper
          margin-bottom: 16px
          font-size: 0
          .title
            display: inline-block
            vertical-align: top
            font-size: 24px
            color: rgb(7, 17, 27)
          .star
            display: inline-block
            margin: 0 24px
            vertical-align: top
          .score
            display: inline-block
            line-height: 36px
            vertical-align: top
            font-size: 24px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            font-size: 24px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 24px
            font-size: 24px
            color: rgb(147, 153, 159)
    .rating-wrapper
      padding: 0 36px 96px
      .rating-item
        position: relative
        padding: 32px 0
        list-style-type: none
        border-1px(rgba(7, 17, 27, 0.1))
        .user
          position: absolute
          right: 0
          top: 32px
          line-height: 24px
          font-size: 0
          .name
            display: inline-block
            margin-right: 12px
            vertical-align: top
            font-size: 20px
            color: rgb(147, 153, 159)
          .avatar
            border-radius: 50%
        .time
          margin-bottom: 12px
          line-height: 24px
          font-size: 20px
          color: rgb(147, 153, 159)
        .text
          line-height: 32px
          font-size: 24px
          color: rgb(7, 17, 27)
          .icon-thumb_up, .icon-thumb_down
            margin-right: 8px
            line-height: 32px
            font-size: 24px
          .icon-thumb_up
            color: rgb(0, 160, 220)
          .icon-thumb_down
            color: rgb(147, 153, 159)
      .no-rating
        padding: 32px 0
        font-size: 24px
        list-style-type none
        color: rgb(147, 153, 159)
</style>
