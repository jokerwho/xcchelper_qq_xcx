// miniprogram/pages/xiudu/xiudu.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ts_c:'green',
    zy_c:'gray',
    tz_c:'gray',
    oth_c:'gray',
    hidden:true,
    notqt:true
  },
  
  clickTs:function(){
    var that = this;
    that.setData({
      ts_c: 'green',
      zy_c: 'gray',
      tz_c: 'gray',
      oth_c: 'gray'
    })
  },

  clickZy: function () {
    var that = this;
    that.setData({
      ts_c: 'gray',
      zy_c: 'green',
      tz_c: 'gray',
      oth_c: 'gray'
    })
  },

  clickTz: function () {
    var that = this;
    that.setData({
      ts_c: 'gray',
      zy_c: 'gray',
      tz_c: 'green',
      oth_c: 'gray'
    })
  },

  clickOth: function () {
    var that = this;
    that.setData({
      ts_c: 'gray',
      zy_c: 'gray',
      tz_c: 'gray',
      oth_c: 'green'
    })
  },

  onLoad: function (options) {
    var that = this;
    qq.getStorage({
      key: 'studyInfo',
      success: function(res) {
        that.setData({
          studyInfo:res.data
        })
      },
      fail:function(res){
        qq.showModal({
          title: '错误',
          content: '未找到数据，请返回首页上拉刷新！',
          showCancel:true,
          success:function(res){
            if(res.confirm){
              qq.navigateBack();
            }
          }
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

  }
})