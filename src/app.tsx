import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import { Provider } from 'react-redux'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component<PropsWithChildren> {

  // 设置全局变量 "x"
  taroGlobalData = {
    platform: 1,   //平台判断
    isIpx:false,
    sysinfo:{}
  }

  onLaunch () {
    // 系统信息
    let systemInfo = Taro.getSystemInfoSync();
    this.taroGlobalData.sysinfo = systemInfo;
    this.taroGlobalData.platform = systemInfo.platform == 'ios' ? 1 : 2;

    let model = systemInfo.model;
    this.taroGlobalData.isIpx = model.indexOf("iPhone X") > -1 || model.indexOf("unknown<iPhone") > -1;
  }

  componentDidMount () {
    this.getUpdate();
  }

  componentDidShow () {}

  componentDidHide () {}

  getUpdate = () =>{
    if(Taro.canIUse("getUpdateManager")){
      const update = Taro.getUpdateManager();
      update.onCheckForUpdate((res)=>{
        //检测是否有新版本
        if(res.hasUpdate){
          update.onUpdateReady(()=>{
            // update.applyUpdate();
            //如果有新版本，给用户提示确认更新即可
            Taro.showModal({
               title: '更新提示',
               content: '新版本已经准备好，是否重启应用？',
               success: function (r) {
                 if (r.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启，如果想静默更新，直接在检测有新版本的时候调用此方法即可
                  update.applyUpdate();
                 }
               }
             })
          })
          //如果自动更新失败，给用户提示手动更新（有些小程序涉及到多ID使用，不更新会出现莫名的缓存bug，大部分小程序不用执行这一步）
          update.onUpdateFailed(()=>{
            Taro.showModal({
               title: '已经有新版本了',
               content: '新版本已经上线，请您删除当前小程序，重新打开。'
            })
          })
        }
      })
    }else{
      Taro.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
