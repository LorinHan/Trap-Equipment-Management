<template>
  <div id="app">
    <header>
      <div class="menu"  @click="hiddenBox = !hiddenBox"><i class="iconfont icon-menu" style="float: right;font-size: 20px;color: #15cd64;"></i><span style="float: right;margin-right: 10px;color: #999;">{{user}}</span></div>
      <transition name="fade">
        <div class="hiddenBox" v-show="!hiddenBox">
          <p @click="loginBox = true;hiddenBox=true;"><i class="iconfont icon-User"></i> 登录</p>
          <p @click="changePwd = true;hiddenBox=true;"><i class="iconfont icon-xiugaimima"></i> 修改密码</p>
          <p><i class="iconfont icon-tuichu4"></i> 注销</p>
        </div>
      </transition>  
      <div id="login" v-show="loginBox">
        <button @click="loginBox = false;" style="position: absolute;right: 10px;top: -20px;border: none;background-color: red;color: #fff;width: 40px;height:30px;border-radius: 10px;">取消</button>
        <p>用户名：<input type="text"></p>
        <p>密码：<input style="margin-left:1em;" type="password"></p>
        <button>登 录</button>
      </div>  
      <div id="login" v-show="changePwd">
        <button @click="changePwd = false;" style="position: absolute;right: 10px;top: -20px;border: none;background-color: red;color: #fff;width: 40px;height:30px;border-radius: 10px;">取消</button>
        <p>原密码：<input style="margin-left:1em;" type="text"></p>
        <p>新密码：<input style="margin-left:1em;" type="password"></p>
        <p>确认密码：<input type="password"></p>
        <button>修 改</button>
      </div>
    </header>
    <div class="buttons">
      <router-link to="/" active-class="active" exact><button style="background-color: rgb(213, 223, 247);color: rgb(47, 97, 213);"><i class="iconfont icon-qiyechanpinxinxi" style="color: rgb(47, 97, 213);"></i> 产品信息</button></router-link>
      <router-link to="/plan" active-class="active" style="margin: 0 2%;"><button style="background-color: rgb(227, 217, 252);color: rgb(117, 64, 238);"><i class="iconfont icon-jihua" style="color: rgb(117, 64, 238);"></i> 维护计划</button></router-link>
      <router-link to="/questions" active-class="active"><button style="background-color: rgb(217, 240, 248);color: rgb(63, 182, 220);"><i class="iconfont icon-question" style="color: rgb(63, 182, 220);"></i>常见问题</button></router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: null,
      hiddenBox: true,
      loginBox: false,
      changePwd: false
    }
  },
  methods: {
    changeUsername(value) {
      this.username = value;
    },
    getCity() {
        var geolocation = new qq.maps.Geolocation("K3DBZ-QW4KO-J4FWU-SOTO5-JIZZ5-SXBMJ", "map"); 
        var positionNum = 0;
        var options = {timeout: 8000};
        geolocation.getLocation(this.showPosition, this.showErr, options);
    },
    showPosition(position) {
        console.log(position)
        var adCode = position.adCode;//邮政编码
        var nation = position.nation;//中国
        var city = position.city; //城市
        var addr = position.addr; //详细地址
        var lat = position.lat; //
        var lng = position.lng; //火星坐标 //TODO 实现业务代码逻辑
        window.localStorage.setItem("location", position.province + city + addr);
    },
    shorErr(err) {
        console.log(err)
    },
  },
  computed: {
    user: function() {
      if(this.username == null) return "请登录";
      return this.username;
    }
  },
  created() {
      this.getCity();
  }
}
</script>

<style>
*{margin: 0; padding: 0;}
a{text-decoration: none; color: #333;}
a,input,button{outline: none; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); -webkit-focus-ring-color: rgba(0, 0, 0, 0);}
header{
  height:35px;
  width: 100%;
  border-bottom: 1px solid #15cd64;
}
header > .menu{
  width: 120px;
  height: 100%;
  float: right;
  font-size: 13px;
  line-height: 35px;
  padding: 0 10px;
}
header > .hiddenBox{
  width: 120px;
  margin-top: 5px;
  position: absolute;
  top: 35px;
  right: 0;
  box-shadow: 0 0 10px 1px #c0c0c0;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 999;
}
header > .hiddenBox > p{
  height: 35px;
  line-height: 35px;
  margin-top: 5px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.buttons{
  width: 100%;height:50px;line-height: 50px;text-align: center;margin-top: 10px;
}
.active > button{border-bottom: 2px solid #15cd64!important;opacity: 1!important;}
.buttons > a{display: inline-block;height: 40px;width: 30%;line-height: 40px;}
.buttons > a > button{width: 100%;height: 100%; border: none;border-radius: 20px;opacity: .8;}
img{display: inline-block; width: 45%;border: 1px solid #c0c0c0;margin-left: 4%;margin-top: 5px;}
#login{position: absolute;width: 70%;left: 15%;top: 50px;background-color: #fff;padding: 30px 10px 0 10px;box-sizing: border-box;box-shadow: 0 0 10px 10px #f0f0f0;z-index: 999;}
#login > p{margin-top: 20px;}
#login > p > input{width: 60%;height: 25px;border-radius: 5px;border: 1px solid #999;padding-left: 5px;}
#login > button{display: block;border:none;background-color: skyblue;width: 70px;height: 30px;margin: 30px auto;color: #fff;}
</style>
