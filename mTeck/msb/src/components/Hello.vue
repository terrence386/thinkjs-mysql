<template>
  <div class="hello">
  	<swiper :list="demo01_list" auto v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <div class="home-list">
      <div class="home-item">
        <div class="home-item-img">
          <img src="../assets/m_p.png" width="25" height="25" alt="title" />
        </div>
        <div class="home-item-content">
        <span>多人业务</span>
        </div>
      </div>
      <div class="home-item">
        <div class="home-item-img">
          <img src="../assets/s_p.png" width="25" height="25" alt="title" />
        </div>
        <div class="home-item-content">
          <span>单人业务</span>
        </div>
      </div>
      <div class="home-item">
        <div class="home-item-img">
          <img src="../assets/m_m.png" width="25" height="25" alt="title" />
        </div>
        <div class="home-item-content">
          <span>任务管理</span>
        </div>
      </div>
      <div class="home-item">
        <div class="home-item-img">
          <img src="../assets/m_s.png" width="25" height="23" alt="title" />
        </div>
        <div class="home-item-content">
        <span>我的主页</span>
        </div>
      </div>
      <div class="home-item">
        <div class="home-item-img">
          <img src="../assets/v_m.png" width="25" height="23" alt="title" />
        </div>
        <div class="home-item-content">
        <span>直播管理</span>
        </div>
      </div>
    </div>
    <!--底部导航-->
    <tabbar class="tabbar">
      <tabbar-item link="/component/hello">
        <img slot="icon" src="../assets/home.png" height="24" width="24">
        <span slot="label" class="tabber-text">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/component/Mission">
        <img slot="icon" src="../assets/mission.png" height="24" width="24">
        <span slot="label" class="tabber-text">任务</span>
      </tabbar-item>
      <tabbar-item selected link="/login/Login">
        <img slot="icon" src="../assets/find.png" height="24" width="25">
        <span slot="label" class="tabber-text">发现</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/message.png" height="24" width="26">
        <span slot="label" class="tabber-text">消息</span>
      </tabbar-item>
      <tabbar-item link="/user/User">
        <img slot="icon" src="../assets/user.png" height="23" width="24">
        <span slot="label" class="tabber-text">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Group, Cell, Swiper, SwiperItem, Grid, GridItem, Tabbar, TabbarItem } from 'vux'
// import http from '../../http/http'
// import
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: require('../assets/home_nav.png'),
  title: '送你一次旅行'
}]

export default {
  components: {
    Group,
    Cell,
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem
  },
  name: 'hello',
  data () {
    return {
      demo01_list: baseList,
      demo01_index: 0,
      msg: 'Welcome to Your Vue.js App',
      title: '多人业务'
    }
  },
  created () {
    console.log(this)
    // this.$http.send().then((response) => {
    //   console.log(response)
    // }, (response) => {
    //  // console.log(response)
    //   console.log('出现错误')
    // })
    this.$http.jsonp('http://192.168.8.59/weixinvip/VIP/ERP/Home/api.ashx?a=getwxativity&i=1').then((response) => {
      console.log(response)
    }, (response) => {
     // console.log(response)
      console.log('出现错误')
    })
  },
  methods: {
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: #F4F0EF;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration:none;
}
p{
  margin:0 !important;
}
.weui-tabbar{
  position: fixed;
}
.weui-grid{
  padding:0;
}
.grid-center{
  font-size:.5rem;
  white-space: nowrap;
  margin-top:-15px;
}
.m-item{
  border-radius:50%;
}
.home-list{
  padding:10px;
  background-color: #F4F0EF;
  margin-bottom: 53px;
}
.home-item{
  text-align: left;
  padding:0;
  border-radius: 5px;
  background-color: #fff;
  min-height: 40px;
  padding:10px 0;
  line-height: 40px;
  margin-bottom: 10px;
  padding-left: 25px;
  display: flex;
  align-items: center;
}
.home-item-img img{
  vertical-align: middle;
}
.home-item-content{
  line-height: 40px;
  padding-left: 10px;
}
.home-item-content span{
  display: inline-block;
  vertical-align: middle;
}
.tabber-text{
  color:#000;
}
.tabbar{
  background-color: #fff;
}
</style>
