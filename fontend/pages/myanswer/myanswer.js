var dao = require("../../utils/Dao.js")
var app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: app.globalData.statusBarHeight,
        capsule: app.globalData.capsule,
        userInfo:[],
        answerList:[],
    },


    navigateBack: function () {
        wx.navigateBack({
        })
    },
    deleteAnswer:function(e){
        console.log(e)
        var that = this
        var answer_id = e.currentTarget.dataset.answerId

        dao.deleteAnswer(answer_id,function(res){
            dao.getMyAnswerList(that.data.userInfo.uuid,function(res){
                console.log(res.data)
                that.setData({
                    answerList : res.data,
                })
            })

        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        var that = this
        that.setData({
            userInfo: app.globalData.user
        })
        dao.getMyAnswerList(that.data.userInfo.uuid,function(res){
            // for (let i = 0; i < res.list.length; i++) {
            //   res.list[i].contentPic = JSON.parse(res.list[i].contentPic)
            // }
            console.log(res.data)
            that.setData({
                answerList : res.data,
            })

        })


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

    }
})