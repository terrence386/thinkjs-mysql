const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  /**
   * 登录
   */
  async loginAction(){
      if (this.isPost){//判断是否发送信息给后台了，post数据过来.注意：isPost中的P是大写，js是对大小写敏感的。  
             let username = this.post('username');//获取用户名给username变量  
             let password = this.post('password');  
             console.log(username)
             let data = await this.model('t_user').where({username:username,password:password}).find();//到数据库中去查找看是否有数据（用户名密码同时相符）  
             console.log('data',data)
             if (think.isEmpty(data)){//这里我直接用isEmpty居然不能用。查了下资料需要用think.isEmpty()  
                  return {code:403,message:'账号密码错误！请重新填写'};//登录不成功，返回错误信息。  
             }else{  
                  this.session('userinfo',data); 
                  //return this.redirect('/index/index');//登录成功将用户信息写入session，返回到user首页。
                  // return this.redirect('/index/index');
                  // return data; 
                  let mes = {mess:'登陆成功！'}
                  return this.success(mes);
                 // return {code:200,message:'登陆成功！'}
                  
             }

      }  
       // return this.display();  
       // return {name: username};  
  }
};