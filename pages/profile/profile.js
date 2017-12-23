// pages/profile/profile.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo: {},
  },
  onLoad: function () {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            })
          }
        })
      }
    })
  }
})