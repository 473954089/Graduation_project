// pages/detail/detail.js

// var comment
var app = getApp();
var util = require("../../utils/util.js")
var dao = require("../../utils/Dao.js")
var L = require("../../utils/Login.js")

Page({

  /**
   * Page initial data
   */
  data: {
    user:[],
    question:'',
    answerList:[],
    questionId : 0,
    question_title :"",
    question_content:"",
    focus : false,
    comList : [],
    comList2 : [],
    btn_picList : [],
    newAnswer : '',
    statusBarHeight: app.globalData.statusBarHeight,
    capsule: app.globalData.capsule,
    b_height : 0,
    h_height : 100,
    placeholder : "请写下你的回答",
    good_Num : 0,
    isGoodList : [],
    time : "" ,
    toUserId : 0,
    commentType : 1,
    toAvatar: null,
    toName: null,
    fatherCommentId: null,
    concern:'关注问题',
    nickname:'',


    //转移的匿名组件的样式
    animationData: [],
    bgcolor: '#42C1FE',
    state: 0,
    avatar: wx.getStorageSync('user').avatar,



    // 添加的回答页面显示参数
    isUp: 0,
    windowHeight: 0,
    statusBarHeight: 0,
    navHeight: 0,
    hei: 0,
  },


  // 初始计算页面显示
    // 通过获取系统信息计算导航栏高度        
    setNavSize: function () {
      var that = this
        , sysinfo = wx.getSystemInfoSync()
        , statusHeight = sysinfo.statusBarHeight
        , isiOS = sysinfo.system.indexOf('iOS') > -1
        , navHeight;
      if (!isiOS) {
        navHeight = 48;
      } else {
        navHeight = 40;
      }
      var hei = sysinfo.windowHeight - statusHeight - navHeight
      that.setData({
        windowHeight: sysinfo.windowHeight,
        statusBarHeight: statusHeight,
        navHeight: navHeight,
        hei: hei,
  
      })
    },
    // 一键清除功能
    clean:function(){
      var that=this
      var something=this.data.comment
      wx.showModal({
        content:'是否删除草稿?',
      success(res){
        if(res.confirm){
          that.setData({
            newAnswer:''
          })
        }
        else{
          that.setData({
            newAnswer:something
          })
        }
      }})
    },
  // 动画效果
    //评论区动画效果
    ppp_animation: function () {
      // console.log("hahahahaha")
      var that = this
      var hei = that.data.hei
      var animation = wx.createAnimation({
        timingFunction: 'ease',
        duration: 800
      })
  
      if (that.data.isUp == 0) {
        animation.translate(0, -hei).step()
        that.setData({
          isUp: 1
        })
      } else {
        animation.translate(0, hei).step()
        that.setData({
          isUp: 0
        })
      }
  
      that.setData({
        ppp: animation.export()
      })
    },
//点击回答的函数
  //评论题主
  huida : function(){
    this.ppp_animation()
    // this.setData({
    //   // focus : true,
    //   // 应该就是直接回答,但或许可以通过回答列表参数获取这是第几个回答
    //   placeholder: "评论 --" +this.data.question.nickname + "(题主)",
    //   commentType: 1,
  
    //   fatherCommentId: null,

    //   toUserId: this.data.question.userId,
    //   toAvatar: this.data.question.avator[0],
    //   toName: this.data.question.nickname,
    // })
  },

  //点击分类按钮
  gotofenlei : function(e){
    var questionType = e.currentTarget.dataset.questionType
    wx.navigateTo({
      url: '../sort/board/board?id='+questionType,
    })
  },

  //点击右上角的题主头像
  touchAvatar : function (){
    var that = this
    wx.showActionSheet({
      itemList: ["回复题主 " + this.data.question.nickname, "私聊题主 " + this.data.question.nickname],
      success(res) {
        if (res.tapIndex == 0) {
          that.pinglun();

        } else if (res.tapIndex == 1) {

          if (that.data.question.userId == wx.getStorageSync('user').userId) {
            wx.showToast({
              title: '不能私聊自己哦~',
            })
          } else {
            //获取房间后再这个方法里面有一个页面跳转方法，防止异步问题
            that.getRoomId(that.data.question.avator[0], that.data.question.userId, that.data.question.nickname)
          }

        }
      },
    })
  },
  //评论题主
  // pinglun : function(){
  //   this.setData({
  //     focus : true,
  //     // placeholder: "回复 " + this.data.question.nickname + "(题主)",
  //     // commentType: 1,
  
  //     // fatherCommentId: null,

  //     // toUserId: this.data.question.userId,
  //     // toAvatar: this.data.question.avator[0],
  //     // toName: this.data.question.nickname,
  //   })
  // },

  navigateBack: function () {
    wx.navigateBack({
    })
  },

  longPress:function(e){
    var that = this
    // console.log(e,"eeeeee")
    var comType = e.currentTarget.dataset.comType
    var userId = that.data.user.userId
    var comId = e.currentTarget.dataset.commentId
    var comListIndex = e.currentTarget.dataset.comListIndex
    if (comType==1){
      if (userId == that.data.comList[comListIndex].userId || userId == 153 || userId == 154 || userId == 155 || userId == 149 || userId == 159){
        wx.showActionSheet({
          itemList: ['删除评论'],//去掉过回复
          success(res){
            // if (res.tapIndex == 0){
            //   that.re_comment(comListIndex)
            // }else 
            // if(res.tapIndex == 0){
              dao.deleteComment(comId , function(res){

              
                  that.data.comList.splice(comListIndex,1)
                  that.setData({
                    comList : that.data.comList
                  })
                


              })
            // }
          },

        })
      }
    }else{
      if (userId == that.data.comList2[comListIndex].userId || userId == 153 || userId == 154 || userId == 155 || userId == 149 || userId == 159) {
        wx.showActionSheet({
          itemList: ['删除评论'],//去掉过回复
          success(res) {
            // if (res.tapIndex == 0){
            //   that.re_comment(comListIndex)
            // }else 
            // if(res.tapIndex == 0){
            dao.deleteComment(comId, function (res) {

                that.data.comList2.splice(comListIndex, 1)
                that.setData({
                  comList2: that.data.comList
                })
              
            })
            // }
          },

        })
      }
    }

  },


  good:function(e){

    var isGoodIndex = e.currentTarget.dataset.indexId
    // console.log(isGoodIndex,"ggggggggggggggggg",e)
    var that = this 

    if (that.data.isGoodList[isGoodIndex]==false){
      that.data.isGoodList[isGoodIndex]=true
      that.data.comList[isGoodIndex].likeNum = that.data.comList[isGoodIndex].likeNum+1
    
      that.setData({
        isGoodList: that.data.isGoodList,
        comList:that.data.comList
      })

      dao.clickGood(e.currentTarget.dataset.commentId , that.data.questionId , e.currentTarget.dataset.toUserId)
   
    }else{
    
      that.data.isGoodList[isGoodIndex] = false
      that.data.comList[isGoodIndex].likeNum = that.data.comList[isGoodIndex].likeNum-1
      that.setData({
        isGoodList: that.data.isGoodList,
        comList: that.data.comList
      })

      dao.clickGood(e.currentTarget.dataset.commentId, that.data.questionId)

    }
  },

  choosePic: function () {

    var that = this
    var array = that.data.btn_picList
    wx.chooseImage({
      count: 9,
      success: function (res) {
        //大佬上传图片的方法
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          dao.uploadPic(res.tempFilePaths[i], function (res) {

            // array.push('http://localhost' + res)
            array.push('https://sdwd.xybb.net.cn' + res)
            that.setData({
              btn_picList: array,
              h_height: 260
            })

          })
        }
      },
      fail: function (res) {},
      complete: function (res) {

      },
    })
  },
  questionPreviewPic:function(e){
    // console.log(e)
    var that = this
    var src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: that.data.question.contentPic,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //预览一级评论区的图片
  previewPic: function (e) {
    // console.log(e)
    var that = this
    var src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: that.data.comList[e.currentTarget.dataset.id].contentPic,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  //预览二级评论区的图片
  previewPic2: function (e) {
    // console.log(e)
    var that = this
    var src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: that.data.comList2[e.currentTarget.dataset.id].contentPic,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  previewBtnPic : function(e){
   
      // console.log(e)
      var that = this
      var src = e.currentTarget.dataset.src
      wx.previewImage({
        current: src,
        urls: that.data.btn_picList,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    
  },

  deletePic: function (e) {

  
    var that = this
    var images = that.data.btn_picList;
    var index = e.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          // console.log('点击确定了');
          images.splice(index, 1);
        } else if (res.cancel) {
          // console.log('点击取消了');
          return false;
        }
        that.setData({
          // question:[{
          btn_picList: images
          // }]

        });
      }
    })
  },


  input:function(e){
    this.setData({
      newAnswer: e.detail.value
    })
    
  },
 
  confirm:function(e){
    this.data.comList.unshift(e.detail.value)
    this.setData({
      comList:this.data.comList
    })
  
    this.setData({
      comment : '',
      btn_picList:[]
    })
  },

  bindfocus:function(e){
  
    this.setData({
      focus : true,
      b_height:e.detail.height
    })
 
  },

  bindblur:function(){
    this.setData({
      focus : false,
      b_height:0
    })
  },

  send:function(){
    var that = this
    dao.sendNewAnswer(that.data.newAnswer,app.globalData.user.uuid,that.data.question.question_id,function (res){
      that.getQuestion()
      that.getAnswer()
      wx.showToast({
        title: '回答成功',
        icon: 'success',
        duration: 1800,
        mask: false,
      })
    })
    this.setData({
      newAnswer:''
    })
    that.ppp_animation()
    // if (that.data.userInfo==""){
    //   wx.showModal({
    //     title: '提示',
    //     content: '需要登录后才能评论哦~~点击首页右上角头像即可登陆',
    //     success(res) {
    //       if (res.confirm) {
    //         wx.getUserInfo({
    //           success : function(res){
    //             wx.setStorageSync("userInfo", res.userInfo)
    //             that.setData({
    //               userInfo: res.userInfo
    //             })

    //             dao.sendUserInfo(res.userInfo.avatarUrl,                                 res.userInfo.nickName)

                // that.refreshComment()
    //           }
    //         })
    //       } else if (res.cancel) {
    //         console.log('用户点击取消')
    //       }
    //     }
    //   })
    // } else{
    //   that.refreshComment()
    // }

  },
  refreshComment:function(e){
    var that = this
    var contentPic = JSON.stringify(this.data.btn_picList)
    var param = {
      contentText: this.data.comment,
      contentPic: contentPic,
      avatar: this.data.user.avatar,
      name: this.data.user.nickname,
      questionId: this.data.questionId,
      toUserId: this.data.toUserId,
      isAnonymous : this.data.state,
      commentType : this.data.commentType,

      toAvatar: this.data.toAvatar,
      toName: this.data.toName,
      fatherCommentId: this.data.fatherCommentId,
    }
    dao.sendComment(param, function (res) {
      that.setData({
        comment: '',
        btn_picList: [],
      })

      that.getComList()
    })
  },
  re_comment:function(e){
    var that = this

    wx.showActionSheet({
      itemList: ["回复 " + e.currentTarget.dataset.comName, "私聊 " + e.currentTarget.dataset.comName],
      success(res) {
        if (res.tapIndex == 0){
          that.setData({
            focus : true,

            placeholder : "回复 "+e.currentTarget.dataset.comName,
            commentType : 2,
            toUserId : e.currentTarget.dataset.comUserId,
            toAvatar: e.currentTarget.dataset.comAvatar,
            toName: e.currentTarget.dataset.comName,
            fatherCommentId: e.currentTarget.dataset.fatherCommentId,
          })
          // console.log(e.currentTarget.dataset.fatherCommentId,"ffff")
        }else if (res.tapIndex == 1) {

          if (e.currentTarget.dataset.comUserId==wx.getStorageSync('user').userId){
            wx.showToast({
              title: '不能私聊自己哦~',
            })
          }else{
            //获取房间后再这个方法里面有一个页面跳转方法，防止异步问题
            that.getRoomId(e.currentTarget.dataset.comAvatar, e.currentTarget.dataset.comUserId, e.currentTarget.dataset.comName)
          }
      
        }
      },
    })
    // this.setData({
    //   focus : true,
    //   comment:"@ "+this.data.comList[index].name,
    //   toUserId : this.data.comList[index].userId
    // })
   
  },


  //获取即将进入的room的roomId
  getRoomId: function (avatar,userId,userName) {
    var that = this
    var param = {
      guestAvatar: avatar,
      guestId: userId,
      guestName: userName,
      hostName: wx.getStorageSync('user').nickname,
      hostAvatar: wx.getStorageSync('user').avatar,
      questionId : that.data.questionId,
    }
    dao.getRoomId(param, function (res) {
      that.setData({
        roomId: res.room.roomId
      })

      //防止异步问题
      wx.navigateTo({
        url: '../chat/chat?roomId=' + that.data.roomId + "&toUserId=" + userId,
      })
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // 添加,计算系统页面显示
    this.setNavSize()

    this.setData({
      questionId: parseInt(options.id),
      user : wx.getStorageSync("user")      
    })

    //获取问题
    this.getQuestion()
    //获取回答
    this.getAnswer()
    //获知用户是否关注该问题
    // this.checkConcern()

    // 获取评论列表,里面含有点赞列表，这样做是为了防止请求数据时的异步错误
    // this.getComList()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
  

   

  },

  //点击关注问题
  clickConcern:function(){
    dao.clickConcern(this.data.questionId ,this.data.user.userId, function(res){
      // console.log(res,"rrrrrrrrrrrrr")
    })
    if(this.data.concern=='关注问题'){
      this.setData({
        concern:'已关注'
      })
    }else{
      this.setData({
        concern:'关注问题'
      })
      wx.showToast({
        title: '取关成功~',
      })
    }
  },

  //判断用户是否关注该问题
  checkConcern:function(){
    var that = this 
    dao.checkConcern(that.data.questionId , function(res){
      if(res.isConcern){
        that.setData({
          concern : "已关注"
        })
      }else{
        that.setData({
          concern: "关注问题"
        })
      }
     
    })
  },

  //获取问题
  getQuestion:function(){
    var that = this
    var questionId = that.data.questionId
    dao.getQuestion(questionId, function (res) {
      // if (res.question.contentPic!=""){
      //   res.question.contentPic = JSON.parse(res.question.contentPic)
      // }
      // res.question.avator = JSON.parse(res.question.avator)
      that.setData({
        question_content: res.data.question_content,
        question_title:res.data.question_title,
        toUserId : res.data.question_author,
        toAvatar : res.data.avatar,
        toName : res.data.nickname,
        time:res.data.question_time,
        nickname:res.data.nickname,
        question:res.data
      })

     
    })
  },

 //获取该问题下的回答
 getAnswer:function(){
  var that = this
  var questionId = that.data.questionId
  dao.getAnswer(questionId, function (res) {
    that.setData({
      answerList:res.data
    })

   
  })

},


//获取点赞列表
  getGoodList : function(){
    var that = this
 
    dao.getGoodList(that.data.questionId, function (res) {
  
      var goodList = []
      for (let i = 0; i < that.data.comList.length; i++) {
        goodList[i] = false
        for (let j = 0; j < res.list.length; j++) {
          if (res.list[j].commentId == that.data.comList[i].commentId) {
            goodList[i] = true
            continue;
          }
        }
      }
   
      that.setData({
        isGoodList: goodList
      })
     
    })

  },

//获取评论列表1,2
  getComList : function(){
    var that = this
    //获取评论列表1
    dao.getCommentList(100, 0, that.data.questionId, 1,function (res) {
    
      // console.log(res.list.length,"==============")
      for (let i = 0; i < res.list.length; i++) {
        res.list[i].contentPic = JSON.parse(res.list[i].contentPic)
        res.list[i].avatar = JSON.parse(res.list[i].avatar)
      }
      // console.log(res,"++++++++++++++++++++")
      that.setData({
        comList: res.list
      })

      //先获取评论列表，再获取点赞列表，以防异步问题
  
      that.getGoodList()
 
    
    })

    //获取评论列表2
    dao.getCommentList(100, 0, that.data.questionId, 2, function (res) {

      // console.log(res.list.length,"==============")
      for (let i = 0; i < res.list.length; i++) {
        res.list[i].contentPic = JSON.parse(res.list[i].contentPic)
        res.list[i].avatar = JSON.parse(res.list[i].avatar)
      }
      // console.log(res,"++++++++++++++++++++")
      that.setData({
        comList2: res.list
      })

    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },


  //转移的匿名组件的方法
  change: function () {

    if (this.data.state == 0) {
      // console.log("eeeeeee")
      const animation = wx.createAnimation({
        duration: 200,
      })
      animation.translateX(32).step()
      this.setData({
        animationData: animation.export(),
        bgcolor: '#01ad01',
        state: 1
      })

    } else {
      // console.log("5555555")
      const animation = wx.createAnimation({
        duration: 200,
      })
      animation.translateX(0).step()
      this.setData({
        animationData: animation.export(),
        bgcolor: '#42C1FE',
        state: 0
      })

    }
  },
})