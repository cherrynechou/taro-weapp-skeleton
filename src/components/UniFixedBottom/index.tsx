import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'

export default (props: any) => {
  const [isIpx, setIsIpx] = useState(true)

  const app = Taro.getApp()

  useEffect(() => {
    setIsIpx(app.$app.taroGlobalData.isIpx);
  }, [])

  return (
    <View className={`fixed-bar ${isIpx=== true?'u-p-b-30':''}`}>
      {props.children}
    </View>
  )
}
