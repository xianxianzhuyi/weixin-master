var util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    images: [
        {picurl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'},
        {picurl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'},
        {picurl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'}
      ],
    inTheaters: {},
    comingSoon: {},
    top250: {},
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false  // loading
  },
  onLoad:function(){
    var that = this
    //调用应用实例的方法获取全局数据
    wx.showToast({
      title: "加载中...",
      icon:"loading",
      duration:1000
    });
    //sliderList
    // wx.request({
    //   url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) {
    //     that.setData({
    //       images: res.data
    //     })
    //   }
    // })
    var inTheatersUrl = app.globalData.doubanBase + '/v2/movie/in_theaters' + '?start=0&count=10';
    var comingSoonUrl = app.globalData.doubanBase + '/v2/movie/coming_soon' + '?start=0&count=10';
    var top250Url = app.globalData.doubanBase + '/v2/movie/top250' + '?start=0&count=10';
    this.getMovieListData(inTheatersUrl, "inTheaters", "影院热映");
    this.getMovieListData(comingSoonUrl, "comingSoon", "即将上映");
    this.getMovieListData(top250Url, "top250", "豆瓣Top250");
  },
  
  onMoreTap: function (event){
      var category = event.currentTarget.dataset.category;
      wx.navigateTo({
        url: '../more-movie/more-movie?category=' + category
      })
  },
  onMovieTap: function (event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id='+movieId
    })
  },
  getMovieListData: function (url, Key,categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      data: {},
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // console.log(res.data)
        that.moviesData(res.data, Key, categoryTitle)
      },
      fail: function (error) {
        console.log(error);
      }
    })
  },
  moviesData: function (moviesDouban, Key, categoryTitle){
      var movies = [];
      for (var i in moviesDouban.subjects) {
          var subject = moviesDouban.subjects[i];
          var title = subject.title;
          if (title.length >=6) {
            title = title.substring(0,6) + "...";
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
      this.setData(readyData);
      console.log(readyData)
  }
})
