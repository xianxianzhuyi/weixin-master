// pages/more-movie/more-movie.js
var util = require('../../utils/util.js')
var app = getApp();
Page({
  data:{
    movies:{},
    navigateTitle: "",
    requestUrl: "",
    totalCount: 0,
    isEmpty: true,
    hiddenLoading: false,
    disabledRemind: false
  },
  onLoad: function (options) {
      var category = options.category;
      this.data.navigateTitle = category;
      // console.log(category)
      var dataUrl = "";
      switch (category) {
        case "影院热映":
          dataUrl = app.globalData.doubanBase + '/v2/movie/in_theaters';
          break;
        case "即将上映":
          dataUrl = app.globalData.doubanBase + '/v2/movie/coming_soon';
          break;
        case "豆瓣Top250":
          dataUrl = app.globalData.doubanBase + '/v2/movie/top250';
          break;
      }
      this.data.requestUrl = dataUrl;
      util.http(dataUrl, this.moviesData);
     
  },
  onPullDownRefresh: function (event) {
      var refreshUrl = this.data.requestUrl+ "?start=0&count=20";
      this.data.movies = {};
      this.data.isEmpty = true;
      this.data.totalCount = 0;
      util.http(refreshUrl, this.moviesData);
      wx.showNavigationBarLoading();
  },
  onReachBottom: function(event) {
    var NextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
    util.http(NextUrl, this.moviesData);
    wx.showNavigationBarLoading();
  },
  onMovieTap: function (event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + movieId
    })
  },
  moviesData: function (moviesDouban) {
    var movies = [];
    //没有more
    if (moviesDouban.subjects.length <= 0) {
      var _this =this;
      if(!_this.data.disabledRemind) {
        _this.setData ({
          disabledRemind: true
        });
        setTimeout(function(){
          _this.setData({
            disableRemind: false
          });
        },2000)
      }
    }
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
    var totalMovies = {};
    
    
    if(!this.data.isEmpty) {
      totalMovies = this.data.movies.concat(movies);
    }else{
      totalMovies = movies;
      this.data.isEmpty = false;
    }

    console.log(totalMovies)
    this.setData({
        movies: totalMovies
    })
    this.data.totalCount += 20;
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh()
    this.setData({
      hiddenLoading: true
    })
  },
  onReady: function (event) {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    })
  }
})