// pages/news/news.js

var app = getApp();
var dao = require("../../utils/Dao.js")
var L = require("../../utils/Login.js")
var user 
Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    comment : [],
    historyNewsList : [],
    touchHistory : false,
    uuid:''
  },



  getHistoryNews:function(){
    var that = this
    dao.getNewsList(3, function (res) {
      if(res.code==0){
        for (let i = 0; i < res.list.length; i++) {
          res.list[i].contentPic = JSON.parse(res.list[i].contentPic)
        }

        // console.log(res.list,"resresresresresresresresres")
        that.setData({
          historyNewsList: res.list,
          touchHistory: true
        })
      }

    })

  },

  readed:function(){
    var that = this 
    dao.readed(that.data.newsList,function(res){
        // console.log("消息已经读了。。。。。。。。。。。。。。。")
    })
  },

  historyed:function(){
    var that = this
    dao.historyed( function (res) {
    })
  },

  yidu:function (e){
    var that=this;
    console.log("已读")
    console.log(e);
    dao.yidu(e.currentTarget.dataset.commentId,function (res){
      that.getNewComment();
    });
  },
  getNewComment(){
    var that=this;
    // console.log(this.data.uuid)
    dao.getNewComment(this.data.uuid,function (res){
      console.log("我回来了")
      console.log(res.data)
      that.setData({
        comment:res.data
      })
    });
    // console.log("是我")
    // console.log(that.data.comment)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    user = L.getUser();
    // console.log(app.globalData.newsList,"qqqqq")
    var array = app.globalData.newsList

    this.setData({
      newsList : array,
      uuid:app.globalData.user.uuid
    })
    this.getNewComment();
    var len = that.data.newsList.length
    if (len != 0) {
      for (let i = 0; i < len; i++) {
        that.data.newsList[i].contentPic = that.data.newsList[i].contentPic
      }
    }
    // that.data.newsList.replace('"','').replace('"','')
    // console.log(that.data.newsList,"rrrr")
    // that.readed();
 
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
    // console.log("news     onshow")
    app.globalData.newsList = []
    this.getNewComment();
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
    // console.log("----------onUnload--------")
    this.historyed()
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