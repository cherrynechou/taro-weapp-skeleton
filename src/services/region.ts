import fetch from '@/utils/request'
import {
  API_REGIONS,
  API_REGION_CREATE,
  API_REGION_DETAIL,
  API_REGION_UPDATE
 } from '@/constants/api'

/**
 * 获取区域列表
 */
export async function getRegions(payload = {}){
  return fetch({
    url:API_REGIONS,
    payload
  })
}

/**
 * 创建区域
 */
export async function createRegion(payload = {}){
  return fetch({
    url:API_REGION_CREATE,
    method: 'POST',
    payload
  })
}


/**
 * 获取区域详情
 */
export async function getRegionDetail(id: number){
  return fetch({
    url: `${API_REGION_DETAIL}/${id}`
  })
}

/**
 * 更新区域详情
 */
export async function updateRegion(id: number,payload = {}){
  return fetch({
    url: `${API_REGION_UPDATE}/${id}`,
    method:'PUT',
    payload
  })
}
