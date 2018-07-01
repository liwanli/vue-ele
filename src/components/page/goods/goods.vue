<template>
  <div id="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu-ul">
        <li v-for="(item, index) in goods" :key="index" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="food-wrapper border-1px" ref="foodsWrapper">
      <ul class="food-ul">
        <li class="food-list food-list-hook" v-for="(item, index) in goods" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item border-1px" v-for="(food, index) in item.foods" :key="index" @click="selectFood(food,$event)">
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
                  <cartcontrol @addshop="addFood" :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart ref="shopcart" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"  :selectFoods="selectFoods"></shopcart>
    <food :food="selectedFood" @addshop="addFood" ref="food"></food>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import shopcart from "@/components/common/shopcart/shopcart";
import cartcontrol from "@/components/common/cartcontrol/cartcontrol";
import food from "@/components/page/food/food";

const ERR_OK = 0;
export default {
  name: "goods",
  data() {
    return {
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },
  props: {
    seller: {
      type: Object
    },
    goods: {
      type: Array
    }
  },
  methods: {
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    },
    selectFood(food, event) {
      console.log(event)
      if (!event._constructed) {
        return;
      }
      this.selectedFood = food;
      this.$refs.food.show();
    },
    addFood(target) {
      this._drop(target);
    },
    _drop(target) {
      // 体验优化,异步执行下落动画
      this.$nextTick(() => {
        this.$refs.shopcart.drop(target);
      });
    },
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      });
    }
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
  computed: {
    currentIndex() {
      return 0;
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
  mounted: function() {
    this._initScroll();
  },
  components: {
    cartcontrol,
    shopcart,
    food
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
@import '../../../public/stylus/_mixin.styl';

#goods {
  display: flex;
  position: absolute;
  top: 348px;
  bottom: 92px;
  width: 100%;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 160px;
    width: 160px;
    background: #f3f5f7;

    .menu-ul {
      margin: 0;
      padding: 0;

      .menu-item {
        display: table;
        height: 108px;
        width: 112px;
        line-height: 28px;
        padding: 0 24px;

        &.current {
          position: relative;
          z-index: 10;
          margin-top: -2px;
          background: #fff;
          font-weight: 700;
        }

        .icon {
          display: inline-block;
          vertical-align: top;
          width: 24px;
          height: 24px;
          margin-right: 8px;
          background-size: 24px 24px;
          background-repeat: no-repeat;

          &.decrease {
            bg-image('../../../assets/images/header/decrease_1');
          }

          &.discount {
            bg-image('../../../assets/images/header/discount_1');
          }

          &.guarantee {
            bg-image('../../../assets/images/header/guarantee_1');
          }

          &.invoice {
            bg-image('../../../assets/images/header/invoice_1');
          }

          &.special {
            bg-image('../../../assets/images/header/special_1');
          }
        }
      }
    }

    .text {
      display: table-cell;
      width: 112px;
      vertical-align: middle;
      border-1px(rgba(7, 17, 27, 0.1));
      font-size: 24px;
    }
  }

  .food-wrapper {
    flex: 1;
    overflow: hidden;

    .title {
      padding-left: 28px;
      height: 52px;
      line-height: 52px;
      border-left: 4px solid #d9dde1;
      font-size: 24px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }

    .food-item {
      display: flex;
      margin: 36px;
      padding-bottom: 36px;
      border-1px(rgba(7, 17, 27, 0.1));

      &:last-child {
        border-none();
        margin-bottom: 0;
      }

      .icon {
        flex: 0 0 114px;
        margin-right: 20px;
      }

      .content {
        flex: 1;

        .name {
          margin: 4px 0 16px 0;
          height: 28px;
          line-height: 28px;
          font-size: 28px;
          color: rgb(7, 17, 27);
        }

        .desc, .extra {
          line-height: 20px;
          font-size: 20px;
          color: rgb(147, 153, 159);
        }

        .desc {
          line-height: 24px;
          margin-bottom: 16px;
        }

        .extra {
          .count {
            margin-right: 24px;
          }
        }

        .price {
          font-weight: 700;
          line-height: 48px;

          .now {
            margin-right: 16px;
            font-size: 28px;
            color: rgb(240, 20, 20);
          }

          .old {
            text-decoration: line-through;
            font-size: 20px;
            color: rgb(147, 153, 159);
          }
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 24px;
        }
      }
    }
  }
}
</style>
