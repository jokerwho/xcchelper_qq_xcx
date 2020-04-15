// pages/change/change.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loged: 0,
    xh: '当前未登录',
    pswd: '',
    hidden: true,
    btnhidden: false,
  },
  toLuqu:function(){
    qq.redirectTo({
      url: '/pages/luqu/luqu',
    })
  },
  toAbout: function() {
    qq.navigateTo({
      url: '/pages/about/about',
    })
  },
  submitValue: function(e) {
    var xh_i = e.detail.value.xh;
    var xh = xh_i.toString();
    var pswd = e.detail.value.pswd;
    var that = this;
    if(xh == '' || pswd == ''){
      qq.showModal({
        title: '错误',
        content: '请将学号密码填写完整！',
        showCancel:false,
      })
      return
    }
    that.setData({
        hidden: false,
        btnhidden: true,
      }),
      qq.request({
        url: 'https://api.xcchelper.cn/info/pinfo',
        method:'POST',
        data:{
          xh:xh,
          pswd:pswd
        },
        header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
        },
        success: function(res) {
          if (res.data.name) {
            qq.clearStorage();
            qq.setStorage({
                key: 'xh',
                data: xh,
              }),
              qq.setStorage({
                key: 'pswd',
                data: pswd,
              }),
              qq.setStorage({
                key: 'loged',
                data: 1,
              }),
              qq.setStorage({
                key: 'mainInfo',
                data: res.data,
              }),
              qq.showToast({
                title: '登录成功，请返回首页上拉或点击刷新',
                icon: 'none',
                duration: 2500,
              }),
              qq.setStorage({
                key: 'refresh',
                data: 'first',
              })
              that.setData({
                hidden: true,
                btnhidden: false,
              })
              setTimeout(function(){
                qq.navigateBack();
              },3000)
          } else if (res.data == '学号或者密码错误！') {
            qq.showModal({
                title: '错误',
                content: '学号或者密码错误！',
                showCancel: false
              }),
              that.setData({
                hidden: true,
                btnhidden: false,
              })
          } else {
            qq.showModal({
                title: '错误',
                content: '网络或未知错误！请等待几秒重试！首次错误正常，如多次（三次以上）出现此错误，请返回点击“在线反馈”！',
                showCancel:false
              }),
              that.setData({
                hidden: true,
                btnhidden: false,
              })
          }
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    qq.getStorage({
        key: 'loged',
        success: function(res) {
          that.setData({
            loged: res.data,
          })
        },
      }),
      qq.getStorage({
        key: 'xh',
        success: function(res) {
          that.setData({
            xh: '当前' + res.data,
          })
        },
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})