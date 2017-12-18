<template>
  <div class="login" v-bind:style="{ height: height+'px' }">
  	<blur :blur-amount=10 :url="url" style='width:100%;height:100%;'>
        <div class="logo">
            <img src="../../assets/logo.png" height="63" width="62" alt="">
        </div>
        <div class="login-form">
            <div class="form-item">
                <i class="iconfont login-icon">&#xe602;</i><input type="text" placeholder="请输入手机号码">
            </div>
            <div class="form-item">
               <i class="iconfont login-icon">&#xe60f;</i><input type="password" placeholder="请输入密码">
            </div>
            <div class="form-item login-button">
              <input type="button" value="登录" class="login-btn">
            </div>
        </div>
    </blur>
  </div>
</template>

<script>
import { Blur } from 'vux'

export default {
  components: {
    Blur
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
.logo{
  text-align: center;
  margin-top:100px;
}
.login-form{
    margin-top: 50px;
}
.form-item{
  width:80%;
  margin: 0 auto;
  margin-bottom: 15px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding-left: 15px;
  line-height: 45px;
}
.form-item input{
  background: transparent;
  border: none;
  -webkit-appearance: none;
  width: 90%;
  outline: 0;
  color: #fff;
}
.form-item input:focus{
  border: none;

}
.login-icon{
  color: #fff;
  vertical-align: middle;
}
::-webkit-input-placeholder {
  color: #fff;
}
.login-button{
  background-color: #909;
  border: none;
}
.login-btn{
  padding: 0;
  color: #fff;
}
</style>
