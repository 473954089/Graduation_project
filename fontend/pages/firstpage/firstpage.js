// 未改，获取屏幕高度计算图标初始位置
// data: {
//   x: 0,
//   y: 0
// },
// moveEnd (e) {
// //	想让他定位到，距离左侧20px(750的图片)，通过计算，来适应不同的手机屏幕
//   var xNumLeft = 20 / 750 * wx.getSystemInfoSync().windowWidth;
// //	想让他定位到，距离右侧20px(750的图片)，自身宽度为50在加上20，计算出x为680
//   var xNumRight = 680 / 750 * wx.getSystemInfoSync().windowWidth;
//   var x = e.changedTouches[0].pageX;
//   var average = 375 / 750 * wx.getSystemInfoSync().windowWidth;
// //	获取移动到的y轴，手指松开后，直接上图标定位到当前y轴
//   var yNum = e.changedTouches[0].pageY;
//   console.log(yNum)
//   if (x < average) {
//     this.setData({
//       x: xNumLeft,
//     y: yNum
//     })
//   } else {
//     this.setData({
//       x: xNumRight,
//     y: yNum
//     })
//   }
// }

var app = getApp();
var dao = require("../../utils/Dao.js")
var util = require("../../utils/util.js")
var L = require("../../utils/Login.js")
// const innerAudioContext = wx.createInnerAudioContext()
var questionOffset = 0
var hotOffset = 0



// 动画
var animation = wx.createAnimation({
  timingFunction: 'ease',
  duration: 400
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:[],
    questionList:[],
    hotList:[],
    isred : false,
    statusBarHeight: app.globalData.statusBarHeight,
    capsule:app.globalData.capsule,
    swiper_height: app.globalData.windowHeight,
    pixelRatio: app.globalData.pixelRatio,//获取屏幕像素比
    screenWidth: app.globalData.screenWidth,//获取屏幕宽度
    bei: 750 / app.globalData.screenWidth,
    currentTab:0,

    haveNews : 0,
// 添加
    isLeft : 1,//
   
// 提问按键初始位置，最好设置函数计算自适应
    x:260,
    y:380
  },

  goToNews : function(){
    wx.navigateTo({
      url: '../historynews/historynews',
    })
  },

  playVoice:function(e){
    // console.log(e.currentTarget.id)
    var that = this
   

    innerAudioContext.autoplay = true
    innerAudioContext.src = that.data.questionList[e.currentTarget.id].contentVoice,
      innerAudioContext.onPlay(() => {
        // console.log('开始播放')
      })
    innerAudioContext.onError((res) => {
      // console.log(res.errMsg)
      // console.log(res.errCode)
    })

  },


//  tab下滑线的动画效果,添加
 hhh_animation: function () {
  console.log("hahahahaha")
  var that = this
  // var hei = that.data.hei
  var ju = 47.5+180/that.data.bei
  if (this.data.isLeft == 1) {
    animation.translate(ju, 0).step()
    that.setData({
      isLeft: 0
    })
  } else {
    animation.translate(0, 0).step()
    that.setData({
      isLeft: 1
    })
  }

  this.setData({
    hhh: animation.export()
  })


},


  // swichNav:function(e){
  //   var that = this;
  //   if (that.data.currentTab == e.target.dataset.current) {
  //     return false;
  //   } else {
  //     that.setData({
  //       currentTab: e.target.dataset.current,
  //     })
  //   }
  // },
  // swiperChange: function (e) {
  //   this.setData({
  //     currentTab: e.detail.current,
  //   })
  // },
// 添加动画
swichNav:function(e){
  var that = this;
  if (that.data.currentTab == e.target.dataset.current) {
    return false;
  } else {
    that.setData({
      currentTab: e.target.dataset.current,
      
    })
  }
},
swiperChange: function (e) {
  
  this.setData({
    currentTab: e.detail.current,
  })

  this.hhh_animation()
},
  deleteQuestion:function(e){
    var that = this 
    var questionId = e.currentTarget.dataset.questionId
    var questionListId = e.currentTarget.dataset.questionListId
    var question = that.data.questionList[questionListId]
    // console.log(question,questionId)
    //判断要删除的问题是否为该用户发布的，是的话才执行
    if (question.userId == that.data.user.userId || that.data.user.userId == 153 || that.data.user.userId == 149 || that.data.user.userId == 154 || that.data.user.userId == 155 || that.data.user.userId == 159){

      wx.showActionSheet({
        itemList: ['删除'],
        success(res) {
          if(res.tapIndex==0 ){
            // 删除问题
            dao.deleteQuestion(questionId,function(res){

              //后台删除完毕后前端渲染，为了程序的更快执行，这里省略了判断code的状态
              if (that.data.currentTab==0){
                that.data.questionList.splice(questionListId, 1)
                that.setData({
                  questionList: that.data.questionList
                })
              }else{
                that.data.hotList.splice(questionListId, 1)
                that.setData({
                  hotList: that.data.hotList
                })
              }
              
            })
          }
        },
        fail(res) {
          // console.log(res.errMsg)
        }
      })

    }
  },


  previewPic:function(e){
    // console.log(e,"3333333333333")
    
    var that = this
    var picId = e.currentTarget.dataset.picId
    var questionId = e.currentTarget.dataset.questionId
    if (that.data.currentTab==0){
      wx.previewImage({
        current: that.data.questionList[questionId].contentPic[picId],
        urls: that.data.questionList[questionId].contentPic,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{
      wx.previewImage({
        current: that.data.hotList[questionId].contentPic[picId],
        urls: that.data.hotList[questionId].contentPic,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
// 去掉
  // issue:function(){
  //   wx.navigateTo({
  //     url: '../issue/issue',
  //   })
  // },
  
  search:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },

  refreshQuestionList:function(){
    var that = this
    dao.getQuestionList(0, 10 , function (data) {
      console.log(data)
      if(data.statusCode==200){
        //把图片转化为可显示的格式
        // for (let i = 0; i < data.data.length; i++) {
          // data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
          // data.data[i].avatar = JSON.parse(data.data[i].avatar)
        //   data.data[i].question_time = util.getDateDiff(new Date(data.data[i].question_time + "").getTime())
        // }
        // *************
        that.setData({
          questionList: data.data,
        })
        questionOffset = questionOffset + data.data.length
      }
    
    })
    // console.log("-------成功获取问题列表")
  },

  refreshHotList: function () {
    var that = this
    dao.getHotQuestionList(0, 10, function (data) {
      if (data.statusCode == 200) {
        //把图片转化为可显示的格式
        // for (let i = 0; i < data.list.length; i++) {
        //   data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
        //   data.list[i].avator = JSON.parse(data.list[i].avator)
        //   data.list[i].createdTime = util.getDateDiff(new Date(data.list[i].createdTime + "").getTime())


        // }
        // *************
		console.log(data.data)
        that.setData({
          hotList: data.data,
        })
        hotOffset = hotOffset + data.data.length
      }

    })
    // console.log("-------成功获取问题列表")
  },

  

  // getNewsList: function () {
  //   // console.log("getNewsList----------")
  //   var that = this
  //   dao.getNewsList(1,function (res) {
  //     //这里要判断调用是否成功，成功才能有list，否则会报错
  //     if(res.code==0){
  //       for (let i = 0; i < res.list.length; i++) {
  //         res.list[i].contentPic = JSON.parse(res.list[i].contentPic)
  //         res.list[i].avatar = JSON.parse(res.list[i].avatar)
  //         res.list[i].createdTime = util.getDateDiff(new Date(res.list[i].createdTime + "").getTime())
  //       }
        

  //       app.globalData.newsList = res.list
  //     }else if(res.code==1){
  //       // console.log("wofakwofakwofakwofakwofakowofak")
  //       app.globalData.newsList = []
  //     }

  //       //用户头像右上角红点的判断，写在这里是为了防止异步问题
  //       //访问成功与否，最后都要判断是否加红点
  //       var p = app.globalData.newsList.length
  //       if (p != 0) {
  //         that.setData({
  //           isred: true
  //         })
  //       } else {
  //         that.setData({
  //           isred: false
  //         })
  //       }
  //        //************** */
  //   })


  // },

// 添加
bindtapwenti:function(){
  //这里是浮动按钮之后将要执行的操作
 //  wx.showToast({
 //   title: '前往发布问题',
 //   icon:'success',
 //   duration:1000,
 //  })
  wx.navigateTo({
   url: '../issue/issue',
 })
  },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  onLoad: function (options) {
    //判断是否是新用户的重要标志，如果是老用户，则是1，不用进入登陆页面，如果是新用户，判断为2，或者删除过小程序的也被判断为新用户，因为删除过小程序的用户的内存里由于程序读取速度的原因，标志位被设为0，也即‘非’，所以不是1，也即被判断为不是老用户，所以需要进入授权页面

   

    if (wx.getStorageSync('newUser') != 1) {
      wx.reLaunch({
        url: '../login/login',
      })
    } 

    // console.log("-----firstpage onload------")
    // this.getsystemInfo()
    // this.getNewsList()

    // dao.checkAnonymous(function(data){
    //     console.log(data.anonymousFlag,"------")
    // })

    this.refreshQuestionList()
    this.refreshHotList()
   
    this.setData({
      user: wx.getStorageSync("user")
    })

    questionOffset = 0
    hotOffset = 0

    console.log(app.globalData.pixelRatio,"wwwwwwwwwwwwwww")
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
    this.refreshQuestionList()
    this.refreshHotList()
    wx.hideLoading()
    // this.judgeNewMessage()
    // console.log("------onshow firstpage")    
    // this.getNewsList()
    // if (app.globalData.newsList.length != 0) {
    //   this.setData({
    //     isred: true
    //   })
    // } else {
    //   this.setData({
    //     isred: false
    //   })
    // }

  },

  //判断是否有新消息
  // judgeNewMessage : function(){
  //   var that = this 
  //   dao.judgeNewMessage(function(res){
  //     that.setData({
  //       haveNews : res.newMessageFlag
  //     })
  //   })
  // },

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
    this.refreshQuestionList()
    this.refreshHotList()
    // this.getNewsList()
    wx.stopPullDownRefresh()
    questionOffset = 0
    hotOffset = 0
  },

  /**
   * 页面上拉触底事件的处理函数
   */


  scrollToLower:function(){

    var that = this
    if (that.data.currentTab == 0) {
      dao.getNextQuestionList(questionOffset, function (data) {
        // for (let i = 0; i < data.list.length; i++) {
        //   data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
        //   data.list[i].avator = JSON.parse(data.list[i].avator)
        //   data.list[i].createdTime = util.getDateDiff(new Date(data.list[i].createdTime + "").getTime())
        // }
        if(data.data.length!=0) {
          that.setData({
            questionList: that.data.questionList.concat(data.data),
          })
          questionOffset = questionOffset + data.data.length
        } else{
          return
        }
       
        
      })
    } else {
      dao.getNextQuestionList(hotOffset, function (data) {
        // for (let i = 0; i < data.list.length; i++) {
        //   data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
        //   data.list[i].avator = JSON.parse(data.list[i].avator)
        //   data.list[i].createdTime = util.getDateDiff(new Date(data.list[i].createdTime + "").getTime())
        // }

        that.setData({
          hotList: that.data.hotList.concat(data.data),
        })
        hotOffset = hotOffset + data.data.length
      })
    }
    // that.getNewsList()
    // that.judgeNewMessage()
  },
  onReachBottom: function () {
    // console.log("oooooonnnnnnnnnoooopppppppppp")
    // var that = this
    // if(that.data.currentTab==1){
    //   dao.getNextQuestionList(questionOffset ,0, function(data){
    //     for (let i = 0; i < data.list.length; i++) {
    //       data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
    //       data.list[i].avator = JSON.parse(data.list[i].avator)
    //       data.list[i].createdTime = util.getDateDiff(new Date(data.list[i].createdTime + "").getTime())
    //     }

    //     that.setData({
    //       questionList: that.data.questionList.concat(data.list),
    //     })
    //     questionOffset = questionOffset + data.list.length
    //   })
    // }else{
    //   dao.getNextQuestionList(hotOffset, 1, function (data) {
    //     for (let i = 0; i < data.list.length; i++) {
    //       data.list[i].contentPic = JSON.parse(data.list[i].contentPic)
    //       data.list[i].avator = JSON.parse(data.list[i].avator)
    //       data.list[i].createdTime = util.getDateDiff(new Date(data.list[i].createdTime + "").getTime())
    //     }

    //     that.setData({
    //       hotList: that.data.hotList.concat(data.list),
    //     })
    //     hotOffset = hotOffset + data.list.length
    //   })
    // }
    // that.getNewsList()
   

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  onPageScroll:function(Object){
    
  }
})