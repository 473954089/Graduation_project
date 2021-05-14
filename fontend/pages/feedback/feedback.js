// var WxEmoji = require('../../utils/WxEmojiView/WxEmojiView.js');
var app = getApp()
var dao = require("../../utils/Dao.js")
var L = require("../../utils/Login.js")
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
var timer
var time
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    tittle: '',
    content: '',
    picList: [],
    formId: '',
    statusBarHeight: app.globalData.statusBarHeight,
    capsule: app.globalData.capsule,
    b_height: 0,
    add_tittle: app.globalData.add_tittle,

    voice_btn: 0,
    voice_src: '',
    picker_list: ["学习生活", "情感分区", "吐槽", "课程相关", "职场问题", "其他"],
    picker_index: app.globalData.picker_index,
    animationData: [],
    into_back: 0,
    voice_time: 0,
    pic_num: 3,


    //转移的匿名组件的样式
    animationData: [],
    bgcolor: '#42C1FE',
    state: 0,
    avatar: wx.getStorageSync('user').avatar
  },

  getState: function () {
    // console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeee")
    var s = this.myswitch.getState()
  },

  navigatBack: function () {


    // var that = this
    // that.setData({
    //   into_back: 1
    // })

    // wx.showModal({
    //   title: '温馨提示',
    //   content: '是否保存当前数据？',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')

    //       app.globalData.save_data = 1
    //       app.globalData.add_tittle = that.data.add_tittle
    //       app.globalData.issue_tittle = that.data.tittle
    //       app.globalData.issue_content = that.data.content
    //       app.globalData.issue_picList = that.data.picList
    //       app.globalData.picker_index = that.data.picker_index
    //       wx.navigateBack({
    //       })

    //     } else if (res.cancel) {
    //       console.log('用户点击取消')

    //       app.globalData.save_data = 0

          wx.navigateBack({
          })
    //     }
    //   }
    // })
  },
  changePicker: function (e) {
    this.setData({
      picker_index: e.detail.value,
    })
  },
  deleteVoice: function () {
    var that = this
    wx.showModal({
      // title: '提示',
      content: '是否删除录音？',
      success(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          that.setData({
            voice_src: ''
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })

  },
  startRecord: function () {
    var that = this
    time = setInterval(function () {
      that.setData({
        voice_time: that.data.voice_time + 1
      })
    }, 1000)
    const options = {
      // duration: 10000,//指定录音的时长，单位 ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      // console.log('recorder start')
    });
    //错误回调
    recorderManager.onError((res) => {
      // console.log(res);
    })


    const animation = wx.createAnimation({
      duration: 1000,

    })

    //连续动画关键步骤
    var next = true;
    timer = setInterval(function () {
      if (next) {
        animation.scale(1.5).opacity(0.6).step()
        next = !next;
      } else {
        animation.scale(1).opacity(1).step()
        next = !next;
      }
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 500)




  },
  stopRecord: function () {

    var that = this

    recorderManager.stop();
    recorderManager.onStop((res) => {


      dao.uploadVoice(res.tempFilePath, function (res) {
        that.setData({
          voice_src: "https://sdwd.xybb.net.cn" + res,
          voice_btn: 0
        })

      })




      // console.log('停止录音', res.tempFilePath)
      clearInterval(timer);
      clearInterval(time);
      // const { tempFilePath } = res   //不懂
    })
  },
  playRecord: function () {


    var that = this
    var tt = that.data.voice_time

    innerAudioContext.autoplay = true
    innerAudioContext.src = that.data.voice_src,
      innerAudioContext.onPlay(() => {
        // console.log('开始播放')
      })
    innerAudioContext.onError((res) => {
      // console.log(res.errMsg)
      // console.log(res.errCode)
    })
    // console.log(innerAudioContext.duration, "mmmmmmmmmmmmmmmmppppppppp333333333")



    var t = setInterval(function () {
      if (that.data.pic_num == 3) {
        that.setData({
          pic_num: 1
        })
      } else {
        that.setData({
          pic_num: that.data.pic_num + 1
        })
      }
      that.setData({
        voice_time: that.data.voice_time - 1
      })
      if (that.data.voice_time == 0) {
        clearInterval(t)
        that.setData({
          voice_time: tt,
          pic_num: 3
        })
      }
    }, 500)



  },



  addVoiceBtn: function () {
    var that = this
    if (that.data.voice_src != '') {
      wx.showModal({
        // title: '提示',
        content: '已经有录音咯~~是否重新录音？',
        success(res) {
          if (res.confirm) {
            // console.log('用户点击确定')
            that.setData({
              voice_btn: !that.data.voice_btn,
              voice_src: "",
              voice_time: 0,
            })
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    } else {
      that.setData({
        voice_btn: !this.data.voice_btn,
      })
    }

  },
  addTittle: function () {
    this.setData({
      add_tittle: !this.data.add_tittle,
    })
  },

  bindfocus: function (e) {
    // console.log(e, "sdfosijdfosijdfoisjd")
    this.setData({
      b_height: e.detail.height
    })

  },

  bindblur: function () {
    this.setData({
      b_height: 0
    })
  },

  clearALL: function () {

    var that = this
    //下面两行没必要的操作注释掉
    // app.globalData.issue_content='',
    // app.globalData.issue_picList='',

    wx.showModal({
      // title: '提示',
      content: '是否清空当前页面所有数据？此操作无法返回',
      success(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          that.setData({
            content: '',
            picList: [],
            tittle: '',
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })

  },

  bindinput: function (e) {
    this.setData({
      tittle: e.detail.value
    })
  },

  bindtextarea: function (e) {

    this.setData({
      content: e.detail.value
    })

  },

  submit: function (e) {
    // console.log(e, "nihaonihaonihaonihaonihaonihao")
    var that = this
    // var contentPic = JSON.stringify(that.data.picList);
    dao.sendSuggestion(e.detail.value.content,app.globalData.user.uuid,function () {
      // wx.showLoading({
      //   title: '发布中。。。',
      // })
      // app.globalData.add_tittle = 0,
      //   app.globalData.issue_content = '',
      //   app.globalData.picker_index = 0,
      //   app.globalData.issue_picList = [],

        that.setData({
          add_tittle: 0,
          content: '',
          // picList: [],
          tittle: ''
        })
      wx.navigateBack({
      })
    })


  },

  submitAll: function () {
    // console.log("9999999999999999999")
    var that = this
    that.finalSubmit()
    // if (that.data.userInfo == "") {
    //   wx.showModal({
    //     title: '提示',
    //     content: '需要登录后才能发布哦~~点击首页右上角头像即可登陆',
    //     success(res) {
    //       if (res.confirm) {
    //         wx.getUserInfo({
    //           success: function (res) {
    //             wx.setStorageSync("userInfo", res.userInfo)
    //             that.setData({
    //               userInfo: res.userInfo
    //             })

    //             that.finalSubmit()
    //             console.log("wwwwwwwwwwww")
    //             dao.sendUserInfo(that.data.userInfo.avatarUrl, that.data.userInfo.nickName)
    //             console.log("wwwwwwwwwwww")



    //           }
    //         })
    //       } else if (res.cancel) {
    //         console.log('用户点击取消')
    //       }
    //     }
    //   })
    // }else{
    //   that.finalSubmit()
    // }

  },

  finalSubmit: function () {
    var that = this
    var contentPic = JSON.stringify(that.data.picList);
    var param = {
      contentTittle: that.data.title,
      contentText: that.data.content,
      picker_index: that.data.picker_index,
      contentPic: contentPic
    }

    dao.submitQuestion(param, function (res) {
      app.globalData.add_tittle = 0,
        app.globalData.issue_content = '',
        app.globalData.picker_index = 0,
        app.globalData.issue_picList = [],

        that.setData({
          add_tittle: 0,
          content: '',
          picList: [],
          tittle: ''
        })
      wx.reLaunch({
        url: '../firstpage/firstpage',
      })

    })

  },
  choosePic: function () {

    var that = this
    var array = that.data.picList
    wx.chooseImage({
      count: 9,
      success: function (res) {
      },
      fail: function (res) { },
      complete: function (res) {
        // console.log(res)
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          dao.uploadPic(res.tempFilePaths[i], function (res) {
            // console.log("res:", res)
            array.push('https://sdwd.xybb.net.cn' + res)
            // array.push('localhost' + res)//本地调试
            that.setData({
              picList: array
            })

          })
        }
      },
    })
  },
  deletePic: function (e) {

    // console.log(e)
    var that = this
    var images = that.data.picList;
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

          picList: images

        });
      }
    })
  },
  previewPic: function (e) {

    var that = this
    var src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: that.data.picList,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {



    if (app.globalData.save_data == 1) {
      this.setData({
        add_tittle: app.globalData.add_tittle,
        tittle: app.globalData.issue_tittle,
        content: app.globalData.issue_content,
        picList: app.globalData.issue_picList,
        picker_index: app.globalData.picker_index,
      })
    }
    this.setData({
      userInfo: app.globalData.user
    })
    if (options.picker_index) {
      this.setData({
        picker_index: options.picker_index - 1
      })
    }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.myswitch = this.selectComponent("#switch");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    // if (this.data.into_back == 0) {
    //   app.globalData.save_data = 1
    // }
    // app.globalData.add_tittle = this.data.add_tittle
    // app.globalData.issue_tittle = this.data.tittle
    // app.globalData.issue_content = this.data.content
    // app.globalData.issue_picList = this.data.picList

    // console.log("-----onunload-----")
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