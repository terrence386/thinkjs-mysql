<template>
  <div class="mission-detail">
    <x-header>任务详情</x-header>
    <div class="title">
      <div class="title-left">
        <p>文案编辑</p>
        <p class="price">￥500</p>
      </div>
      <div class="title-name">活动策划</div>
    </div>
    <!--任务要求 -->
    <div class="mission-demand">
      <div class="mission-title">任务要求</div>
      <div class="mission-content">
        <div class="mission-item">
          <p>
            <i class="iconfont"></i>
            <span>学历要求:</span>
            <span>大专</span>
          </p>
        </div>
        <div class="mission-item">
          <p>
            <i class="iconfont"></i>
            <span>工作经验:</span>
            <span>1-3年</span>
          </p>
        </div>
        <div class="mission-item">
          <p>
            <i class="iconfont"></i>
            <span>所在城市:</span>
            <span>不限</span>
          </p>
        </div>
        <div class="mission-item">
          <p>
            <i class="iconfont"></i>
            <span>所需人数:</span>
            <span>2人</span>
          </p>
        </div>
        <div class="mission-item">
          <p>
            <i class="iconfont"></i>
            <span>交付节点:</span>
            <span>2017-09-09</span>
          </p>
        </div>
      </div>
    </div>
    <!--任务描述-->
    <div class="mission-desc">
      <div class="desc-title">任务描述</div>
      <div class="desc-content">
        <p>1.这里需要加一个符号</p>
        <p>2.这里需要加一个符号</p>
        <p>3.这里需要加一个符号</p>
        <p>4.这里需要加一个符号</p>
      </div>
    </div>
    <!--公司信息-->
     <router-link to="/company/CompanyDetail">
      <div class="company-info" :link="{path: '/company/CompanyDetail'}">
        <div class="left-media">
          <img src="../assets/logo.png">
        </div>
        <div class="right-content">
          <p>九个秘书科技有限公司</p>
          <p>互联网/技术开发</p>
        </div>
      </div>
    </router-link>
    <!--底部按钮-->
   
    <div class="btn-box">
      <flexbox :gutter="0">
        <flexbox-item :span="1/3"><div class="m-chat">秘聊</div></flexbox-item>
        <flexbox-item><div class="m-apply">应聘</div></flexbox-item>
      </flexbox>
    </div>
    
  </div>
</template>

<script>
import { XHeader, Group, Cell, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Flexbox,
    FlexboxItem
  },
  name: 'hello',
  data () {
    return {
      title: 'enter',
      msg: 'here is very good'
    }
  },
  created () {

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
.mission-detail{
  background-color: #F4F0EF;
  height: 100%;
  margin-bottom: 45px;
}
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 15px 10px;
  background-color: #fff;
  margin-top: 10px;
}
.title-left{
  color: #909;
}
.price{
  font-size: 24px;
}
.title-name{
  background-color: #F4C464;
  color: #fff;
  padding: 2px 5px;
}
.mission-demand,.mission-desc{
  padding-left: 15px;
  margin-top: 10px;
  background-color: #fff;
}
.mission-title,.desc-title{
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #e6e6e6;
}
.mission-content,.desc-content{
  padding: 15px 0;
}
.mission-item{
  padding: 5px 0;
  font-size: 14px;
  color: #8E908F;
}
.desc-content p{
  padding: 5px 0;
  font-size: 14px;
  color: #8E908F;
}
.company-info{
  display: flex;
  align-items: center;
  padding:10px 15px;
  background-color: #fff;
  margin-top: 15px;
}
.left-media img{
  border-radius: 50%;
}
.right-content{
  margin-left: 10px;
}
.m-chat,.m-apply{
  text-align: center;
  height:45px;
  line-height: 45px;
}
.btn-box{
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #909;
}
.m-chat{
  background-color: #fff;
  color:#909;
}
.m-apply{
  background-color: #909;
  color:#fff;
}
</style>
