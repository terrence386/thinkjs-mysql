<template>
  <div id="app">
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <keep-alive>
      <router-view class="router-view" ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
//  import Vue from 'vue'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
    },
    computed: {
      ...mapState({
        direction: state => state.mutations.direction
      })
    }
  }
</script>

<style scoped>
  #app{
    width: 100%;
    height:100%;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 395499 */
  src: url('//at.alicdn.com/t/font_395499_4xyj1ky5qry919k9.eot');
  src: url('//at.alicdn.com/t/font_395499_4xyj1ky5qry919k9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_395499_4xyj1ky5qry919k9.woff') format('woff'),
  url('//at.alicdn.com/t/font_395499_4xyj1ky5qry919k9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_395499_4xyj1ky5qry919k9.svg#iconfont') format('svg');
}
iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: #909;
  }
  body,html{
    width:100%;
    height:auto;
  }
  *{
    margin:0;
  }
  body{
    background-color:#F4F0EF;
  }
  a{
    text-decoration: none;
  }
</style>
