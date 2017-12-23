var WxParse = require('../../../wxParse/wxParse.js');
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    pics: {},
    basicInfo:{},
    properties: [
      {
        "childsCurGoods": [
          {
            "dateAdd": "2017-12-22 13:22:04",
            "id": 4514,
            "name": "金色",
            "paixu": 0,
            "propertyId": 2007,
            "remark": "",
            "userId": 2731,
            "active":true
          },
          {
            "dateAdd": "2017-12-22 13:22:14",
            "id": 4515,
            "name": "黑色",
            "paixu": 0,
            "propertyId": 2007,
            "remark": "",
            "userId": 2731,
            "active": false
          },
          {
            "dateAdd": "2017-12-22 13:22:25",
            "id": 4516,
            "name": "深空灰",
            "paixu": 0,
            "propertyId": 2007,
            "remark": "",
            "userId": 2731,
            "active": false
          }
        ],
        "dateAdd": "2017-12-22 13:20:23",
        "id": 2007,
        "name": "颜色",
        "paixu": 0,
        "userId": 2731
      }
    ],
    selectSizePrice: 5288.00,
    winWidth: 0,
    winHeight: 0,
    hideShopPopup: true,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,  
    currentTab: 0,
    shopType: "addShopCar",
    buyNumber: 0,
    buyNumMin: 1,
    buyNumMax: 100,
    propertyChildIds: "",
    propertyChildNames: "",
  },
  //事件处理函数
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  bindChange: function (e) {//滑动切换tab 
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  swichNav: function (e) {//点击tab切换
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  initNavHeight: function () {//获取系统信息
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
        
      }
    });
  },
  /**
   * 规格选择弹出框
   */
  bindGuiGeTap: function () {
    this.setData({
      hideShopPopup: false
    })
  },
  /**
   * 规格选择弹出框隐藏
   */
  closePopupTap: function () {
    this.setData({
      hideShopPopup: true
    })
  },
  toAddShopCar: function () {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
  },
  tobuy: function () {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
  },  
  numJian: function () {
    if (this.data.buyNumber > this.data.buyNumMin) {
      var currentNum = this.data.buyNumber;
      currentNum--;
      this.setData({
        buyNumber: currentNum
      })
    }
  },
  numJia: function () {
    if (this.data.buyNumber < this.data.buyNumMax) {
      var currentNum = this.data.buyNumber;
      currentNum++;
      this.setData({
        buyNumber: currentNum
      })
    }
  },
  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/mall/cart/cart"
    });
  },
  /**
   * 选择商品规格
   */
  labelItemTap: function (e) {
    var that = this;
    var childs = that.data.properties[e.currentTarget.dataset.propertyindex].childsCurGoods;
    for (var i = 0; i < childs.length; i++) {
      that.data.properties[e.currentTarget.dataset.propertyindex].childsCurGoods[i].active = false;
    }
    // 设置当前选中状态
    
    that.data.properties[e.currentTarget.dataset.propertyindex].childsCurGoods[e.currentTarget.dataset.propertychildindex].active = true;

    // 获取所有的选中规格尺寸数据
    var needSelectNum = that.data.properties.length;
    var curSelectNum = 0;
    var propertyChildIds = "";
    var propertyChildNames = "";
    for (var i = 0; i < that.data.properties.length; i++) {
      childs = that.data.properties[i].childsCurGoods;
      for (var j = 0; j < childs.length; j++) {
        if (childs[j].active) {
          curSelectNum++;
          propertyChildIds = propertyChildIds + that.data.properties[i].id + ":" + childs[j].id + ",";
          propertyChildNames = propertyChildNames + that.data.properties[i].name + ":" + childs[j].name + "  ";
        }
      }
    }
    this.setData({
      properties: that.data.properties,
    })  
  },
  onLoad: function (e) {
    this.initNavHeight();
    var that = this;
    that.setData({
      pics: [
         {
          "goodsId": 15423,
          "id": 80874,
          "pic": "https://cdn.it120.cc/apifactory/2017/12/19/13b11ff57d2867c0cc847881b67edcc7.jpg",
          "userId": 2731
        },
        {
          "goodsId": 15423,
          "id": 80875,
          "pic": "https://cdn.it120.cc/apifactory/2017/12/19/b75dfc1956349a40d11449f02695ae9b.jpg",
          "userId": 2731
        },
        {
          "goodsId": 15423,
          "id": 80876,
          "pic": "https://cdn.it120.cc/apifactory/2017/12/19/c8ef8486fdff8f7a3654c93d0f2d2aed.jpg",
          "userId": 2731
        }
      ],  
      basicInfo: {
        "barCode": "",
        "categoryId": 5215,
        "characteristic": "双面全玻璃设计、A11 仿生、支持无线充电",
        "commission": 0,
        "commissionType": 0,
        "dateAdd": "2017-12-22 13:19:25",
        "dateStart": "2017-12-22 13:13:50",
        "dateUpdate": "2017-12-22 13:33:07",
        "id": 15423,
        "logisticsId": 0,
        "minPrice": 6188,
        "name": "Apple iPhone 8 Plus 64G 金色 移动联通电信4G手机",
        "numberFav": 0,
        "numberGoodReputation": 0,
        "numberOrders": 0,
        "originalPrice": 6188,
        "paixu": 0,
        "pic": "https://cdn.it120.cc/apifactory/2017/12/19/13b11ff57d2867c0cc847881b67edcc7.jpg",
        "propertyIds": ",2007,2008,",
        "recommendStatus": 1,
        "recommendStatusStr": "推荐",
        "shopId": 0,
        "status": 0,
        "statusStr": "上架",
        "stores": 200,
        "userId": 2731,
        "videoId": "",
        "views": 9,
        "weight": 0.3} ,
      
    });
    var content = "<p style=\"font-size:16px;color:#000;line-height:30px;\" >Apple iPhone 7 32G 黑色 移动联通电信4G手机</p><p><img src=\"https://cdn.it120.cc/apifactory/2017/12/19/4c782ac9c08ccc8aa4ebcbbb1d35087a.jpg\" style=\"\" title=\"apifactory/2017/12/19/4c782ac9c08ccc8aa4ebcbbb1d35087a.jpg\"/></p><p><img src=\"https://cdn.it120.cc/apifactory/2017/12/19/3c5915f25c40227a5d8aeaada6aca3b4.jpg\" style=\"\" title=\"apifactory/2017/12/19/3c5915f25c40227a5d8aeaada6aca3b4.jpg\"/></p><p><img src=\"https://cdn.it120.cc/apifactory/2017/12/19/18fc0d22c5b0e124474f16f733c70232.jpg\" style=\"\" title=\"apifactory/2017/12/19/18fc0d22c5b0e124474f16f733c70232.jpg\"/></p><p><br/></p>";

    var shopCarInfo = {"shopList": [{ "goodsId": 15423, "pic": "https://cdn.it120.cc/apifactory/2017/12/19/13b11ff57d2867c0cc847881b67edcc7.jpg", "name": "Apple iPhone 8 Plus 64G 金色 移动联通电信4G手机", "propertyChildIds": "2007:4514,2008:4517,", "label": "颜色:金色  容量:全网通64G  ", "price": 6188.00, "left": "margin-left:0px", "active": false, "number": 1, "logisticsType": 1, "weight": 0.3 }, { "goodsId": 15426, "pic": "https://cdn.it120.cc/apifactory/2017/12/19/ae99821588de29fd92c8e24ef6e07d05.jpg", "name": "小米MIX2全网通版6GB+64GB陶瓷黑移动联通电信4G手机", "propertyChildIds": "", "label": "", "price": 3299.00, "left": "margin-left:0px", "active": false, "number": 1, "logisticsType": 1, "weight": 0.3 }], "shopNum": 2 }
    // 写入本地存储
    wx.setStorage({
      key: "shopCarInfo",
      data: shopCarInfo
    })
    console.log(content)
    WxParse.wxParse('content', 'html', content, that, 4);
  },
})


