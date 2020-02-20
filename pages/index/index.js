//index.js
const app = getApp()
Page({
  data: {
    mainLoaded: 0,
    menuHidden: true,
    xh: '',
    pswd: '',
    day: 'XXX',
    days: '上拉刷新',
    hidden: true,
    dayornight:'☀',
    userInfo: {
      avatarUrl: "",
      nickName: "",
    }
  },
  courseMsg:function(){
    var that = this;
    qq.navigateTo({
      url: '/pages/index/msg/msg',
    })
  },
  oneGet: function() {
    var that = this;
    var nowmonth = new Date().getMonth() + 1;
    var nowday = new Date().getDate();
    var nowhour = new Date().getHours();

    qq.request({
      url: 'https://api.algorimind.com:8000/one',
      success: function(res) {
        that.setData({
          oneday: nowday,
          onemonth: nowmonth,
          onecontent: res.data,
        })
        if(nowhour >= 20){
          that.setData({
            dayornight: '🌙'
          })
        }
      },
      fail: function() {
        that.setData({
          oneday: 'N',
          onemonth: 'N',
          onecontent: '获取失败'
        })
      }
    })

  },

  onMenu: function() {
    var that = this;
    qq.getStorage({
      key: 'inMenu',
      success: function(res) {
        that.setData({
          menuHidden:!res.data
        })
        qq.setStorage({
          key: 'inMenu',
          data: !res.data,
        })
      },
      fail:function(){
        qq.setStorage({
          key: 'inMenu',
          data: false,
        })
        that.setData({
          menuHidden: false,
        })
      }
    })
  },
  back: function() {
    this.setData({
      menuHidden: true
    })
  },

  clickCet: function() {
    var that = this;
    var nowyear = new Date().getFullYear();
    var nowmonth = new Date().getMonth() + 1;
    var nowday = new Date().getDate();
    var nowtime = nowyear + '-' + nowmonth + '-' + nowday;
    var nowtime2 = nowyear + '/' + nowmonth + '/' + nowday;
    qq.request({
      url: 'https://api.algorimind.com:8000/one/config',
      success: function (res) {
        if (res.data.count) {
          var cetDate = res.data.count.cetDate;
          var cetDate2 = res.data.count.cetDate2;
          var a1 = Date.parse(new Date(nowtime));
          var a2 = Date.parse(new Date(cetDate));
          var i1 = Date.parse(new Date(nowtime2));
          var i2 = Date.parse(new Date(cetDate2));
          var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24)) || parseInt((i2 - i1) / (1000 * 60 * 60 * 24));
          that.setData({
            day: '四六级考试',
            days: day,
            menuHidden: true,
            daysMode: 1
          })
          qq.setStorage({
            key: 'daysMode',
            data: 1,
          })
        } else {
          qq.showToast({
            title: '倒计时服务器错误',
            icon: 'none'
          })
        }
      },
      fail:function(res){
        qq.showToast({
          title: '倒计时服务器错误',
          icon:'none'
        })
      }
    })
  },
  clickKy: function() {
    var that = this;
    var nowyear = new Date().getFullYear();
    var nowmonth = new Date().getMonth() + 1;
    var nowday = new Date().getDate();
    var nowtime = nowyear + '-' + nowmonth + '-' + nowday;
    var nowtime2 = nowyear + '/' + nowmonth + '/' + nowday;
    qq.request({
      url: 'https://api.algorimind.com:8000/one/config',
      success: function (res) {
        if (res.data.count) {
          var kyDate = res.data.count.kyDate;
          var kyDate2 = res.data.count.kyDate2;
          var a1 = Date.parse(new Date(nowtime));
          var a2 = Date.parse(new Date(kyDate));
          var i1 = Date.parse(new Date(nowtime2));
          var i2 = Date.parse(new Date(kyDate2));
          var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24)) || parseInt((i2 - i1) / (1000 * 60 * 60 * 24));
          that.setData({
            day: res.data.count.kyYear,
            days: day,
            menuHidden: true,
            daysMode: 2
          })
          qq.setStorage({
            key: 'daysMode',
            data: 2,
          })
        } else {
          qq.showToast({
            title: '倒计时服务器错误',
            icon: 'none'
          })
        }
      },
      fail: function (res) {
        qq.showToast({
          title: '倒计时服务器错误',
          icon: 'none'
        })
      }
    })
  },
  clickQm: function() {
    var that = this;
    var nowyear = new Date().getFullYear();
    var nowmonth = new Date().getMonth() + 1;
    var nowday = new Date().getDate();
    var nowtime = nowyear + '-' + nowmonth + '-' + nowday;
    var nowtime2 = nowyear + '/' + nowmonth + '/' + nowday;
    qq.request({
      url: 'https://api.algorimind.com:8000/one/config',
      success: function (res) {
        if (res.data.count) {
          var qmDate = res.data.count.qmDate;
          var qmDate2 = res.data.count.qmDate2;
          var a1 = Date.parse(new Date(nowtime));
          var a2 = Date.parse(new Date(qmDate));
          var i1 = Date.parse(new Date(nowtime2));
          var i2 = Date.parse(new Date(qmDate2));
          var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24)) || parseInt((i2 - i1) / (1000 * 60 * 60 * 24));
          that.setData({
            day: '期末大概',
            days: day,
            menuHidden: true,
            daysMode: 3
          })
          qq.setStorage({
            key: 'daysMode',
            data: 3,
          })
        } else {
          qq.showToast({
            title: '倒计时服务器错误',
            icon: 'none'
          })
        }
      },
      fail: function (res) {
        qq.showToast({
          title: '倒计时服务器错误',
          icon: 'none'
        })
      }
    })
  },
  clickJsj: function () {
    var that = this;
    var nowyear = new Date().getFullYear();
    var nowmonth = new Date().getMonth() + 1;
    var nowday = new Date().getDate();
    var nowtime = nowyear + '-' + nowmonth + '-' + nowday;
    var nowtime2 = nowyear + '/' + nowmonth + '/' + nowday;
    qq.request({
      url: 'https://api.algorimind.com:8000/one/config',
      success: function (res) {
        if (res.data.count) {
          var jsjDate = res.data.count.jsjDate;
          var jsjDate2 = res.data.count.jsjDate2;
          var a1 = Date.parse(new Date(nowtime));
          var a2 = Date.parse(new Date(jsjDate));
          var i1 = Date.parse(new Date(nowtime2));
          var i2 = Date.parse(new Date(jsjDate2));
          var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24)) || parseInt((i2 - i1) / (1000 * 60 * 60 * 24));
          that.setData({
            day: '计算机二级考试',
            days: day,
            menuHidden: true,
            daysMode: 4
          })
          qq.setStorage({
            key: 'daysMode',
            data: 4,
          })
        } else {
          qq.showToast({
            title: '倒计时服务器错误',
            icon: 'none'
          })
        }
      },
      fail: function (res) {
        qq.showToast({
          title: '倒计时服务器错误',
          icon: 'none'
        })
      }
    })
  },
  clickJz: function () {
    var that = this;
    var nowyear = new Date().getFullYear();
    var nowmonth = new Date().getMonth() + 1;
    var nowday = new Date().getDate();
    var nowtime = nowyear + '-' + nowmonth + '-' + nowday;
    var nowtime2 = nowyear + '/' + nowmonth + '/' + nowday;
    qq.request({
      url: 'https://api.algorimind.com:8000/one/config',
      success: function (res) {
        if (res.data.count) {
          var jzDate = res.data.count.jzDate;
          var jzDate2 = res.data.count.jzDate2;
          var a1 = Date.parse(new Date(nowtime));
          var a2 = Date.parse(new Date(jzDate));
          var i1 = Date.parse(new Date(nowtime2));
          var i2 = Date.parse(new Date(jzDate2));
          var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24)) || parseInt((i2 - i1) / (1000 * 60 * 60 * 24));
          that.setData({
            day: '教师资格证考试',
            days: day,
            menuHidden: true,
            daysMode: 5
          })
          qq.setStorage({
            key: 'daysMode',
            data: 5,
          })
        }else{
          qq.showToast({
            title: '倒计时服务器错误',
            icon:'none'
          })
        }
      },
      fail: function (res) {
        qq.showToast({
          title: '倒计时服务器错误',
          icon: 'none'
        })
      }
    })
  },
  getstudy:function(){
    var that = this;
    qq.getStorage({
      key: 'studyInfo',
      success: function(res) {
        that.setData({
          studyInfo:res.data
        })
      },
      fail:function(){
        qq.getStorage({
          key: 'xh',
          success: function (res) {
            var xh = res.data
            qq.getStorage({
              key: 'pswd',
              success: function (res) {
                var pswd = res.data;
                that.setData({
                  hidden:false
                })
                qq.request({
                  url: 'https://api.algorimind.com:8000/info/study',
                  method: 'POST',
                  data: {
                    xh: xh,
                    pswd: pswd
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                  },
                  success: function (res) {
                    if (res.data.gpa) {
                      that.setData({
                        studyInfo: res.data,
                        hidden: true
                      })
                      qq.setStorage({
                        key: 'studyInfo',
                        data: res.data,
                      })
                    } else {
                      that.setData({
                        hidden: true
                      })
                      qq.showModal({
                        title: '错误',
                        content: '获取修读情况失败，请上拉重试！',
                        showCancel: true
                      })
                    }
                  },
                  fail: function (res) {
                    that.setData({
                      hidden: true
                    })
                    qq.showModal({
                      title: '错误',
                      content: '获取修读情况失败，请上拉重试！',
                      showCancel: true
                    })
                  }
                })
              },
            })
          },
        })
      }
    })
  },
  todayClass:function(){
    qq.navigateTo({
      url: '/pages/schedule/schedule?tomo=false&isHome=true',
    })
  },
  tomoClass: function() {
    qq.navigateTo({
      url: '/pages/schedule/schedule?tomo=true&isHome=true',
    })
  },
  calmsg: function() {
    qq.showToast({
      title: 'GPA = Σ(课程学分x绩点)÷Σ学分',
      icon: 'none',
      duration: 5000,
    })
  },
  developing: function() {
    qq.showToast({
      title: '未到评教时间段！',
      icon: 'none',
    })
  },
  nopass: function () {
    qq.showToast({
      title: '功能暂不开放！',
      icon: 'none',
    })
  },
  onPullDownRefresh: function() {
    var that = this;
    qq.getStorage({
      key: 'daysMode',
      success: function(res) {
        if (res.data == 1) {
          that.clickCet();
        } else if (res.data == 2) {
          that.clickKy();
        } else if (res.data == 3) {
          that.clickQm();
        }else if(res.data == 4){
          that.clickJsj();
        }else if(res.data == 5){
          that.clickJz();
        }
      },
      fail: function() {
        that.clickCet();
      }
    })
      qq.getStorage({
        key: 'loged',
        success: function(res) {
          qq.getStorage({
              key: 'mainInfo',
              success: function(res) {
                that.setData({
                    mainInfo: res.data,
                  }),
                  that.getstudy();
                  qq.stopPullDownRefresh();
                  qq.showToast({
                    title:'刷新成功！',
                    icon:'none'
                  })
              },
            }),
            that.setData({
              mainLoaded: res.data,
            })
        },
        fail: function() {
          qq.navigateTo({
            url: '/pages/change/change',
          })
        }
      })
  },

  onLoad: function() {
    var that = this;
    qq.getStorage({
      key: 'loged',
      success: function(res) {
        qq.getStorage({
          key: 'refresh',
          success: function (res) { },
          fail: function (res) {
            qq.showToast({
              title: '版本重构，务必重新登录！',
              icon: 'none',
              duration: 2000
            })
            setTimeout(function (res) {
              qq.redirectTo({
                url: '/pages/change/change',
              })
            }, 2200)
            return
          }
        })
      },
    })
    that.oneGet();
    that.getstudy();
    setTimeout(function(){
      qq.request({
        url: 'https://api.algorimind.com:8000/one/config',
        success: function (res) {
          if (res.data.msg) {
            var title = res.data.msg.title;
            var content = res.data.msg.content;
            var msgKey = res.data.msg.key;
            var show = res.data.msg.show;
            if (show == true) {
              qq.getStorage({
                key: 'msgKey',
                success: function (res) {
                  if (res.data != msgKey) {
                    qq.showModal({
                      title: title,
                      content: content,
                      showCancel: false
                    })
                    qq.setStorage({
                      key: 'msgKey',
                      data: msgKey,
                    })
                  }
                },
                fail: function (res) {
                  qq.showModal({
                    title: title,
                    content: content,
                    showCancel: false
                  })
                  qq.setStorage({
                    key: 'msgKey',
                    data: msgKey,
                  })
                }
              })
            }
          }
        }
      })
    },1800)
    var nowyear = new Date().getFullYear();
    var nowmonth = new Date().getMonth() + 1;
    var nowday = new Date().getDate();
    var defaultyear = nowyear - 1;

    if (nowmonth < 9) {
      var defaultmonth = 2
    } else {
      defaultmonth = 1
    };
    qq.getStorage({
      key: 'daysMode',
      success: function(res) {
        that.setData({
          daysMode:res.data
        })
        if (res.data == 1) {
          that.clickCet();
        } else if (res.data == 2) {
          that.clickKy();
        } else if (res.data == 3) {
          that.clickQm();
        } else if (res.data == 4) {
          that.clickJsj();
        } else if (res.data == 5) {
          that.clickJz();
        }
      },
      fail: function() {
        qq.setStorage({
          key: 'daysMode',
          data: 1,
        })
      }
    })
      qq.getStorage({
        key: 'loged',
        success: function(res) {
          qq.getStorage({
              key: 'mainInfo',
              success: function(res) {
                that.setData({
                  mainInfo: res.data,
                })
              },
            }),
          that.setData({
            mainLoaded: res.data,
          })

        },
        fail: function() {
          qq.navigateTo({
            url: '/pages/change/change',
          })
        }
      })

  },

  onShareAppMessage: function(res) {
    if (res.from === 'button') {}
    return {
      title: '西院助手-西子必备神器',
      path: '/pages/index/index',
      imageUrl: '/images/homeshare.png',
      success: function(res) {}
    }
  },
  
  onShow: function() {
    setTimeout(function() {
      app.show(this, 'nav_show', 1)
    }.bind(this), 1000);
    setTimeout(function() {
      app.sliderightshow(this, 'btn1', 0, 1)
    }.bind(this), 1200);
    setTimeout(function() {
      app.sliderightshow(this, 'btn2', 0, 1)
    }.bind(this), 1400);
    setTimeout(function() {
      app.sliderightshow(this, 'btn3', 0, 1)
    }.bind(this), 1600);
    setTimeout(function() {
      app.sliderightshow(this, 'btn4', 0, 1)
    }.bind(this), 1800);
    setTimeout(function() {
      app.show(this, 'one_show', 1)
    }.bind(this), 2100);
    setTimeout(function() {
      app.show(this, 'cal_show', 1)
    }.bind(this), 2400);
    setTimeout(function() {
      app.show(this, 'class_show', 1)
    }.bind(this), 2700);
    setTimeout(function() {
      app.show(this, 'info_show', 1)
    }.bind(this), 3000);
  }
})