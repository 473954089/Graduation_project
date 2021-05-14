// var WxEmoji = require('../utils/WxEmojiView/WxEmojiView.js');
//用于Debug监控
var fundebug = require("./utils/fundebug.js");

fundebug.init({
  apikey: "ee2e20264892ff23e449e6ef24c6261aca89b2be6af8633cfa56d2072f4898e2",
  monitorHttpData: true
});
// fundebug.notify("Test", "Hello, Fundebug!")
import wxValidate from './utils/wxValidate.js'
var L = require("./utils/Login.js")
App({
  onLaunch: function () {
    // L.setLoginURL("https://sdwd.xybb.net.cn/wx/user/login")
    L.setLoginURL("http://localhost:8888/user/login")
    // L.setLoginURL("http://192.168.31.229:8090/user/login")
    // L.setLoginURL("http://192.168.137.124:8888/user/login")
    L.getUser()
    // throw new Error("test")
    // console.log("-----app onlaunch----")
    // WxEmoji.init(":_/", {
    //   "00": "0.png",
    //   "01": "1.png",
    //   "02": "2.png",
    //   "03": "3.png",
    //   "04": "4.png",
    //   "05": "5.png",
    //   "06": "6.png",
    //   "07": "7.png",
    //   "08": "8.png",
    //   "09": "9.png",
    //   "10": "10.png",
    //   "11": "11.png",
    //   "12": "12.png",
    //   "13": "13.png",
    //   "14": "14.png",
    //   "15": "15.png",
    //   "16": "16.png",
    //   "17": "17.png",
    //   "18": "18.gif",
    //   "19": "19.png",
    //   "20": "20.png",
    //   "21": "21.png",
    //   "22": "22.png",
    //   "23": "23.png",
    // });
  },
  onShow : function (){
    // console.log('App onShow');  
   
  },
  onHide : function(){
    // console.log("hideeeeeeeeeeeeeeehide")
  },

  globalData: {
    newsList : [],
    //全新用户第一次登陆的时候user是为空的，得第二次使用小程序时user才有数据，此bug未解决
    //userInfo要等到用户点击头像后再次使用小程序才有数据，这并非bug
    //userInfo:wx.getStorageSync("userInfo"),//把用户信息从缓存中读取出来
    user: wx.getStorageSync("user"),       //把用户从缓存中读取出来
    issue_content:'',
    issue_picList:[],
    issue_tittle:'',
    add_tittle:0,
    save_data:1,
    picker_index:0,

      // baseURL:"http://192.168.137.124:8888",//用于本地调试
     baseURL:"http://localhost:8888",//用于本地调试
    //  baseURL:"http://192.168.31.229:8090",//用于本地调试
    // baseURL: "https://sdwd.xybb.net.cn",
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],//获取系统屏幕状态栏高度
    capsule: wx.getMenuButtonBoundingClientRect(),//获取小程序右上角胶囊的系统信息

    windowHeight: wx.getSystemInfoSync()['windowHeight'],//获取系统屏幕高度
    pixelRatio: wx.getSystemInfoSync()['pixelRatio'],//获取屏幕像素比
    screenWidth: wx.getSystemInfoSync()['screenWidth'],//获取屏幕宽度
  },
  WxValidate: (rules, messages) => new wxValidate(rules, messages),

})