// pages/schedule/schedule.js
const app = getApp();
const db = qq.cloud.database();
const info = db.collection('info');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cache: 0,
    hidden: true,
    isHome:false,
    all_c:'gray',
    mon_c: 'gray',
    tue_c: 'gray',
    wed_c: 'gray',
    thr_c: 'gray',
    fri_c: 'gray',
    chooseTitle: ['','学期查询'],
    chooseData:[],
    nowWeek:'第X周',
  },
  All: function () {
    this.setData({
      all_c:'green',
      mon_c: 'gray',
      tue_c: 'gray',
      wed_c: 'gray',
      thr_c: 'gray',
      fri_c: 'gray',
    })
  },
  Mon: function() {
    this.setData({
      all_c: 'gray',
      mon_c: 'green',
      tue_c: 'gray',
      wed_c: 'gray',
      thr_c: 'gray',
      fri_c: 'gray',
    })
  },
  Tue: function() {
    this.setData({
      all_c: 'gray',
      tue_c: 'green',
      mon_c: 'gray',
      wed_c: 'gray',
      thr_c: 'gray',
      fri_c: 'gray',
    })
  },
  Wed: function() {
    this.setData({
      all_c: 'gray',
      wed_c: 'green',
      mon_c: 'gray',
      tue_c: 'gray',
      thr_c: 'gray',
      fri_c: 'gray',
    })
  },
  Thr: function() {
    this.setData({
      all_c: 'gray',
      thr_c: 'green',
      mon_c: 'gray',
      tue_c: 'gray',
      wed_c: 'gray',
      fri_c: 'gray',
    })
  },
  Fri: function() {
    this.setData({
      all_c: 'gray',
      fri_c: 'green',
      mon_c: 'gray',
      tue_c: 'gray',
      wed_c: 'gray',
      thr_c: 'gray',
    })
  },
  changeMode:function(){
    var that = this;
    qq.getStorage({
      key: 'weeksMode',
      success: function(res) {
        if(res.data == 1){
          qq.setStorage({
            key: 'weeksMode',
            data: 0,
          })
          that.setData({
            weeksMode:0
          })
        }else{
          qq.setStorage({
            key: 'weeksMode',
            data: 1,
          })
          that.setData({
            weeksMode:1
          })
        }
      },
    })
  },
  selectedItem: function(e) {
    var that = this;
    qq.request({
      url: 'https://api.xcchelper.cn/one/config',
      success: function (res) {
        if (res.data.schedulesTime) {
          var schedulesTime = res.data.schedulesTime;
          var date = e.detail.selectedId;
          var xnm, xqm;
          xnm = date.slice(0, 4)
          xqm = date.slice(-1)
          qq.getStorage({
            key: 'xh',
            success: function (res) {
              var xh = res.data;
              that.setData({
                hidden: false,
              }),
                qq.getStorage({
                  key: 'pswd',
                  success: function (res) {
                    var pswd = res.data;
                    qq.request({
                      url: 'https://api.xcchelper.cn/info/schedule',
                      method: 'POST',
                      data: {
                        xh: xh,
                        pswd: pswd,
                        year: xnm,
                        term: xqm
                      },
                      header: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                      },
                      success: function (res) {
                        if (res.data.normalCourse.length == 0) {
                          qq.showToast({
                            title: '无当前学期或未知错误',
                            icon: 'none'
                          })
                          that.setData({
                            hidden: true
                          })
                          return
                        }
                        if (date == schedulesTime && res.data.normalCourse.length != 0) {
                          qq.setStorage({
                            key: 'classcache',
                            data: res.data.normalCourse,
                          })
                        }
                        that.setData({
                          classData: res.data.normalCourse,
                          hidden: true
                        })
                      },
                      fail: function () {
                        qq.showModal({
                          title: '错误',
                          content: '联网获取失败，请选择当前学期重试，如多次(三次以上)出现本错误请返回点击“在线反馈”！',
                        })
                      }
                    })
                  },
                })
            },
            fail: function () {
              qq.showToast({
                title: '未登录，请登录！',
                icon: 'none',
              })
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var tomo = options.tomo;
    var isHome = options.isHome;
    qq.getStorage({
      key: 'mainInfo',
      success: function(res) {
        if(!res.data.grade){
          qq.showToast({
            title: '版本更新，请重新登录！',
            icon: 'none'
          })
          setTimeout(function () {
            qq.navigateTo({
              url: '/pages/change/change',
            })
          }, 2000)
        }
        var localGrade = res.data.grade;
        qq.getStorage({
          key: 'weeksMode',
          success: function(res) {
            that.setData({
              weeksMode:res.data
            })
          },
          fail:function(){
            qq.setStorage({
              key: 'weeksMode',
              data: 1,
            })
          }
        })
        qq.request({
          url: 'https://api.xcchelper.cn/one/config',
          success: function (res) {
            if (res.data.schedulesTime) {
              that.setData({
                chooseData: res.data[localGrade].chooseData,
                nowWeek:res.data.nowWeek,
                nowWeekI:res.data.nowWeekI
              })
              var nowWeekI = res.data.nowWeekI;
              var schedulesTime = res.data.schedulesTime;
              qq.getStorage({
                key: 'nowWeekI',
                success: function(res) {
                  var nowweeki = res.data;
                  if(nowweeki != nowWeekI){
                    var reDate = {
                      detail:{
                        selectedId:schedulesTime
                      }
                    };
                    that.selectedItem(reDate);
                  }
                  qq.setStorage({
                    key: 'nowWeekI',
                    data: nowWeekI,
                  })
                },
                fail:function(){
                  var reDate = {
                    detail: {
                      selectedId: schedulesTime
                    }
                  };
                  that.selectedItem(reDate);
                  qq.setStorage({
                    key: 'nowWeekI',
                    data: nowWeekI,
                  })
                }
              })
              var schedulesTime = res.data.schedulesTime;
              var xnm, xqm;
              xnm = schedulesTime.slice(0, 4);
              xqm = schedulesTime.slice(-1);
              var date = xnm + xqm;
              qq.getStorage({
                key: 'classcache',
                success: function (res) {
                  if(res.data[0].courseTime){
                    that.setData({
                      classData: res.data,
                    })
                  }else{
                    qq.setStorage({
                      key: 'weeksMode',
                      data: 1,
                    })
                    qq.removeStorage({
                      key: 'classcache',
                      success: function(res) {
                        qq.showModal({
                          title: '提示',
                          content: '课表更新，请返回首页重进',
                          showCancel:false
                        })
                        return
                      },
                    })
                  }
                },
                fail: function () {
                  qq.getStorage({
                    key: 'xh',
                    success: function (res) {
                      var xh = res.data;
                      that.setData({
                        hidden: false,
                      }),
                        qq.getStorage({
                          key: 'pswd',
                          success: function (res) {
                            var pswd = res.data;
                            qq.request({
                              url: 'https://api.xcchelper.cn/info/schedule',
                              method: 'POST',
                              data: {
                                xh: xh,
                                pswd: pswd,
                                year: xnm,
                                term: xqm
                              },
                              header: {
                                'content-type': 'application/x-www-form-urlencoded',
                                'Accept': 'application/json'
                              },
                              success: function (res) {
                                if (res.data.normalCourse.length == 0) {
                                  qq.showToast({
                                    title: '无当前学期或未知错误',
                                    icon: 'none'
                                  })
                                  that.setData({
                                    hidden: true
                                  })
                                  return
                                }
                                if (date == schedulesTime && res.data.normalCourse.length != 0) {
                                  qq.setStorage({
                                    key: 'classcache',
                                    data: res.data.normalCourse,
                                  })
                                  that.setData({
                                    classData: res.data.normalCourse,
                                    hidden: true
                                  })
                                }
                              },
                              fail: function () {
                                qq.showModal({
                                  title: '错误',
                                  content: '联网获取失败，请选择当前学期重试，如多次(三次以上)出现本错误请返回点击“在线反馈”！',
                                })
                              }
                            })
                          },
                        })
                    },
                    fail: function () {
                      qq.showToast({
                        title: '未登录，请登录！',
                        icon: 'none',
                      })
                    }
                  })
                }
              })
            } else {
              qq.showToast({
                title: '服务器出错，返回重进',
                icon: 'none'
              })
              return
            }
          }
        })
      },
    })
    var today = new Date().getDay();
    var weeklist = ['周一','周二','周三','周四','周五','周一','周一'];
    if(isHome == 'true'){
      that.setData({
        isHome:true
      })
      if(tomo == 'true'){
        qq.setNavigationBarTitle({
          title: weeklist[today] + '课程',
        })
      }else{
        qq.setNavigationBarTitle({
          title: weeklist[today-1] + '课程',
        })
      }
    }
    if (tomo == 'true') {
      if (today == 0) {
        that.setData({
          mon_c: 'green'
        })
      }else if (today == 1) {
        that.setData({
          tue_c: 'green'
        })
      } else if (today == 2) {
        that.setData({
          wed_c: 'green'
        })
      } else if (today == 3) {
        that.setData({
          thr_c: 'green'
        })
      } else if (today == 4) {
        that.setData({
          fri_c: 'green'
        })
      } else if (today == 5 || today == 6) {
        that.setData({
          mon_c: 'green'
        })
      };
    } else {
      if (today == 1) {
        that.setData({
          mon_c: 'green'
        })
      } else if (today == 2) {
        that.setData({
          tue_c: 'green'
        })
      } else if (today == 3) {
        that.setData({
          wed_c: 'green'
        })
      } else if (today == 4) {
        that.setData({
          thr_c: 'green'
        })
      } else if (today == 5) {
        that.setData({
          fri_c: 'green'
        })
      } else if (today == 6 || today == 0) {
        that.setData({
          mon_c: 'green'
        })
      };
    };

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
      app.show(this, 'myshow', 1)
    }.bind(this), 500);
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