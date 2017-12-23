Page({
  data: {
    iproLists:{},
    proLists: {},
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false  // loading
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
      images: [
        { picurl: '/images/img/banner.jpg' },
        { picurl: '/images/img/banner1.jpg' },
        { picurl: '/images/img/banner2.jpg' }
      ],
      ad_images: [
        { picurl: '/images/img/banner3.jpg' }
      ],
      nav_list: [
        {
          "pic_url": "/images/mall/nav1.png",
          "title": "母婴馆",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav4.png",
          "title": "营养保健",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav2.png",
          "title": "进口美食",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav3.png",
          "title": "个护美妆",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav5.png",
          "title": "全球名店",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav6.png",
          "title": "数码家电",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav7.png",
          "title": "运动服饰",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav8.png",
          "title": "大牌奢品",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav9.png",
          "title": "箱包礼品",
          "url": "/pages/mall/list/list"
        },
        {
          "pic_url": "/images/mall/nav10.png",
          "title": "居家生活",
          "url": "/pages/mall/list/list"
        }
      ],
      msgList: [
        { url: "url", title: "公告：多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
        { url: "url", title: "公告：悦如公寓三周年生日趴邀你免费吃喝欢唱嗨起来！" },
        { url: "url", title: "公告：你想和一群有志青年一起过生日嘛？" }
        ],
      iproLists: [
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg",price: "2999.0" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0" },
      ],
      proLists: [
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0" },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "198"  },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "99"  },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "234"  },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "11"  },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "22"  },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "0"  },
        { url: "/pages/mall/detail/detail", title: "红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情", image: "https://test.dscmall.cn/images/201703/thumb_img/0_thumb_G_1489106901583.jpg", price: "2999.0", sales: "10" },
      ],
    });
  }
})
