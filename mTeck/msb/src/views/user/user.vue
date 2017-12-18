<template>
  <div class="user" style="marginBottom: 4rem">
  	<blur :blur-amount=10 :url="url" style='width:100%;height:18rem;position:relative;'>
      <div class="user-info">
        <div class="user-icon">
          <img src="../../assets/timg.jpg" style="width:6.5rem;height:6.5rem;border-radius:50%;border:3px solid #e6e6e6;" />
        </div>
        <div class="user-content">
          <p><span class="user-name">谢广坤</span><span class="recdn">已认证</span></p>
          <p class="switch">切换</p>
        </div>
      </div>
    </blur>
      <div class="float-card-box">
        <div class="float-card">
          <div>
          <router-link to="/user/HomePage">
            <img src="../../assets/uhm.png">
            <p>我的主页</p>
          </router-link>
          </div>
          <div>
          <router-link to="/serve/pservice">
            <img src="../../assets/s_o.png">
            <p>服务订单</p>
          </router-link>
          </div>
          <div>
            <img src="../../assets/p_l.png">
            <p>应聘管理</p>
          </div>
        </div>
      </div>
    <div class="manage-box">
      <grid class="user-mangage">
        <grid-item >
            <img slot="icon" src="../../assets/pig.png">
            <span slot="label">我的财务</span>
        </grid-item>
        <grid-item >
            <img slot="icon" src="../../assets/pm.png">
            <span slot="label">项目管理</span>
        </grid-item>
        <grid-item >
            <img slot="icon" src="../../assets/zb.png">
            <span slot="label">直播管理</span>
        </grid-item>
      </grid>
      <grid class="user-mangage">
        <grid-item >
            <img slot="icon" src="../../assets/sc.png">
            <span slot="label">我的收藏</span>
        </grid-item>
        <grid-item >
            <img slot="icon" src="../../assets/lx.png">
            <span slot="label">联系管家</span>
        </grid-item>
        <grid-item >
            <img slot="icon" src="../../assets/tj.png">
            <span slot="label">推荐企业</span>
        </grid-item>
      </grid>
      <grid class="user-mangage">
        <grid-item >
            <img slot="icon" src="../../assets/yq.png">
            <span slot="label">邀请好友</span>
        </grid-item>
        <grid-item >
            <img slot="icon" src="../../assets/sz.png">
            <span slot="label">更多设置</span>
        </grid-item>

      </grid>
    </div>

    <!--底部导航-->
    <tabbar class="tabbar" style="position:fixed">
      <tabbar-item link="/">
        <img slot="icon" src="../../assets/home.png" height="24" width="24">
        <span slot="label" class="tabber-text">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/component/Mission">
        <img slot="icon" src="../../assets/mission.png" height="24" width="24">
        <span slot="label" class="tabber-text">任务</span>
      </tabbar-item>
      <tabbar-item  link="/login/Login">
        <img slot="icon" src="../../assets/find.png" height="24" width="25">
        <span slot="label" class="tabber-text">发现</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/message.png" height="24" width="26">
        <span slot="label" class="tabber-text">消息</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../../assets/user.png" height="23" width="24">
        <span slot="label" class="tabber-text">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Blur, Grid, GridItem, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Blur,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem
  },
  name: 'login',
  data () {
    return {
      url: require('../../assets/bg.jpg')
    }
  },
  created () {
    console.log(this)
    // getHeight: function () {
    this.height = window.screen.height
  },
  methods: {
    splice: function () {
      console.log(1)
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-info{
  padding: 2rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
}
.user-icon{
  margin-right: 1rem;
}
.user-name{
  font-size:1.1rem;
  color:#fff;
}
.recdn{
  color:#D3AB5E;
  border:1px solid #D3AB5E;
  border-radius: .75rem;
  padding:3px 5px;
  font-size:.8rem;
  margin-left: .5rem;
}
.switch{
  padding: 2px .5rem;
  background-color: #909;
  color:#fff;
  text-align: center;
  border-radius: 1rem;
  margin-top: .5rem;
}
.manage-box{
  padding:2rem 0;
  background-color: #fff;
}
.user-mangage{
  background-color: #fff;
}
.float-card-box{
  margin:0 auto;
  padding:1rem;
  z-index: 9999;
  background-color: #fff;
  text-align: center;
}
.float-card{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #fff;
  width: 80%;
  margin:0 auto;
  margin-top: -2.5rem;
  padding:1rem;
  box-shadow: 5px 5px 5px #ddd;
  border-radius: 3px;
}
.user{
  margin-bottom: 4rem;
}
</style>
