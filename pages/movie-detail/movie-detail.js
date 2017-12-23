// pages/movie-detail/movie-detail.js
var util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
       movie: {},
  },
  onLoad: function (options) {
    //调用应用实例的方法获取全局数据
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 1000
    });
      var movieId = options.id;
      var url = app.globalData.doubanBase + '/v2/movie/subject/' + movieId; 
      util.http(url, this.moviesData);

  },
  moviesData: function(data) {
    console.log(data)
    var director = {
      avatar : "",
      name: "",
      id: ""
    }
    if (data.directors[0] != null) {
      if (data.directors[0].avatars != null) {
        director.avatar = data.directors[0].avatars.large
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].id;
    }
    var movie = {
      movieImg: data.images?data.images.large : "",
      title: data.title,
      country: data.countries[0],
      originalTitle: data.original_title,
      collectCount: data.collect_count,
      commentCount: data.comments_count,
      year: data.year,
      generes: data.genres.join("、"),
      score: data.rating.average,
      stars: util.convertToStarsArray(data.rating.stars),
      director: director,
      summary: data.summary,
      casts: util.convertToCastString(data.casts),
      castsInfo: util.convertToCastInfos(data.casts)
    }
    this.setData ({
      movie: movie
    })
    wx.setNavigationBarTitle({ title: movie.title })
  }
})