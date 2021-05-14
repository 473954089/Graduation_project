var util = require("../../utils/util.js")
var dao = require("../../utils/Dao.js")

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uuid:'',
    answer_id: '',
    answer: '',
    comment: [],
    newComment:'',
    to_nickname:'sdsdsdsds'
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.lin.initValidateForm(this)
    this.setData({
      answer_id: parseInt(options.id),
      uuid:app.globalData.user.uuid
      // url: options.url
    })
    this.getAnswer();
    this.getComment();
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

  },
  // bindinputt:function (e){
  //   this.setData({
  //     newComment:e.detail.value
  //   })
  // },
  giveComment: function () {
    console.log("giveComment")
    console.log(this.data.newComment)
    var that = this
    var answer_id = that.data.answer_id
    dao.giveComment(answer_id, this.data.newComment,this.data.uuid,function (res) {
      that.getAnswer();
      that.getComment();
        wx.showToast({
        title: '评论成功',
        icon: 'success',
        duration: 2000
      })
    })
  },
  pinglunhuifu:function (e){
    console.log(this.data.to_nickname="@"+e.currentTarget.dataset.nickname+":");
    // this.data.newComment="@"+e.currentTarget.dataset.nickname+":";

  },
  submit(e){
    // console.log(e);
    const {detail} =e;
    this.data.newComment=detail.values.comment;
    // console.log(this.data.newComment)
    this.giveComment();
    wx.lin.resetForm('newComment')

    /*
      detail 返回三个参数
      1、values: 各表单项的value值
      2、errors: 各表单项验证后的返回的错误信息数组
      3、isValidate: 表单是否验证通过的boolean值
      具体格式示例：
      detail = {
         values: {
             studentName: "",
             studentAge: "",
             studentAddress: ""
         },
         errors: {
             studentName: [],
             studentAge: [],
             studentAddress: []
         },
         isValidate: true
      }
    */
  },

  giveLike: function () {
    var that = this
    var answer_id = that.data.answer_id
    dao.giveLike(answer_id, function (res) {
      that.getAnswer();
      that.getComment();
    })
  },

  getAnswer: function () {
    var that = this
    var answer_id = that.data.answer_id
    dao.getAnswerById(answer_id, function (res) {
      that.setData({
        answer: res.data
      })
    })
  },

  getComment: function () {
    var that = this
    var answer_id = that.data.answer_id
    dao.getComment(answer_id, function (res) {
      console.log(res)
      that.setData({
        comment: res.data
      })
    })
  }

})
