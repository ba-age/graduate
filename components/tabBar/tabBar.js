Component({
  data: {
    selected: 0,
    color: "#292929",
    selectedColor: "#FF8737",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "../../images/tag/shouye.png",
      selectedIconPath: "../../images/tag/shouyedianji.png",
      text: "首页"  
    }, {
        pagePath: "/pages/manage/manage",
        iconPath: "../../images/tag/guanli.png",
        selectedIconPath: "../../images/tag/guanlidianji.png",
      text: "管理"
    }, {
      pagePath: "/pages/publish/publish",
        iconPath: "../../images/tag/fabu.png",
        selectedIconPath: "../../images/tag/fabu.png",
      text: "发布"
    }, {
      pagePath: "/pages/make/make",
        iconPath: "../../images/tag/zhizuo.png",
        selectedIconPath: "../../images/tag/zhizuodianji.png",
      text: "制作"
    }, {
      pagePath: "/pages/mine/mine",
        iconPath: "../../images/tag/wode.png",
        selectedIconPath: "../../images/tag/wodedianji.png",
      text: "我的"
    }]
  },
  properties: {
    selected: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Number,
      value: 0,
    }
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(url,data)
      wx.switchTab({ url })
    }
  }
})