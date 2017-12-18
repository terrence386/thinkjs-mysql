<template>
  <div class="mission" id="vux_view_box_body">
    <div class="mission-banner">
      <img src="../assets/mission_banner.png" height="121" width="375" />
    </div>
    <sticky scrollBox="":check-sticky-support="false" :offset="0">
      <tab :line-width = "1" bar-active-color = "#909">
        <tab-item>全部任务</tab-item>
        <tab-item selected>任务类型</tab-item>
        <tab-item>排序</tab-item>
      </tab>
    </sticky>
    <div class="mission-box" >
      <div class="mission-item" @click="goDetail()">
        <div class="mission-item-title">
          <div class="p-a-c">
            <div class="title-left">文案编辑</div>
            <div class="title-right">￥500</div>
          </div>
          <div class="a-a-t">
            <span class="iconfont">&#xe676;</span>
            <span>杭州</span>
            <span class="iconfont">&#xe665;</span>
            <span>1-3年</span>
            <span class="iconfont">&#xe688;</span>
            <span>2017-09-09</span>
          </div>
        </div>
        <div class="mission-item-content">
          君不见，黄河之水天上来，奔流到海不复回。
          君不见，高堂明镜悲白发，朝如青丝暮成雪。
        </div>
        <div class="mission-item-footer">
          <div class="mission-footer-left">
          <div>
            <img src="../assets/u_icon.png" height="25" width="25">
          </div>
            <div><span class="u-info">汤小明|鸣蝉科技</span></div>
          </div>
          <div class="mission-footer-right">已报名：200</div>
        </div>
      </div>
      <div class="mission-item">
        <div class="mission-item-title">
          <div class="p-a-c">
            <div class="title-left">文案编辑</div>
            <div class="title-right">￥500</div>
          </div>
          <div class="a-a-t">
            <span class="iconfont">&#xe676;</span>
            <span>杭州</span>
            <span class="iconfont">&#xe665;</span>
            <span>1-3年</span>
            <span class="iconfont">&#xe688;</span>
            <span>2017-09-09</span>
          </div>
        </div>
        <div class="mission-item-content">
          君不见，黄河之水天上来，奔流到海不复回。
          君不见，高堂明镜悲白发，朝如青丝暮成雪。
        </div>
        <div class="mission-item-footer">
          <div class="mission-footer-left">
          <div>
            <img src="../assets/u_icon.png" height="25" width="25">
          </div>
            <div><span class="u-info">汤小明|鸣蝉科技</span></div>
          </div>
          <div class="mission-footer-right">已报名：200</div>
        </div>
      </div>
      <div class="mission-item">
        <div class="mission-item-title">
          <div class="p-a-c">
            <div class="title-left">文案编辑</div>
            <div class="title-right">￥500</div>
          </div>
          <div class="a-a-t">
            <span class="iconfont">&#xe676;</span>
            <span>杭州</span>
            <span class="iconfont">&#xe665;</span>
            <span>1-3年</span>
            <span class="iconfont">&#xe688;</span>
            <span>2017-09-09</span>
          </div>
        </div>
        <div class="mission-item-content">
          君不见，黄河之水天上来，奔流到海不复回。
          君不见，高堂明镜悲白发，朝如青丝暮成雪。
        </div>
        <div class="mission-item-footer">
          <div class="mission-footer-left">
          <div>
            <img src="../assets/u_icon.png" height="25" width="25">
          </div>
            <div><span class="u-info">汤小明|鸣蝉科技</span></div>
          </div>
          <div class="mission-footer-right">已报名：200</div>
        </div>
      </div>
      <div class="mission-item">
        <div class="mission-item-title">
          <div class="p-a-c">
            <div class="title-left">文案编辑</div>
            <div class="title-right">￥500</div>
          </div>
          <div class="a-a-t">
            <span class="iconfont">&#xe676;</span>
            <span>杭州</span>
            <span class="iconfont">&#xe665;</span>
            <span>1-3年</span>
            <span class="iconfont">&#xe688;</span>
            <span>2017-09-09</span>
          </div>
        </div>
        <div class="mission-item-content">
          君不见，黄河之水天上来，奔流到海不复回。
          君不见，高堂明镜悲白发，朝如青丝暮成雪。
        </div>
        <div class="mission-item-footer">
          <div class="mission-footer-left">
          <div>
            <img src="../assets/u_icon.png" height="25" width="25">
          </div>
            <div><span class="u-info">汤小明|鸣蝉科技</span></div>
          </div>
          <div class="mission-footer-right">已报名：200</div>
        </div>
      </div>
      <div class="mission-item">
        <div class="mission-item-title">
          <div class="p-a-c">
            <div class="title-left">文案编辑</div>
            <div class="title-right">￥500</div>
          </div>
          <div class="a-a-t">
            <span class="iconfont">&#xe676;</span>
            <span>杭州</span>
            <span class="iconfont">&#xe665;</span>
            <span>1-3年</span>
            <span class="iconfont">&#xe688;</span>
            <span>2017-09-09</span>
          </div>
        </div>
        <div class="mission-item-content">
          君不见，黄河之水天上来，奔流到海不复回。
          君不见，高堂明镜悲白发，朝如青丝暮成雪。
        </div>
        <div class="mission-item-footer">
          <div class="mission-footer-left">
          <div>
            <img src="../assets/u_icon.png" height="25" width="25">
          </div>
            <div><span class="u-info">汤小明|鸣蝉科技</span></div>
          </div>
          <div class="mission-footer-right">已报名：200</div>
        </div>
      </div>
    </div>

    <!--底部导航-->
    <tabbar class="tabbar">
      <tabbar-item link="/">
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
      <tabbar-item>
        <img slot="icon" src="../assets/user.png" height="23" width="24">
        <span slot="label" class="tabber-text">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, Swiper, SwiperItem, Grid, GridItem, Tab, TabItem, Sticky } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    Tab,
    TabItem,
    Sticky,
    Tabbar,
    TabbarItem
  },
  name: 'hello',
  data () {
    return {
      title: 'enter',
      msg: 'here is very good'
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    splice: function () {
      console.log(1)
    },
    goDetail: function () {
      this.$router.push('/component/MissionDetail')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-tabbar {
  position: fixed;
}
.mission-banner{
  width:100%;
  height:125px;
  overflow: hidden;
}
.mission-banner img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.vux-tab .vux-tab-item.vux-tab-selected {
    color: #909;
    border-bottom: 3px solid #909;
}
.mission-box{
  padding:15px;
  background-color: #F4F0EF;
  margin-bottom: 53px;
}
.mission-item{
  background-color: #fff;
  border-radius: 5px;
  padding:10px;
  margin-bottom:20px;
}
.mission-item-title,.mission-item-content{
  margin:10px 0;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.p-a-c{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.a-a-t{
  font-size: 12px;
  color:#CDCDCD;
}
.title-right{
  color:#909;
}
.mission-item-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mission-footer-left{
  display: flex;
  align-items: center;
}
.u-info,.mission-footer-right{
  color:#8C8C8C;
}
.tabbar{
	background-color:#fff;
}
.weui-tabbar__label span{
  color:#000;
}
.weui-tabbar__item{
  text-decroation:none !important;
}
</style>
