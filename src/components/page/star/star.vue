<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
export default {
  name: 'star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    itemClasses(){
      let result = [];
      let score = Math.floor(this.score)
      let hasDecimal = this.score % 1 !==0;

      for (var i = 0; i < score; i++) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF);
      }

      while(result.length < LENGTH) {
        result.push(CLS_OFF);
      }

      return result;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../public/stylus/_mixin.styl'
  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: rem(40)
        height: rem(40)
        margin-right: rem(44)
        background-size: rem(40) rem(40)
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../../assets/images/star/star48_on')
        &.half
          bg-image('../../../assets/images/star/star48_half')
        &.off
          bg-image('../../../assets/images/star/star48_off')
    &.star-36
      .star-item
        width: rem(30)
        height: rem(30)
        margin-right: rem(12)
        background-size: rem(30) rem(30)
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../../assets/images/star/star36_on')
        &.half
          bg-image('../../../assets/images/star/star36_half')
        &.off
          bg-image('../../../assets/images/star/star36_off')
    &.star-24
      .star-item
        width: rem(20)
        height: rem(20)
        margin-right: rem(6)
        background-size: rem(20) rem(20)
        &:last-child
          margin-right: 0
        &.on
          bg-image('../../../assets/images/star/star24_on')
        &.half
          bg-image('../../../assets/images/star/star24_half')
        &.off
          bg-image('../../../assets/images/star/star24_off')

</style>
