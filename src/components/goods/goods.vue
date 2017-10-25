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
              <p>
                  {{count}}
                  <button @click="inc()">+</button>
                  <button @click="dec()">-</button>
              </p>
              <ul>
                <li v-for="(item,index) in articles">{{item.title}}</li>
              </ul>
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
      msg: Object,
      articles: Array(),
      count:0
    }
  },
  methods: {
    inc () {
      this.count++
    },
    dec () {
      this.count--
    }
  },
  mounted: function() {
    // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
    //     headers: {

    //     },
    //     emulateJSON: true
    // }).then(function(response) {
    //     this.articles = response.data.subjects
    //     console.log(this.articles)
    // }, function(error) {
    //     console.log('error')
    // });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../common/stylus/page/_goods.styl'
</style>
