const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_c:'green',
    bk1_c:'gray',
    bk2_c:'gray',
    ts_c:'gray',
    hidden:true,
    zxHidden:false,
    bkHidden:false,
    tsHidden:false,
  },
  Bk1:function(){
    qq.request({
      url: 'https://api.xcchelper.cn/one/config',
      success: function (res) {
        if (res.data.test) {
          var testList = res.data.test;
          qq.getStorage({
            key: 'xh',
            success: function (res) {
              if (testList.length == 0) {
                qq.redirectTo({
                  url: '/pages/xuanke/bkk/bkk?bkk=1',
                })
                return
              }
              for (var i = 0; i < testList.length; i++) {
                if (res.data === testList[i]) {
                  qq.redirectTo({
                    url: '/pages/xuanke/bkk/bkk?bkk=1',
                  })
                  return
                }
              }
              qq.showModal({
                title: '错误',
                content: '你未在选课内测名单里！',
                showCancel: false
              })
              return
            },
          })
        }
      }
    })
  },
  Bk2: function () {
    qq.request({
      url: 'https://api.xcchelper.cn/one/config',
      success: function (res) {
        if (res.data.test) {
          var testList = res.data.test;
          qq.getStorage({
            key: 'xh',
            success: function (res) {
              if (testList.length == 0) {
                qq.redirectTo({
                  url: '/pages/xuanke/bkk/bkk?bkk=2',
                })
                return
              }
              for (var i = 0; i < testList.length; i++) {
                if (res.data === testList[i]) {
                  qq.redirectTo({
                    url: '/pages/xuanke/bkk/bkk?bkk=2',
                  })
                  return
                }
              }
              qq.showModal({
                title: '错误',
                content: '你未在选课内测名单里！',
                showCancel: false
              })
              return
            },
          })
        }
      }
    })
  },
  Ts: function () {
    qq.request({
      url: 'https://api.xcchelper.cn/one/config',
      success: function (res) {
        if (res.data.test) {
          var testList = res.data.test;
          qq.getStorage({
            key: 'xh',
            success: function (res) {
              for (var i = 0; i < testList.length; i++) {
                if (res.data === testList[i]) {
                  qq.showModal({
                    title: '错误',
                    content: '暂未提供通识任选！',
                    showCancel: false
                  })
                  return
                }
              }
              qq.showModal({
                title: '错误',
                content: '你未在选课内测名单里！',
                showCancel: false
              })
              return
            },
          })
        }
      }
    })
  },
  ifShow:function(e){
    var that = this;
    var item = e.target.dataset.item;
    if(item == 'zx'){
      that.setData({
        'zxHidden': !that.data.zxHidden
      })
    }else if(item == 'bk'){
      that.setData({
        'bkHidden': !that.data.bkHidden
      })
    } else if (item == 'ts') {
      that.setData({
        'tsHidden': !that.data.tsHidden
      })
    }
  },
  tuike:function(e){
    var teacher = e.target.dataset.teacher;
    var course = e.target.dataset.course;
    var kcId = e.target.dataset.kcid;
    var doId = e.target.dataset.doid;
    qq.showModal({
      title: '退课',
      content: '是否退掉【' + teacher + '】老师的【' + course + '】？',
      confirmText: '退课',
      confirmColor: 'red',
      success: function (res) {
        if (res.confirm) {
          qq.getStorage({
            key: 'xh',
            success: function (res) {
              var xh = res.data;
              qq.getStorage({
                key: 'pswd',
                success: function (res) {
                  var pswd = pswd;
                  qq.request({
                    url: 'https://api.xcchelper.cn/choose/cancel',
                    method: 'POST',
                    data: {
                      xh: xh,
                      pswd: pswd,
                      doId: doId,
                      kcId: kcId,
                    },
                    header: {
                      'content-type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    },
                    success: function (res) {
                      if(res.data == "1" || res.data == 1){
                        qq.showModal({
                          title: '退课情况',
                          content: '退课成功！',
                          showCancel: false
                        })
                        return
                      }else if(res.data == "3" || res.data == 3){
                        qq.showModal({
                          title: '退课情况',
                          content: '退课失败，未选择该课程！',
                          showCancel: false
                        })
                        return
                      }else{
                        qq.showModal({
                          title: '退课情况',
                          content: '未知错误' + res.data + '，请联系开发者！',
                        })
                        return
                      }
                    }
                  })
                },
              })
            },
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    qq.getStorage({
      key: 'xh',
      success: function(res) {
        var xh = res.data;
        qq.getStorage({
          key: 'pswd',
          success: function(res) {
            var pswd = res.data;
            that.setData({
              hidden:false
            })
            qq.request({
              url: 'https://api.xcchelper.cn/choose/choosed',
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
                if(res.data.courseNumber != 0){
                  that.setData({
                    yixuanData: res.data.items,
                    hidden: true
                  })
                }
              },
              fail:function(res){
                qq.showModal({
                  title: '错误',
                  content: '数据获取失败，请几秒后重试！',
                })
              }
            })
          },
        })
      },
      fail:function(res){
        qq.showToast({
          title: '未登录，请先登录！',
          icon:'none',
        })
        setTimeout(function(){
          qq.navigateTo({
            url: '/pages/change/change',
          })
        },2000)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})