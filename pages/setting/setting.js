// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  clearCache: function() {
    qq.showModal({
      title: '是否清除',
      content: '清除缓存将清除你在本小程序里所有的缓存信息',
      cancelText: '取消',
      confirmText: '清除',
      confirmColor: 'red',
      success(res) {
        if (res.confirm) {
          qq.clearStorage();
          qq.showToast({
            title: '清除成功',
          })
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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