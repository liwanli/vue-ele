<template>
  <div class="header">
    <div class="header-inner">
      I am header!
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted: function() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang='stylus' rel="stylesheet/stylus">
  @import '../../common/stylus/page/_header.styl'
</style>
