// miniprogram/pages/luqu/luqu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnhidden:false,
    hidden:true
  },
  submitValue:function(e){
    var value = e.detail.value.ksh;
    if(value.length == 14){
      qq.request({
        url: 'https://api.xcchelper.cn/recruit/ksh',
        method: 'POST',
        data: {
          ksh:String(value)
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        success:function(res){
          if (res.data.totalCount != 0){
            var result = res.data.result[0];
            qq.setStorage({
              key: 'luqu',
              data: result,
            })
            qq.showToast({
              title: '查询成功，正在跳转！',
              icon:'none'
            })
            setTimeout(function(){
              qq.redirectTo({
                url: '/pages/luqu/result/result',
              })
            },2000)
          } else if (res.data.totalCount == 0){
            qq.showModal({
              title: '错误',
              content: '没有找到录取数据！请检查输入',
            })
            return
          }
        },
        fail:function(res){
          qq.showModal({
            title: '错误',
            content: '联网获取失败！',
          })
          return
        }
      })
    }else if(value.length == 18){
      qq.request({
        url: 'https://api.xcchelper.cn/recruit/idcard',
        method: 'POST',
        data: {
          idcard: String(value)
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        success: function (res) {
          if (res.data.totalCount != 0) {
            var result = res.data.result[0];
            qq.setStorage({
              key: 'luqu',
              data: result,
            })
            qq.showToast({
              title: '查询成功，正在跳转！',
              icon: 'none'
            })
            setTimeout(function () {
              qq.redirectTo({
                url: '/pages/luqu/result/result',
              })
            }, 2000)
          } else if (res.data.totalCount == 0) {
            qq.showModal({
              title: '错误',
              content: '没有找到录取数据！请检查输入',
            })
            return
          }
        },
        fail: function (res) {
          qq.showModal({
            title: '错误',
            content: '联网获取失败！',
          })
          return
        }
      })
    }else{
      qq.showModal({
        title: '错误',
        content: '请检查输入内容长度！',
      })
      return
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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