<template>
	<div id="cartcontrol">
		<div class="cart-decrease" v-show="food.count>0" @click="decreaseCart($event)" transition="move">
			<span class="inner icon-remove_circle_outline"></span>
		</div>
		<div class="cart-count">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click="addCart($event)"></div>
	</div>
</template>
<script>
 import Vue from 'Vue';
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
					Vue.set(this.food, 'count', 1);
				}else{
					this.food.count++;
				}
				console.log(this.food)
			},
			decreaseCart(event) {
				if (!event._constructed) {
					return;
				}
				if (this.food.count) {
					this.food.count --;
				}
			}
		},
		created(){
			// console.log(this.food)
		}
	}
</script>
<style scope lang="stylus" rel="stylesheet/stylus" >
	 @import "../../../public/stylus/base/_mixin.styl";
	#cartcontrol
		font-size: 0
		.cart-decrease
			display inline-block
			padding: rem(12)
			transition: all 0.4s linear
      &.move-transition
				opacity: 1
				transform: translate3d(0, 0, 0)
				.inner 
					display: inline-block
					line-height: 24px
					font-size: 24px
					color: rgb(0, 160, 220)
					transition: all 0.4s linear
					transform: rotate(0)
			&.move-enter, &.move-leave
				opacity: 0
				transform: translate3d(24px, 0, 0)
				.inner 
					transform: rotate(180deg)
		.cart-count
			display inline-block
			vertical-align: top
			width: rem(24)
			padding-top: rem(12)
			line-height: rem(48)
			text-align: center
			font-size: rem(20)
			color: rgb(147, 153, 159)
		.cart-add
			display inline-block
			padding: rem(12)
			line-height: rem(48)
			font-size: rem(48)
			color: rgb(0, 160, 220)
</style>