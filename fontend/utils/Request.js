module.exports = {
  request: request,//重新封装的wx.request
  init: init,//初始化request的参数

}
var header = {
  'content-type': 'application/json',
  'Cookie': 'JSESSIONID=' + wx.getStorageSync("sessionid")
}
var L = require('./Login.js')
var successCode = 200
var failCode = 500
function init(h, sc) {
  header = h;
  successCode = sc;
}

function request(param) {
  wx.request({
    url: param.url,
    data: param.data ? param.data : null,
    header: param.header ? param.header : header,
    method: param.method ? param.method : 'GET',
    success: function (res) {
      console.log(res)
      // console.log("statusCode", res.statusCode)
      if (res.statusCode == 200) {
            // console.log("成功访问")


                  if (res.data.statusCode == successCode) {
                    // console.log("go to success")
                    param.success ? param.success(res.data) : null
                  } else if (res.data.statusCode == undefined) {
                    if (res.data.indexOf("signupForm") != -1) {

                      // console.log("跳转到登录页面")
                      L.goLogin(function (res) {

                        // header = {
                        //   'content-type': 'application/json',
                        //   'Cookie': 'JSESSIONID=' + res.data.userInfo.sessionid
                        // }
                        header = L.getHeader()
                        // console.log("header", header)
                        param.header = header
                        request(param)


                      })
                    }
                  }else {
                    param.fail ? param.fail(res.data) : null
                                      
                  }
      } else if (res.statusCode == 302) {
        // console.log("没有权限")
      } else {
        wx.showToast({
          title: '网络开小差啦。',
          icon:'error'
        })
      }

    },
    fail: function (res) {
      // console.log("访问失败咯。。。")
      wx.showToast({
        title: '网络开小差啦~~~',
        icon:'error'
      })
    },
    complete: function (res) {
      // console.log("访问完成！！！。。。")
      // console.log("complete res", res)
    },
  })
}