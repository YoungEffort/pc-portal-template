import axios from '@/libs/http'
import { AGENTTERM } from '@/api/server'

const api = AGENTTERM

// 登录
export const postLogin = params => {
  return axios.post(
    api + '/agentAccount/login',
    params
  )
}

// 获取注册邀请码
export const getInfoByInviteCode = params => { // get方式请求
  return axios.request({
    url: api + '/agentAccount/getInfoByInviteCode',
    method: 'get',
    params
  })
}

export const postResetsms = params => {
  return axios.request({
    url: api + '/auth/resetsms',
    method: 'post',
    params
  })
}

// 代理商注册发送验证码
export const postSendCode = params => { // get方式请求
  return axios.request({
    url: api + '/agentAccount/sendRegSms',
    method: 'get',
    params
  })
}

// 代理商注册
export const registerAgent = params => {
  return axios.post(
    api + '/agentAccount/register',
    params
  )
}

// 忘记密码发送验证码
export const psdSendCode = params => { // get
  return axios.request({
    url: api + '/agentAccount/sendRestPwdSms',
    method: 'get',
    params
  })
}

// 重置密码
export const resetPassword = params => {
  return axios.post(
    api + '/agentAccount/retrievePassword',
    params
  )
}

// 找回邀请码
export const retrieveInviteCode = params => { // get
  return axios.request({
    url: api + '/agentAccount/retrieveInviteCode',
    method: 'get',
    params
  })
}
