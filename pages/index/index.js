//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    statusHeight: app.globalData.height,
    navbarData: {
      isBack: false, //是否显示左上角图标   1表示显示    0表示不显示
      title: '首页', //导航栏 中间的标题
    },
  },
  //事件处理函数
})
