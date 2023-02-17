export default {
  pages: [
    "pages/auth/login"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar:{
    color:"#8a8a8a",
    selectedColor:"#0c628f",
    backgroundColor:"#fafafa",
    borderStyle:'black',
    list:[
      {
        "pagePath": "pages/equipment/index",
        "text": "设备",
        "iconPath": "assets/tabBar/ic_device_normal.png",
        "selectedIconPath": "assets/tabBar/ic_device_checked.png"
      } , {
        "pagePath": "pages/more/index",
        "text": "更多",
        "iconPath": "assets/tabBar/ic_more_normal.png",
        "selectedIconPath": "assets/tabBar/ic_more_checked.png"
      }
    ]
  },
  lazyCodeLoading : 'requiredComponents',
  permission:{
    'scope.userLocation':{
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  },
  requiredPrivateInfos:[
    'getLocation',
    'chooseLocation'
  ],
};
