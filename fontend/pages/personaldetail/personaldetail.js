var dao = require("../../utils/Dao.js")
var util = require("../../utils/util.js")
var app = getApp()


Page({

    /**
     * 页面的初始数据
     */
    data: {
        uuid:'',
        user:'',
        avatar:'',
        gender:"",
        user_create_time:''
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            uuid:app.globalData.user.uuid
        })
        // console.log(this.data.user.uuid)
        // user = L.getUser();
        //调用 wx.lin.initValidateForm(this)进行表单初始化
        wx.lin.initValidateForm(this)
        this.getUserInfo();
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
        this.setData({
            redNum:0
        })
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

    getUserInfo:function (){
        var that = this
        dao.getUser(this.data.uuid,function (res){
            console.log(res.data);
            that.setData({
                user:res.data,
                avatar:res.data.avatar,
                gender:res.data.gender,
                user_create_time:res.data.user_create_time
            })
        })
    },


    submit(event){
        const {detail} = event;
        this.data.user=detail.values;
        dao.uploadUserInfo(this.data.uuid, this.data.user,this.data.avatar)
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




})