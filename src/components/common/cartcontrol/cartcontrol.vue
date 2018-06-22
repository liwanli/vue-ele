<template>
	<transition name="move">
		<div id="cartcontrol">
			<transition name="move">
				<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
					<span class="inner icon-remove_circle_outline"></span>
				</div>
			</transition>
			<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
			<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
		</div>
	</transition>
</template>
<script>
	export default {
		name: "cartcontrol",
		props: {
			food:{
				type: Object
			}
		},
    data(){
      return {

      }
    },
		methods:{
			addCart(event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          this.$set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
       this.$emit('addshop', event.target);
			},
			decreaseCart(event) {
				if (!event._constructed) {
					return;
				}
				if (this.food.count) {
					this.food.count --;
				}
			}
		}
	}
</script>
<style scope lang="stylus" rel="stylesheet/stylus" >
	 @import "../../../public/stylus/_mixin.styl";
	#cartcontrol
		font-size: 0
		.cart-decrease
			display inline-block
			padding: 12px
			transition: all 0.4s linear
      &.move-enter-active, &.move-leave-active
				opacity: 1
				transform: translate3d(0, 0, 0)
			.inner 
				display: inline-block
				line-height: 48px
				font-size: 48px
				color: rgb(0, 160, 220)
				transition: all 0.4s linear
				transform: rotate(0)
			&.move-enter, &.move-leave-to
				opacity: 0
				transform: translate3d(24px, 0, 0)
				.inner 
					transform: rotate(180deg)
		.cart-count
			display inline-block
			vertical-align: top
			width: 24px
			padding-top: 12px
			line-height: 48px
			text-align: center
			font-size: 20px
			color: rgb(147, 153, 159)
		.cart-add
			display inline-block
			padding: 12px
			line-height: 48px
			font-size: 48px
			color: rgb(0, 160, 220)
</style>