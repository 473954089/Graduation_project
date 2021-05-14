Component({

  properties: {
    background: {
      type: String,
      value: '#00bfff'
    },
    color: {
      type: String,
      value: '#ffffff'
    },
    titleText: {
      type: String,
      value: '深大问答'
    },
    titleImg: {
      type: String,
      value: ''
    },
    fontSize: {
      type: Number,
      value: 16
    },
    iconHeight: {
      type: Number,
      value: 19
    },
    iconWidth: {
      type: Number,
      value: 58
    }
  },

  attached: function () {
    var that = this;
    that.setNavSize();
    that.setStyle();
  },

  data: {
  },

  methods: {
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
      that.setData({
        status: statusHeight,
        navHeight: navHeight
      })
    },
    setStyle: function () {
      var that = this
        , containerStyle
        , textStyle
        , iconStyle;

      containerStyle = [
        'background:' + that.data.background
      ].join(';');

      textStyle = [
        'color:' + that.data.color,
        'font-size:' + that.data.fontSize + 'px'
      ].join(';');

      iconStyle = [
        'width: ' + that.data.iconWidth + 'px',
        'height: ' + that.data.iconHeight + 'px'
      ].join(';');

      that.setData({
        containerStyle: containerStyle,
        textStyle: textStyle,
        iconStyle: iconStyle
      })
    },

    gotosearch:function(){
      wx.navigateTo({
        url: '../../pages/search/search',
      })
    },

  }
})


