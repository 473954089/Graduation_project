var app = getApp();
var dao = require("../../utils/Dao.js");
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    red1 : false,
    red2: false,
    red3: false,


    statusBarHeight: app.globalData.statusBarHeight,
    capsule: app.globalData.capsule,
    bei: 750 / app.globalData.screenWidth,
  
    currentTab: 0,
    swiper_height:0,

    newsList : [],
    historyNewsList : [],
    chatList : [],
    beGoodList : [],

    touchHistory : false,
  },

  navigateBack : function(){
    wx.navigateBack({
    })
  },


  enterRoom : function(e){
    // console.log(e,"fsfdsfsdfsdf")
    var that = this
    wx.navigateTo({
      url: '../chat/chat?roomId=' + e.currentTarget.dataset.roomId + "&toUserId=" + e.currentTarget.dataset.toUserId,
    })
  },

  getsystemInfo:function(){
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res)
          that.setData({
            swiper_height:res.windowHeight,
          })
       },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  
  swichNav: function (e) {
    var that = this;
    if (that.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
      if(e.target.dataset.current==2){
        that.setData({
          red3 : false,
          red1 : false,
        })
        //滚动到点赞页面则将点赞消息设为已读
        that.historyed2()
      } else if (e.target.dataset.current == 1){
        that.setData({
          red1 : false,
        })
      }
    }
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current,
    })
    if (e.detail.current==2){
      this.setData({
        red3 : false,
        red1 : false,
      })
      //滚动到点赞页面则将点赞消息设为已读
      this.historyed2()
    } else if (e.detail.current == 1){
      this.setData({
        red1 : false,
      })
    }
  },

  getHistoryList: function () {

    var that = this
    dao.getNewsList(2, function (res) {
      //这里要判断调用是否成功，成功才能有list，否则会报错
      if (res.code == 0) {
        for (let i = 0; i < res.list.length; i++) {
          res.list[i].contentPic = JSON.parse(res.list[i].contentPic)
          res.list[i].avatar = JSON.parse(res.list[i].avatar)
          res.list[i].createdTime = util.getDateDiff(new Date(res.list[i].createdTime + "").getTime())
        }


        that.setData({
          newsList : res.list,
        })
      } 
      // else if (res.code == 1) {
      //   app.globalData.newsList = []
      // }

    })

  },

  getHistoryBeGoodList : function(){
    var that = this 
    dao.getBeGoodList(2, function (data) {
      if (data.code == 0) {
        //把图片转化为可显示的格式
        for (let i = 0; i < data.list.length; i++) {
          // data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
          //data.list[i].avatar = JSON.parse(data.list[i].avatar)
          data.list[i].createdTime = util.getDateDiff(new Date(data.list[i].createdTime + "").getTime())


        }
        // *************
        that.setData({
          beGoodList: data.list,
        })

      }

    })
  },


  //请求评论列表
  getNewsList: function () {
    // console.log("getNewsList----------")
    var that = this
    dao.getNewsList(1, function (res) {
      //这里要判断调用是否成功，成功才能有list，否则会报错
      if (res.code == 0) {
        for (let i = 0; i < res.list.length; i++) {
          res.list[i].contentPic = JSON.parse(res.list[i].contentPic)
          res.list[i].avatar = JSON.parse(res.list[i].avatar)
          res.list[i].createdTime = util.getDateDiff(new Date(res.list[i].createdTime + "").getTime())
        }

        that.setData({
          newsList : res.list,
          red1 : true
        })
        
      } else if (res.code == 1) {
        // console.log("wofakwofakwofakwofakwofakowofak")
        that.setData({
          newsList: [],
        
        })
      }
      
      
    })


  },


  //请求私聊消息的房间列表
  getChatList : function(){
    var that = this
    var userId = wx.getStorageSync('user').userId
    dao.getRoomList(userId,function(data){

      if (data.code == 0) {
        //把图片转化为可显示的格式
        for (let i = 0; i < data.list.length; i++) {
          // data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
          //data.list[i].avatar = JSON.parse(data.list[i].avatar)
          data.list[i].createdTime = util.getDateDiff(new Date(data.list[i].createdTime + "").getTime())


        }
        // *************
        // console.log(data.list,"\\\\\\\\\\\\")
        that.setData({
          chatList: data.list,
        })


        let j = 0;
        for(let i = 0 ; i < data.list.length ; i++){
          if(data.list[i].unreadNum!=0){
            j++;
          }
        }
        if(j>0){
          that.setData({
            red2 : true
          })
        }else{
          that.setData({
            red2 : false
          })
        }

      } 

    })
  },

  gotoDetail : function(e){
    
    
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.dataset.questionId,
    })
  },

  //将评论消息设为已读
  historyed : function(){
    dao.historyed(function(){
      // console.log("设置已读消息成功")
    })
  },

  //将点赞信息设为已读
  historyed2 : function(){
    dao.historyed2(function () {
      // console.log("设置dianzan消息已读成功")
    })
  },

  //获取通知（点赞）列表
  getBeGoodList :function(){
    var that = this 
    dao.getBeGoodList(1,function(data){
      if (data.code == 0) {
        //把图片转化为可显示的格式
        for (let i = 0; i < data.list.length; i++) {
          // data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
          //data.list[i].avatar = JSON.parse(data.list[i].avatar)
          data.list[i].createdTime = util.getDateDiff(new Date(data.list[i].createdTime + "").getTime())


        }
        // *************
        // console.log(data.list.length!=0,"//////////")
        if(data.list.length!=0){
          that.setData({
            beGoodList: data.list,
            red3 : true,
          })
        }

        
      } 

    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getsystemInfo()
    this.setData({
      newsList : app.globalData.newsList
    })
    this.historyed()

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
    this.getNewsList()
    this.getChatList()
    this.getBeGoodList()
    
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