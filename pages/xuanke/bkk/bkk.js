const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_c: 'gray',
    bk1_c: 'gray',
    bk2_c: 'gray',
    ts_c: 'gray',
    hidden: true,
  },
  choose:function(e){
    var teacher = e.target.dataset.teacher;
    var course = e.target.dataset.course;
    var kcId = e.target.dataset.kcid;
    var doId = e.target.dataset.doid;
    var kklxdm = e.target.dataset.kklxdm;
    qq.showModal({
      title: '选课',
      content: '是否选择【' + teacher +'】老师的【' + course + '】？',
      confirmText:'选择',
      confirmColor:'green',
      success:function(res){
        if(res.confirm){
          qq.getStorage({
            key: 'xh',
            success: function(res) {
              var xh = res.data;
              qq.getStorage({
                key: 'pswd',
                success: function(res) {
                  var pswd = pswd;
                  qq.request({
                    url: 'https://api.xcchelper.cn/choose/choose',
                    method: 'POST',
                    data: {
                      xh: xh,
                      pswd: pswd,
                      doId: doId,
                      kcId: kcId,
                      kklxdm: kklxdm
                    },
                    header: {
                      'content-type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    },
                    success:function(res){
                      if(res.data.msg){
                        qq.showModal({
                          title: '选课情况',
                          content: '错误'+ res.data.flag +'：'+ res.data.msg,
                          showCancel:false
                        })
                        return
                      }else if(res.data.flag == "1"){
                        qq.showModal({
                          title: '选课情况',
                          content: '选课成功！',
                          showCancel:false
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
  My:function(){
    qq.redirectTo({
      url: '/pages/xuanke/xuanke',
    })
  },
  Bk1: function () {
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bkk = options.bkk;
    var that = this;
    if(bkk == '1'){
      that.setData({
        bk1_c:'green',
        bk2_c:'gray'
      })
    }else if(bkk == '2'){
      that.setData({
        bk2_c:'green',
        bk1_c:'gray'
      })
    }
    qq.getStorage({
      key: 'xh',
      success: function (res) {
        var xh = res.data;
        qq.getStorage({
          key: 'pswd',
          success: function (res) {
            var pswd = res.data;
            that.setData({
              hidden: false
            })
            qq.request({
              url: 'https://api.xcchelper.cn/choose/bkk',
              method: 'POST',
              data: {
                xh: xh,
                pswd: pswd,
                bkk:bkk
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
              },
              success: function (res) {
                that.setData({
                  bkkData: res.data.items,
                  hidden: true
                })
              },
              fail: function (res) {
                qq.showModal({
                  title: '错误',
                  content: '数据获取失败，请几秒后重试！',
                })
              }
            })
          },
        })
      },
      fail: function (res) {
        qq.showToast({
          title: '未登录，请先登录！',
          icon: 'none',
        })
        setTimeout(function () {
          qq.navigateTo({
            url: '/pages/change/change',
          })
        }, 2000)
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