const app = getApp()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { }
    }
  },
  data: {
    height: app.globalData.height,
    //默认值  默认显示左上角
    navbarData: {}
  },
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度   方便对齐
  },
  methods: {
    // 返回上一页面
    navback() {
      console.log("fanhui ")
      wx.navigateBack({
        delta: 1
      })
    },
    //返回到首页
    backhome() {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  }

}) 