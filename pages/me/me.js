// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    log: false,
    hidden:true,
    userInfo: {
      avatarUrl: "",
      nickName: "",
    }
  },
  addfriend:function(e){
    qq.authorize({
      scope:"setting.addFriend",
      success:function(){ }
    })
  },
  fankui:function(){
    var that = this;
    qq.showModal({
      title:'反馈',
      content:'是否确定反馈？',
      cancelText:'算了',
      confirmText:'反馈',
      success:function(res){
        if(res.confirm){
          qq.getStorage({
            key: 'xh',
            success: function(res) {
              var xh = res.data;
              qq.getStorage({
                key: 'pswd',
                success: function(res) {
                  var pswd = res.data;
                  qq.request({
                    url:'https://api.xcchelper.cn/one/fankui',
                    method: 'POST',
                    data: {
                      xh: xh,
                      pswd: pswd,
                    },
                    header: {
                      'content-type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    },
                    success:function(res){
                      if(res.data == 'ok'){
                        qq.showModal({
                          title:"反馈",
                          content:"开发者已经收到你的反馈请求！",
                          showCancel:false
                        })
                      }
                    }
                  })
                }
              })
            },
            fail:function(){
              qq.showToast({
                title: '请先登录！',
                icon:'none'
              })
              return
            }
          })
        }
      }
    })
  },
  toRefresh:function(){
    var that = this;
    qq.showModal({
      title: '学期刷新',
      content: '用以刷新首页修读数据以及默认学期成绩和课表，建议每学期刷新一次，请勿频繁刷新对服务器造成压力！',
      cancelText:'暂不刷新',
      confirmText:'我要刷新',
      confirmColor:'red',
      success:function(res){
        if(res.confirm){
          qq.removeStorage({
            key: 'gradecache',
            success: function(res) {},
          })
          qq.removeStorage({
            key: 'classcache',
            success: function(res) {},
          })
          that.setData({
            hidden:false
          })
          qq.getStorage({
            key: 'xh',
            success: function(res) {
              var xh = res.data;
              qq.getStorage({
                key: 'pswd',
                success: function(res) {
                  var pswd = res.data;
                  qq.request({
                    url: 'https://api.xcchelper.cn/info/study',
                    method: 'POST',
                    data: {
                      xh: xh,
                      pswd: pswd
                    },
                    header: {
                      'content-type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    },
                    success:function(res){
                      if(res.data.gpa){
                        that.setData({
                          hidden:true
                        })
                        qq.setStorage({
                          key: 'studyInfo',
                          data: res.data,
                        })
                        qq.showToast({
                          title: '学期刷新成功，返回首页上拉刷新',
                          icon:'none',
                          duration:2000
                        })
                      }else{
                        qq.showModal({
                          title: '错误',
                          content: '数据获取失败，请等待几秒重试',
                          showCancel:false
                        })
                        that.setData({
                          hidden:true
                        })
                        return
                      }
                    },
                    fail:function(res){
                      qq.showModal({
                        title: '错误',
                        content: '联网获取出错，请检查网络重试',
                        showCancel:false
                      })
                      that.setData({
                        hidden: true
                      })
                      return
                    }
                  })
                },
              })
            },
            fail:function(){
              qq.showToast({
                title: '请先登录！',
                icon:'none'
              })
              return
            }
          })
        }
      }
    })
  },
  toChange:function(){
    qq.navigateTo({
      url: '/pages/change/change',
    })
  },
  nopass: function () {
    qq.showToast({
      title: '功能暂不开放！',
      icon: 'none',
    })
  },
  toMyFound:function(){
    qq.navigateTo({
      url: '/pages/me/myfound/myfound',
    })
  },
  toSet: function() {
    qq.navigateTo({
      url: '/pages/setting/setting',
    })
  },
  toAbout: function() {
    qq.navigateTo({
      url: '/pages/about/about',
    })
  },
  developing: function() {
    qq.showToast({
      title: '功能开发中...',
      icon: 'none',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.app = getApp();
    var that = this;
    qq.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          qq.getUserInfo({
            success: res => {
              var avatarUrl = 'userInfo.avatarUrl';
              var nickName = 'userInfo.nickName';
              that.setData({
                [avatarUrl]: res.userInfo.avatarUrl,
                [nickName]: res.userInfo.nickName,
              })
            }
          })
        }
      }
    }),
      qq.getStorage({
        key: 'mainInfo',
        success: function(res) {
          that.setData({
            name: res.data.name,
            log: true,
          })
        },
        fail: function() {
          qq.navigateTo({
            url: '/pages/change/change',
          })
        }
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
    setTimeout(function() {
      app.slideupshow(this, 'my', 0, 1)
    }.bind(this), 300);
    setTimeout(function () {
      app.slideupshow(this, 'refresh', 0, 1)
    }.bind(this), 450);
    setTimeout(function() {
      app.slideupshow(this, 'set', 0, 1)
    }.bind(this), 600);
    setTimeout(function() {
      app.slideupshow(this, 'kefu', 0, 1)
    }.bind(this), 900);
    setTimeout(function() {
      app.slideupshow(this, 'about', 0, 1)
    }.bind(this), 1200);
    setTimeout(function() {
      app.show(this, 'foot', 1)
    }.bind(this), 1700);
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
    var that = this;
      qq.getStorage({
        key: 'mainInfo',
        success: function(res) {
          that.setData({
              name: res.data.name,
              log: true,
            }),
            qq.stopPullDownRefresh();
        },
        fail: function() {
          qq.stopPullDownRefresh();
          qq.navigateTo({
            url: '/pages/change/change',
          })
        }
      })
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