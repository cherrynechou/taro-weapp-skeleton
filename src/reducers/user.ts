import { USER_INFO, USER_LOGOUT } from '@/constants/user'

const INITIAL_STATE = {
  userInfo: {},    //用户信息
}

export default function user(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case USER_INFO: {
      return {
        ...state,
        userInfo: {
          ...action.payload,
          login: true
        }
      }
    }
    case USER_LOGOUT: {
      return {
        ...INITIAL_STATE
      }
    }
    default:
      return state
  }
}
