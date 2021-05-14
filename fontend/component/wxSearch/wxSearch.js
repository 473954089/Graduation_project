
var app = getApp()
var dao = require("../../utils/Dao.js")
import { getStorage, setStorage,setData } from '../../utils/util';
// component/wxSearch.js
module.exports={
  init(that) {
    this._setData(that,{
      'searchList':getStorage('searchList') || []
    })
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
      that1._setData(that,{
        searchQuestionList : res.data
      })
    })
  },
  bindGoSearch(e,that){
    let searchList_stroage = getStorage('searchList') || [];
    const inputVal = that.data.tabData.inputVal;
    if(that.data.tabData.inputVal.replace(/\s+/g,'').length==0){
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
      something._setData(that, {
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
    this._setData(that,{
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
    this._setData(that, {
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
    this._setData(that, {
      inputVal: val,
      searchList
    })
  },
  _setData(that, param){
    let tabData = that.data.tabData;
    for (var key in param){
      tabData[key] = param[key];
    }
    that.setData({
      tabData
    })
  },
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
    this._setData(that,{
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
    this._setData(that,{
      searchIsHidden: true,
      neirong:false,
    })
    // this._setData1(that,{
    //   neirong:true,
    // })
    this.sousuo(val)
  }
}
