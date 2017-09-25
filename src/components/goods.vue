<template>
  <div class="goods">
      <div class="goods">
        <div class="goods-inner">
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
  name: 'goods',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

       // this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以
        console.log('response.data.subjects')

    }, function(response) {
        // 这里是处理错误的回调
        console.log('response')
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
