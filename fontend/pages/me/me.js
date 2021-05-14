var L = require("../../utils/Login.js")
var dao = require("../../utils/Dao.js")
var util = require("../../utils/util.js")
var app = getApp()
// var user

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:[],
    redNum:0,
    statusBarHeight: app.globalData.statusBarHeight
  },

  gontoFeedBack : function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },


  asker_qrcode: function (e) {
    var that = this
    var src = "https://sdwd.xybb.net.cn/files/dada.jpg"
    wx.previewImage({
      current: "https://sdwd.xybb.net.cn/files/dada.jpg",
      urls: ["https://sdwd.xybb.net.cn/files/dada.jpg"],
      success: function (res) {console.log("opopopopopopoo") },
      fail: function (res) { console.log("9999999999999") },
      complete: function (res) { console.log("77777777777")  },
    })
  },
  myanswer:function(){
    wx.navigateTo({
      url: '../myanswer/myanswer',
    })
  },

  myquestion:function(){
    wx.navigateTo({
      url: '../myquestion/myquestion',
    })
  },
  news:function(){
    wx.navigateTo({
      url: '../historynews/historynews',
    })
  },

  // getUserInfo:function(e){
  //   console.log(e)
  //   this.setData({
  //     userInfo:e.detail.userInfo
  //   })
  //   wx.setStorageSync("userInfo", e.detail.userInfo)
  // },
  personaldetail:function(){
    wx.navigateTo({
      url: '../personaldetail/personaldetail',
    })
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user:wx.getStorageSync("user")
    })

    // user = L.getUser();


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
 
    var that = this
    // dao.getNewsList(1, function (res) {
    //   if(res.code==0){
    //     for (let i = 0; i < res.list.length; i++) {
    //       res.list[i].contentPic = JSON.parse(res.list[i].contentPic)
    //       res.list[i].avatar = JSON.parse(res.list[i].avatar)
    //       res.list[i].createdTime = util.getDateDiff(new Date(res.list[i].createdTime + "").getTime())
    //     }
    //     app.globalData.newsList = res.list
    //   }else if (res.code==1){
    //     app.globalData.newsList = []
    //   }
    //   that.setData({
    //     redNum: app.globalData.newsList.length
    //   })
    //
    // })
    
    // console.log("====================", p)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      redNum:0
    })

    // console.log("onhide----------------------------------",this.data.redNum)
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