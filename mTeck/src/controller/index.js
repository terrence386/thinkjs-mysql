const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
  	// const user = this.model('t_user'); // controller 里实例化模型
   //  const data =  user.select();
   //  let userinfo = this.session('userinfo')
   //  console.log(userinfo)
   //  if (!think.isEmpty(userinfo)){  
   //    this.assign('userinfo',userinfo);  
   //  }else{  
      return this.redirect('/login/index');  
    // }  
    // this.assign('title',"测试网页之hello world!");
    // return this.display();
  }
  
};
