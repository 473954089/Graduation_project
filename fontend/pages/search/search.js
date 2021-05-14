// 先实现,答辩前再将组件搬移进页面内,进行搜索内容跟搜索历史对比,假如一致,就不执行,假如不一致,添加历史记录
// 添加
var app = getApp()
var dao = require("../../utils/Dao.js")

import { getStorage, setStorage} from '../../utils/util';
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      searchList: getStorage('searchList'),
      tabs: ['院校优先', '专业优先', '更多筛选'],
      hotsSearch: ['转专业与双学位开放申请','五一假期具体安排','学校打印店位置','图书馆开放时间','体育场馆推荐','研究生复试需要注意什么','高考推荐哪个学校'], activeIndex: 0,
      sliderOffset: 0,
      sliderLeft: 0,
      searchIsHidden: false,
      searchAllShow: false,
      inputVal: '',
      neirong:true,
      searchQuestionList : [],
  },
  onLoad: function (options) {
    this.setData({
      'searchList':getStorage('searchList') || []
    })
  },
  bindSearchAllShow: function (e) {
    this.bindSearchAllShow(e,this)
  },
  bindInputSchool: function (e) {
    this.bindInputSchool(e, this)
  },
  bindGoSearch: function (e) {
    this.GoSearch(e, this)
  },
  bindClearSearch: function () {
    wx.showModal({
      title: '是否删除所有历史记录?',
    success (res){
      if (res.confirm) {
        this.updataLog(this,[])
      }}
    })
  },
  // 获取点击元素的值并执行搜索传值
  bindGoSchool(e) {
    let val = e.currentTarget.dataset.item;
    this.goSchool(val,this)
  },
  bindDelLog(e) {
      this.bindDelLog(e, this)
  },
  bindShowLog(e) {
    this.bindShowLog(e, this)
  },
  bindHideLog(e) {
    this.bindHideLog(e, this)
  },
  bindSearchHidden() {
    this.bindSearchHidden(this)
  },




  bindShowLog(e,that) {
    this.showlog(that)
  },
  bindHideLog(e, that) {
    this._setData(that, {
      searchIsHidden: true
    })
  },
  bindInputSchool(e, that) {
    var val = e.detail.value;
    this.matchStroage(that,val)
  },
  bindSearchAllShow(e,that){
    this._setData(that,{
      searchAllShow: true
    })
  },
// 搜索按键不是事件?问题一
sousuo:function(val){
  //  var e=1
  //  this.bindHideLog(e, that)
  var that1 = this 
  dao.searchQuestion(val , function(res){
    console.log(res)
      that1.setData({
        searchQuestionList : res.data
      })
    })
  },
  GoSearch(e,that){
    let searchList_stroage = getStorage('searchList') || [];
    const inputVal = that.data.inputVal;
    if(that.data.inputVal.replace(/\s+/g,'').length==0){
      wx.showToast({
        title:'请输入搜索内容',
        icon:'error',
        duration:700,
      })
      }
    else{
    // this.goSchool(inputVal)
    // 回调函数中的this
    var something=this
    wx.showModal({
      content: `是否搜索${inputVal}?`,
      success(res){
    if(res.confirm){
      if(searchList_stroage.length==0){
        var arr = new Array(1)
        arr[0] = inputVal
        var val=inputVal
        // 重新设置搜索历史
         setStorage('searchList', arr.concat(searchList_stroage))
      }
      else{
      // for (var i = 0, len = searchList_stroage.length; i < len; i++) {
        // 有相同的搜索历史
      if (searchList_stroage.indexOf(inputVal) == -1) {
        var arr = new Array(1)
        arr[0] = inputVal
        var val=inputVal
        // 重新设置搜索历史
         setStorage('searchList', arr.concat(searchList_stroage))
        }
      else{
           var index=searchList_stroage.indexOf(inputVal)
           searchList_stroage.splice(index,1)
           var arr = new Array(1)
           arr[0] = inputVal
           var val=inputVal
        // 重新设置搜索历史
         setStorage('searchList', arr.concat(searchList_stroage))
         }
  
}
      something.setData({
        inputVal: '',
        'searchIsHidden': true,
        neirong:false
      })
    something.sousuo(val)
    }
      else{
        inputVal:inputVal
      }
  }})}},
    // 执行搜索,

// 能顺利执行
  bindDelLog(e, that) {
        let val = e.currentTarget.dataset.item;
        let searchList_stroage = getStorage('searchList') || [];
        let index = searchList_stroage.indexOf(val);
        searchList_stroage.splice(index, 1)
        var what=this;
        wx.showModal({
          title: '是否删除当前历史记录?',
        success (res){
          if (res.confirm) {
            what.updataLog(that,searchList_stroage)
          }}
        })
  },

  bindSearchHidden(that) {
    this.setData({
      searchIsHidden: true
    })
  },
  showlog(that){
    let searchList_stroage = getStorage('searchList') || [];
    let searchList = []
    if (typeof (searchList_stroage) != undefined && searchList_stroage.length > 0) {
      for (var i = 0, len = searchList_stroage.length; i < len; i++) {
          searchList.push(searchList_stroage[i])
      }
    }else {
      searchList = searchList_stroage
    }
    this.setData({
      searchIsHidden: false,
      searchAllShow:false,
      neirong:true,
      searchList
    })
  },
  // 
  matchStroage(that,val) {
    let searchList_stroage = getStorage('searchList') || [];
    let searchList = []
    // 假如类型明确,长度大于0,输入内容及搜索历史的判断
    if (typeof (val) != undefined && val.length > 0 && typeof (searchList_stroage) != undefined && searchList_stroage.length > 0) {
      for (var i = 0, len = searchList_stroage.length; i < len; i++) {
        // 有相同的搜索历史
        if (searchList_stroage[i].indexOf(val) != -1) {
          searchList.push(searchList_stroage[i])
        }
      }
    } else {
      searchList = searchList_stroage
    }
    this.setData( {
      inputVal: val,
      searchList
    })
  },
  // _setData(that, param){
  //   let others = that.data;
  //   for (var key in param){
  //     others[key] = param[key];
  //   }
  //   that.setData({
  //     others
  //   })
  // },
  // _setData1(that, param){
  //   let Data = that.data;
  //   for (var key in param){
  //     Data[key] = param[key];
  //   }
  //   that.setData({
  //     Data
  //   })
  // },
  updataLog(that, list){
    setStorage('searchList', list)
    this.setData({
      searchList: list
    })
  },
  goSchool(val,that) {
    wx.showModal({
      content: `是否搜索${val}?`,
    })
    // this._setData(that,{
    //   searchIsHidden: true
    // })
    this.setData({
      searchIsHidden: true,
      neirong:false,
    })
    // this._setData1(that,{
    //   neirong:true,
    // })
    this.sousuo(val)
  }
})



