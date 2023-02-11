import Taro from '@tarojs/taro'

import { API_USER_LOGIN } from '@/constants/api'

const CODE_SUCCESS = 200
const CODE_AUTH_EXPIRED = 401

const API_HOST = 'https://csapi.ysxinyi.com/api/v1';

async function getStorage(key: any) {
  return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

function updateStorage(data = {}) {
  return Promise.all([
    Taro.setStorage({ key: 'access_token', data: data['access_token'] || '' }),
    Taro.setStorage({ key: 'token_type', data: data['token_type'] || '' }),
  ])
}

/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */
export default async function fetch(options: any) {
  
  const {
    url,
    payload,
    method = 'GET',
    showToast = true,
    autoLogin = true
  } = options

  const token = await getStorage('access_token')
  const token_type = await getStorage('token_type')
  const header = token ? { 'Authorization': `${token_type} ${token}` } : {}

  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return Taro.request({
    url:`${API_HOST}${url}`,
    method,
    data: payload,
    header
  }).then(async (res) => {
    
    const { statusCode } = res

    if (+statusCode !== CODE_SUCCESS) {
      if (+statusCode === CODE_AUTH_EXPIRED) {
        await updateStorage({})
      }
      return Promise.reject(res.data)
    }

    if (url === API_USER_LOGIN) {
      await updateStorage(res.data.data)
    }

    return res.data.data

  }).catch((err) => {

    const defaultMsg = err.status === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'

    if (showToast) {
      Taro.showToast({
        title: err && err.message || defaultMsg,
        icon: 'none'
      })
    }

    if (err.status === CODE_AUTH_EXPIRED && autoLogin) {
      Taro.navigateTo({
        url: '/pages/login/index'
      })
    }

    return Promise.reject({ message: defaultMsg, ...err })
  })
}
