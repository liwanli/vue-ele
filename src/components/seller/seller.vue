<template>
  <div class="seller">
      <div class="seller">
        <div class="seller-inner">
          <aside id="aside">
            <div class="aside-inner">
                this is aside!
            </div>
          </aside>
          <article id="article">
            <div class="article-inner">
              this is article!
            </div>
          </article>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'seller',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../common/stylus/page/_seller.styl'
</style>
