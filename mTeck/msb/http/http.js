import Vue from 'vue'
import VueResource from 'vue-resource'


Vue.use(VueResource)

//var userResource = 'http://test.qy.9gms.com';
// var userResource = 'http://sthapi.chenglian.com'
var userResource = '127.0.0.1:8360'
Vue.http.options.emulateHTTP = true
Vue.http.options.method = 'POST'
Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = false
Vue.http.options.xhr = { withCredentials: true }
Vue.http.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.http.headers.post['CorsSource'] = 'WeiXin'
// Vue.http.headers.post['key'] = cache.getLocalStorageData('userkey')
 //console.dir(Vue.http.headers)


export default {
  send: function (action, options) {
    // return UserResource.save({action: action + '?t=' + (new Date()).getTime()}, options)
    // return Vue.http.post('http://localhost:64174/Api/Home/data?t=1480158875952', options)
    return Vue.http.post(userResource + action, options)
  },
  jsonp:function(action, options){
		console.log(action)
    return Vue.http.jsonp(userResource + action, options)	
  }
}
