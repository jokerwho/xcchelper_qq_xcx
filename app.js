//app.js
App({
  //渐入，渐出实现 
  show: function(that, param, opacity) {
    var animation = qq.createAnimation({
      //持续时间800ms
      duration: 800,
      timingFunction: 'ease',
    });
    //var animation = this.animation
    animation.opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  },

  //滑动渐入渐出
  slideupshow: function(that, param, px, opacity) {
    var animation = qq.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    animation.translateY(px).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  },
  //向右滑动渐入渐出
  sliderightshow: function(that, param, px, opacity) {
    var animation = qq.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    animation.translateX(px).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  },
  onLaunch: function() {
    // 登录
    qq.login({
      success: res => {
        
      }
    })
    this.globalData = {}
  },
  globalData: {
    userInfo: null
  }
})