<template>
  <div class="login" v-bind:style="{ height: height+'px' }">
  	<tab active-color="#909" :line-width = '1'>
     <tab-item selected>待确认</tab-item>
     <tab-item>已确认</tab-item>
     <tab-item>全部</tab-item> 
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
  components: {
    Tab,
    TabItem
  },
  name: 'login',
  data () {
    return {
      url: require('../../assets/login_bg.png'),
      msg: 'Welcome to Your Vue.js App',
      title: '多人业务',
      height: 0
    }
  },
  created () {
    console.log(this)
    this.$http.jsonp('http://192.168.8.59/weixinvip/VIP/ERP/Home/api.ashx?a=getwxativity&i=1').then((response) => {
      console.log(response)
    }, (response) => {
     // console.log(response)
      console.log('出现错误')
    })
    // getHeight: function () {
    this.height = window.screen.height
    //  return window.screen.height
    // }
  },
  methods: {
    splice: function () {
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
