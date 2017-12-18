<template>
  <div class="company-detail">
    <x-header>公司详情</x-header>
    <div class="company-banner-box">
      <img src="../../assets/e_banner.png" height="247" width="373" />
      <div class="company-title-box">
        <h3>河南鸣蝉科技有限公司</h3>
        <p>鸣蝉科技是一家年轻的企业，企业成员平均年龄23岁，主要从事网站开发、app、微信、及微信小程序的开发</p>
      </div>
    </div>
    <!--公司信息-->
    <div class="company-info">
      <group :title="Ctitle">
        <cell :title="Ctitle" style="color:#7B7E7D">
          <div slot="value">
            <span style="color: #000">互联网</span>
          </div>
        </cell>
        <cell :title="address" style="color:#7B7E7D">
          <div slot="value">
            <span style="color: #000">郑州</span>
          </div>
        </cell>
        <cell :title="lisenceNo" style="color:#7B7E7D">
          <div slot="value">
            <span style="color: #000">0-10245687</span>
          </div>
        </cell>
      </group>
    </div>
    <!--主营品牌-->
    <div class="main-brand">
      <group :title="Mtitle">
        <card :header="{title:'菇菇叫'}" class="brand-item">
          <div slot="content">
            <grid>
              <grid-item link="/component/cell" style="padding:0">
                <img src="../../assets/mb.png">
              </grid-item>
              <grid-item :link="{ path: '/component/cell'}" style="padding:0">
                <img src="../../assets/mb.png">
              </grid-item>
              <grid-item link="/component/cell" style="padding:0">
                <img src="../../assets/mb.png">
              </grid-item>
            </grid>
          </div>
        </card>
        <card :header="{title:'金龙鱼'}" class="brand-item" style="border-bottom:0;">
          <div slot="content">
            <grid>
              <grid-item link="/component/cell" style="padding:0">
                <img src="../../assets/mb.png">
              </grid-item>
              <grid-item :link="{ path: '/component/cell'}" style="padding:0">
                <img src="../../assets/mb.png">
              </grid-item>
              <grid-item link="/component/cell" style="padding:0">
                <img src="../../assets/mb.png">
              </grid-item>
            </grid>
          </div>
        </card>
      </group>
    </div>
    <!--媒体宣传-->
    <div class="media-spread">
      <group :title="mDtitle">
        <div class="spread-item">
          <div class="spread-img">
            <img src="../../assets/sp.png" height="94" width="93">
          </div>
          <div class="spread-content">
            <div>
              <p class="spread-title">作什么才能赚钱</p>
              <p class="spread-subtitle">这个问题很难有一个同意的答案</p>
            </div>
            <div class="bottom-info">
            已推广888
            </div>
          </div>
        </div>

        <div class="spread-item">
          <div class="spread-img">
            <img src="../../assets/sp.png" height="94" width="93">
          </div>
          <div class="spread-content">
            <div>
              <p class="spread-title">作什么才能赚钱</p>
              <p class="spread-subtitle">这个问题很难有一个同意的答案</p>
            </div>
            <div class="bottom-info">
            已推广888
            </div>
          </div>
        </div>
      </group>
    </div>
  </div>
</template>

<script>
import { XHeader, Group, Cell, Flexbox, FlexboxItem, Card, Grid, GridItem, GroupTitle, Panel } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Card,
    Grid,
    GridItem,
    GroupTitle,
    Panel
  },
  name: 'hello',
  data () {
    return {
      Ctitle: '企业信息',
      Mtitle: '主营品牌',
      address: '所在地',
      lisenceNo: '执照号码',
      mDtitle: '媒体宣传',
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
.company-banner-box{
  width: 100%;
  height: auto;
  background-color: #fff;
}
.company-banner-box img{
  width: 100%;
  vertical-align: middle;
}
.company-title-box{
  padding: 1rem;
}
.company-title-box p{
  margin-top: .5rem;
  color: #666;
}
.weui-cells__title{
  color: #909 !important;
}
.brand-item{
  border-bottom: 1rem solid #F4F0EF;
}
.spread-item{
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid #ddd;
}
.spread-img{
  margin-right: .5rem;
}
.spread-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.spread-title{
  font-size: 1rem;
  font-weight: 500;
}
.spread-subtitle{
  font-size: .95rem;
  margin-top: .5rem;
  color: #777777;
}
.bottom-info{
  text-align: right;
}
</style>
