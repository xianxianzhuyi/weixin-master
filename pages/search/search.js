var util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    searchResult: {},
    searchinput: ''
  },
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 1000
    });
  },
  onMovieTap: function (event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + movieId
    })
  },
  onCancelImgTap: function (evente) {
    this.setData({
      searchResult: {},
      searchinput: ''
    })

  },
  onBindBlur: function (event){
    var keyword = event.detail.value;
    console.log(keyword)
    var searchUrl = app.globalData.doubanBase + "/v2/movie/search?q=" + keyword;
    this.getMovieListData(searchUrl, "searchResult", "");
  },
  getMovieListData: function (url, settedKey, categoryTitle) {
    wx.showNavigationBarLoading()
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        that.moviesData(res.data, settedKey, categoryTitle)
      },
      fail: function (error) {
        // fail
        console.log(error)
      }
    })
  },
  moviesData: function (moviesDouban, Key, categoryTitle) {
    var movies = [];
    for (var i in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[i];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
        stars: util.convertToStarsArray(subject.rating.stars)
      }
      movies.push(temp);
    }
    //console.log(movies)
    var readyData = {};
    readyData[Key] = {
      categoryTitle: categoryTitle,
      movies: movies
    }
    wx.hideNavigationBarLoading();
    this.setData(readyData);
    
    console.log(readyData)
  }
})