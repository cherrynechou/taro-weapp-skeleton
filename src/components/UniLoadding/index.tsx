import { View } from '@tarojs/components'
import './index.scss'

export default () =>{
  return (
    <View className='comp-loading flex justify-center align-center w-100 h-100'>
      <View className='sk-folding-cube'>
        <View className="sk-cube1 sk-cube" />
        <View className="sk-cube2 sk-cube" />
        <View className="sk-cube4 sk-cube" />
        <View className="sk-cube3 sk-cube" />
      </View>
    </View>
  )
}
