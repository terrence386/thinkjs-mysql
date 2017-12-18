<template>
  <div class="homepage">
    <div class="homePage-banner">
      <img src="../../assets/homba.png" height="236" width="376">
    </div>
    <div class="h-info">
      <h3>鸣蝉</h3>
      <p class="base-info"><span >女 | 28岁 | 河南 | 工作7年</span></p>
      <p class="stu-info"><span >北京大学|生物工程|研究生</span></p>
      <p>邮箱：<span class="info-item">814324580@qq.com</span></p>
      <p>电话：<span class="info-item">18638772351</span></p>
      <p>公司：<span class="info-item">鸣蝉科技有限公司</span></p>
      <p>职位：<span class="info-item">CEO</span></p>
      <div class="base-desc">
        <p>一个人能过得有多好？那份属于一个人的自由又有多快乐？看着身边每一位成双成对的爱情即使再怎么故意视而不见孤独的灵魂又怎么可能不会蠢蠢欲动当生活里的琐碎压的精疲力尽的时候一个人再怎么面带微笑去逞强一颗疲惫的心又怎么会不渴望找一个属于它的避风港</p>
      </div>
    </div>
    <!--技能标签-->
    <div class="skill-tag">
      <div class="s-title">
        技能标签 <span>(22)</span>
      </div>
      <div class="tag-content">
        <span>前端</span>
        <span>后台</span>
        <span>NODEJS</span>
        <span>JAVASCRIPT</span>
        <span>JAVASCRIPT</span>
        <span>JAVASCRIPT</span>
      </div>
    </div>
    <!--我的作品-->
    <div class="u-works">
      <div class="w-title">
        我的作品(10)
      </div>
      <div class="w-content">
        <div class="w-item">
          <div class="w-item-title">
          十月围城
          </div>
          <div class="w-item-content">
            <div class="w-img">
              <img src="../../assets/sy.png" height="81" width="115">
            </div>
            <div class="w-img">
              <img src="../../assets/sy.png" height="81" width="115">
            </div>
            <div class="w-img">
              <img src="../../assets/sy.png" height="81" width="115">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--客户评价-->
    <div class="c-comment">
      <div class="c-title">
        客户评价(20)
      </div>
      <div class="c-content">
        <div class="c-comment-item">
          <div class="c-c-img">
            <img src="../../assets/u_icon.png" height="23" width="22">
          </div>
          <div class="c-c-content">
            <p>鸣蝉科技有限公司</p>
            <p>Terrence</p>
            <p class="c-c-words">this is a very good case, we can use it to do more things</p>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
      <tabbar style='position:fixed;bottom: 0;background-color:#fff;'>
        <tabbar-item>
          <img slot="icon" src="" height="23" width="24">
          <span slot="label" class="tabber-text">关注</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="" height="23" width="24">
          <span slot="label" class="tabber-text">密聊</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="" height="23" width="24">
          <span slot="label" class="tabber-text">邀请</span>
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
.homepage{
  margin-bottom: 4rem;
}
.homePage-banner img{
  width: 100%;
}
.h-info{
  padding: 1rem;
  background-color: #fff;
}
.h-info p{
  margin-top:5px;
}
.base-info,.stu-info{
  margin-bottom: 5px;
}
.base-info span{
  width: auto;
  border-bottom: 1px dashed #ddd;
  padding: 3px;
  margin-bottom: 5px;
}
.stu-info span{
  border-bottom: 1px solid #ddd;
  padding: 3px;
}
.info-item{
  color: #9C9C9C;
}
.skill-tag{
  background-color: #fff;
  margin-top: .5rem;
  padding:.5rem 1rem;
}
.s-title{
  border-bottom: 1px solid #F1F1F1;
  padding-bottom: 3px;
}
.tag-content{
  padding: .5rem;
}
.tag-content span{
  width: auto;
  border-radius: 2rem;
  color: #909;
  border: 1px solid #909;
  padding: 1px 5px;
  font-size: .8rem;
  margin-bottom: .5rem;
  display: inline-block;
}
.u-works,.c-comment{
  background-color: #fff;
  padding: .5rem 1rem;
  margin-top: .5rem;
}
.w-title{
  border-bottom: 1px solid #F1F1F1;
  padding-bottom: 3px;
}
.w-img{
  width: 33%;
  float: left
}
.w-item-title{
  padding: .5rem 0;
  color: #868686;
}
.w-item-content{
  clear: both;
  overflow: hidden;
}
.c-comment-item{
  display: flex;
  padding: .5rem 0;
  border-bottom: 1px solid #F1F1F1;
}
.c-c-img{
  margin-right: .5rem;
}
.c-c-words{
  color: #9C9C9C;
}
</style>
