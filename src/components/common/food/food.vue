<template>
	<div id="food" v-show="showflag"></div>	
</template>
<script>
	export default {
		name: 'food',
		props: {
			food:{
				type: Object
			}
		},
		data(){
			return {

			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus" >
	 @import '../../../public/stylus/base/_mixin.styl'
	#food
		position: fixed
		bottom: rem(96)
		z-index: 30; 
		width 100%;
		left: 0;
		top: 0;
		background-color #fff
</style>