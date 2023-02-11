import fetch from '@/utils/request'
import { API_USER_LOGIN, API_CURRENT_USER } from '@/constants/api'


/**
 * 登录
 */
export async function login(payload = {}){
  return fetch({
    url:API_USER_LOGIN,
    method: 'POST',
    payload
  })
}

/**
 * 当前用户
 */
export async function currentUser(payload = {}){
  return fetch({
    url:API_CURRENT_USER,
    payload
  })
}