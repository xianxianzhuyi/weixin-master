Page({
  data: {
    proLists: {},
  },
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/mall/detail/detail"
    })
  },
  onLoad(e) {
    var that = this
    //调用应用实例的方法获取全局数据
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 1000
    });
    this.setData({
      proLists: [
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "798" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "198" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "99" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "234" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "11" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "22" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "0" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "10" },
      ],
    });
  }

})