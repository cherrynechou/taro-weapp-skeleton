import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Form, Input } from '@tarojs/components'
import { UniLoadding } from '@/components'
import { Button } from '@nutui/nutui-react-taro';
import styles from '@/styles/modules/login.module.scss'

export default () => {

  const [loadding, setLoadding] = useState(true)
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')


  useEffect(() => {
    const accessToken = Taro.getStorageSync('access_token') || ''
    try{
      // if(accessToken){
      //   currentUser().then((res: any)=>{
      //     dispatch({
      //       type:USER_INFO,
      //       payload:{...res}
      //     })
      //   })
      //   setTimeout(() => {
      //     Taro.reLaunch({
      //       url: '/pages/equipment/index'
      //     })
      //   }, 2000);

      // }else{
      //   setLoadding(false)
      // }
      setLoadding(false)
    }catch(e){
      //TODO handle the exception
    }
  }, [])


  const handleSubmit = (e: any) => {

  }

  /**
   * 更新用户名
   */
  const handleUserNameChange = (e: any) => {
    setUserName(e.target.value);
  }

  /**
   * 更新密码
   */
  const handlePasswordChange = (e: any) =>{
    setPassWord(e.target.value);
  }


  return (
    <>
      {loadding && <UniLoadding /> }
      <View className={styles.container}>
        <View className={`${styles.header} flex flex-column`}></View>
        <View className='flex flex-column'>
          <View className='flex flex-column u-m-t-200'>
            <Form onSubmit={handleSubmit}>
              <View className={`${styles.input} flex-row justify-center align-center circle-o-border`}>
                <Input
                  type='text'
                  name='username'
                  value={userName}
                  placeholder='请输入账号'
                  onInput={handleUserNameChange}
                />
              </View>
              <View className={`${styles.input} flex-row justify-center align-center circle-o-border`}>
                <Input
                  name='password'
                  type='password'
                  value={passWord}
                  placeholder='请输入密码'
                  onInput={handlePasswordChange}
                />
              </View>
              <View className='flex flex-column u-p-t-20'>
                <View className='w100'>
                  <Button type='primary' className='btn-confirm w-100' formType='submit'>提交</Button>
                </View>
              </View>
            </Form>
          </View>
        </View>
      </View>
    </>
  )
}
