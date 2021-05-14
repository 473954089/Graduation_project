module.exports = {
  setLoginURL: setLoginURL,
  goLogin: goLogin,
  getUser: getUser,
  getHeader: getHeader
}

var loginURL;
var successCode = 0;
var user = wx.getStorageSync("user")
var isLogin = true
var header = {
  'content-type': 'application/json',
  'Cookie': 'JSESSIONID=' + wx.getStorageSync("sessionid")
}
function getHeader() {
  var h = {
    'content-type': 'application/json',
    'Cookie': 'JSESSIONID=' + wx.getStorageSync("sessionid")
  }
  return h
}
function setLoginURL(url) {
  loginURL = url;
}
function goLogin(handle) {
  if (isLogin) {
    isLogin = false
    wx.login({
      success: function (r) {
        console.log(r)
        wx.request({
          url: loginURL,
          data: {
            code: r.code
          },
          method: 'POST',
          success: function (res) {
          
            if (res.data.statusCode == 200) {
              // wx.setStorageSync('sessionid', res.data.userInfo.sessionid)
              
              if(res.data.data.avatar){
                wx.setStorageSync('newUser', 1)
              }else{
                wx.setStorageSync('newUser', 2)
              }

              wx.setStorageSync("user", res.data.data)
              // app.globalData.user = res.data.userInfo
              
              user = res.data.data
              isLogin = true

              // console.log("拿到了sessionid",res.data.userInfo.sessionid)
              handle(res.data.data)
            } else {
              wx.showToast({
                title: '暂时无法登录',
              })
            }
          }
        })
      }
    })
  }

}
function getUser() {
  user = wx.getStorageSync("user")
  if ((user == null)||(user=="")) {
    goLogin(function (res) {
      // console.log(res,"o0o0o0o0o0o0osdsdsdfsdfsdfsdf")
      console.log(res)
      return res;
    })
  } else {
    return user;
  }

}