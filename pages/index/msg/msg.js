Page({

  /**
   * 页面的初始数据
   */
  data: {

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
              url: 'https://api.algorimind.com:8000/info/message',
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
                if(res.data[0].message){
                  that.setData({
                    msgInfo: res.data,
                    hidden: true
                  })
                }else{
                  that.setData({
                    hidden: true
                  })
                  qq.showModal({
                    title: '错误',
                    content: '数据获取失败，请等待几秒后重试',
                    showCancel: false
                  })
                  return
                }
              },
              fail:function(res){
                that.setData({
                  hidden:true
                })
                qq.showModal({
                  title: '错误',
                  content: '联网获取失败，请检查网络后重试',
                  showCancel:false
                })
                return
              }
            })
          },
        })
      },
      fail:function(){
        qq.showToast({
          title: '未登录，请先登录',
          icon:'none'
        })
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
    if (res.from === 'button') { }
    return {
      title: '西院助手-西子必备神器',
      path: '/pages/index/index',
      imageUrl: '/images/homeshare.png',
      success: function (res) { }
    }
  }
})