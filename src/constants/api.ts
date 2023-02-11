/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
//用户登录
export const API_USER_LOGIN= '/oauth/login'

//获取用户信息
export const API_CURRENT_USER = '/user'

//设备列表
export const API_EQUIPMENT = '/equipments'

//区域列表
export const API_REGIONS = '/regions'

//创建区域
export const API_REGION_CREATE = '/regions'

//区域详情
export const API_REGION_DETAIL = '/regions'

//区域更新
export const API_REGION_UPDATE = '/regions'
