const app = getApp();
Page({
  data: {
    tableHeight: 700,
    chooseTitle: ['', '学期查询'],
    chooseData: [],
    hidden: true,
  },
  selectedItem: function(e) {
    var that = this;
    qq.request({
      url: 'https://api.algorimind.com:8000/one/config',
      success:function(res){
        if(res.data.gradesTime){
          var gradesTime = res.data.gradesTime;
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
                      url: 'https://api.algorimind.com:8000/info/grade',
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
                        if (JSON.stringify(res.data) == "{}") {
                          qq.showToast({
                            title: '无当前学期或未知错误',
                            icon: 'none'
                          })
                          that.setData({
                            hidden: true,
                          })
                          return
                        };
                        that.setData({
                          classInfo: res.data.course,
                          hidden: true,
                        })
                        if (date == gradesTime) {
                          console.log('yes')
                          qq.setStorage({
                            key: 'gradecache',
                            data: res.data.course,
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
      }
    })
  },
  onLoad: function() {
    var that = this;
    qq.getStorage({
      key: 'mainInfo',
      success: function (res) {
        if (!res.data.grade) {
          qq.showToast({
            title: '版本更新，请重新登录！',
            icon: 'none'
          })
          setTimeout(function(){
            qq.navigateTo({
              url: '/pages/change/change',
            })
          },2000)
          return
        }
        var localGrade = res.data.grade;
        qq.request({
          url: 'https://api.algorimind.com:8000/one/config',
          success:function(res){
            if(res.data.gradesTime){
              that.setData({
                chooseData:res.data[localGrade].chooseData2
              })
              var gradesTime = res.data.gradesTime;
              var xnm, xqm;
              xnm = gradesTime.slice(0, 4);
              xqm = gradesTime.slice(-1);
              qq.getStorage({
                key: 'gradecache',
                success: function (res) {
                  that.setData({
                    classInfo: res.data,
                  })
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
                              url: 'https://api.algorimind.com:8000/info/grade',
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
                                if (res.data.course.length != 0) {
                                  that.setData({
                                    classInfo: res.data.course,
                                    hidden: true,
                                  }),
                                    qq.setStorage({
                                      key: 'gradecache',
                                      data: res.data.course,
                                    })
                                } else {
                                  qq.showModal({
                                    title: '错误',
                                    content: '联网获取失败，请选择当前学期重试，如多次(三次以上)出现本错误请返回点击“在线反馈”！',
                                  })
                                  return
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
            }else{
              qq.showToast({
                title: '服务器出错，返回重进',
                icon:'none'
              })
              return
            }
          }
        })
      },
    })
  },

  onShow: function() {
    setTimeout(function() {
      app.show(this, 'gradeshow', 1)
    }.bind(this), 500);
  },
  onReady: function() {},
})