<template>
  <div class="p-serve">
    <tab active-color='#909' :line-width='1' >
      <tab-item selected>进行中</tab-item>
      <tab-item>已完成</tab-item>
      <tab-item>已结算</tab-item>
    </tab>
    <div class="p-serve-list">
      <div class="p-serve-item">
        <div class="p-item-title">
            <div>文案编辑<br>2017年5月</div>
             <div>￥500</div>
        </div>
        <div class="p-item-content">
            <div class="p-item-inner">
                <div class="p-item-img">
                    <img src="../../assets/u_icon.png" height="50" width="50">
                </div>
                <div>
                    <p>项目经理 | 鸣蝉</p>
                    <p>mission is coding all the time</p>
                </div>
            </div>
        </div>
        <div class="p-item-footer">
            <div>工作汇报</div>
            <div class="spacer"></div>
            <div>申请延期</div>
            <div class="spacer"></div>
            <div>申请调薪</div>
        </div>
      </div>
      <div class="p-serve-item">
        <div class="p-item-title">
            <div>文案编辑<br>2017年5月</div>
             <div>￥500</div>
        </div>
        <div class="p-item-content">
            <div class="p-item-inner">
                <div class="p-item-img">
                    <img src="../../assets/u_icon.png" height="50" width="50">
                </div>
                <div>
                    <p>项目经理 | 鸣蝉</p>
                    <p>mission is coding all the time</p>
                </div>
            </div>
        </div>
        <div class="p-item-footer">
            <div>工作汇报</div>
            <div class="spacer"></div>
            <div>申请延期</div>
            <div class="spacer"></div>
            <div>申请调薪</div>
        </div>
      </div>
      <div class="p-serve-item">
        <div class="p-item-title">
            <div>文案编辑<br>2017年5月</div>
             <div>￥500</div>
        </div>
        <div class="p-item-content">
            <div class="p-item-inner">
                <div class="p-item-img">
                    <img src="../../assets/u_icon.png" height="50" width="50">
                </div>
                <div>
                    <p>项目经理 | 鸣蝉</p>
                    <p>mission is coding all the time</p>
                </div>
            </div>
        </div>
        <div class="p-item-footer">
            <div>工作汇报</div>
            <div class="spacer"></div>
            <div>申请延期</div>
            <div class="spacer"></div>
            <div>申请调薪</div>
        </div>
      </div>
      <div class="p-serve-item">
        <div class="p-item-title">
            <div>文案编辑<br>2017年5月</div>
             <div>￥500</div>
        </div>
        <div class="p-item-content">
            <div class="p-item-inner">
                <div class="p-item-img">
                    <img src="../../assets/u_icon.png" height="50" width="50">
                </div>
                <div>
                    <p>项目经理 | 鸣蝉</p>
                    <p>mission is coding all the time</p>
                </div>
            </div>
        </div>
        <div class="p-item-footer">
            <div>工作汇报</div>
            <div class="spacer"></div>
            <div>申请延期</div>
            <div class="spacer"></div>
            <div>申请调薪</div>
        </div>
      </div>
      <div class="p-serve-item">
        <div class="p-item-title">
            <div>文案编辑<br>2017年5月</div>
             <div>￥500</div>
        </div>
        <div class="p-item-content">
            <div class="p-item-inner">
                <div class="p-item-img">
                    <img src="../../assets/u_icon.png" height="50" width="50">
                </div>
                <div>
                    <p>项目经理 | 鸣蝉</p>
                    <p>mission is coding all the time</p>
                </div>
            </div>
        </div>
        <div class="p-item-footer">
            <div>工作汇报</div>
            <div class="spacer"></div>
            <div>申请延期</div>
            <div class="spacer"></div>
            <div>申请调薪</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default{
  components: {
    Tab,
    TabItem
  }
}
</script>
<style>
.p-serve-list{
    margin: .5rem 1rem 3rem 1rem;
}
.p-serve-item{
    background-color: #fff;
    border-radius: .5rem;
    padding: 1rem .5rem .5rem .5rem;
    margin-bottom: .5rem;
}
.p-item-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.p-item-inner{
    display: flex;
    align-items: center;
    padding: .5rem 0;
    border-bottom: 1px solid #e6e6e6;
}
.p-item-img{
    margin-right: .5rem;
}
.p-item-footer{
    overflow: hidden;
}
.p-item-footer div{
    width: 33%;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    float: left;
}
.p-item-footer .spacer {
    overflow: hidden;
    margin-top: 11px;
    width: 1px;
    height: 10px;
    background-color: #ccc;
}
</style>
