import axios from 'axios'
import Vue from 'vue'
// import { getToken } from './utils'
import router from '@/router/index'
import { isLocalDev } from '@/api/server'
// axios 配置
axios.defaults.timeout = 60000
axios.defaults.baseURL = isLocalDev === true ? '' : process.env.VUE_APP_BASE_URL

const whiteList = [
  'agentAccount/getInfoByInviteCode',
  'agentAccount/register',
  'agentAccount/login',
  'agentAccount/sendRestPwdSms',
  'agentAccount/resetPassword',
  'agentAccount/sendRegSms',
  'agentAccount/retrieveInviteCode',
  '/portal/login',
  '/agentAccount/retrievePassword'
]
const isInWhiteList = function(url) {
  var flag = false
  whiteList.forEach(function(e, i) {
    if (url.indexOf(e) >= 0) {
      flag = true
    }
  })
  return flag
}

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // if (!isInWhiteList(config.url)) {
    // config.params.businessId = '50886742131081246'
    // if (sessionStorage.jrUserType) {
    //   config.params.jrUserType = sessionStorage.jrUserType
    // }
    // if (sessionStorage.userId) {
    //   config.params.userId = sessionStorage.userId
    // }
    // }
    // Vue.prototype.$globalToast.loading()
    // let token = getToken()
    // if (token && !isInWhiteList(config.url)) {
    //   config.headers.Authorization = token
    // }
    let token = window.sessionStorage.getItem('user_info')
    if (token && !isInWhiteList(config.url)) {
      token = JSON.parse(token)
      if (token.tokenType && token.accessToken) {
        config.headers.Authorization = token.tokenType + ' ' + token.accessToken
      } else {
        router.replace('/login')
      }
      return config
    } else if (!token && isInWhiteList(config.url)) {
      return config
    } else if (token && isInWhiteList(config.url)) {
      return config
    } else {
      router.replace('/login')
    }
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    var code = response.data.code
    if (code == '200') {
      return response.data
    } else {
      if (response.data.msg) {
        new Vue().$Message.error(response.data.msg)
      }
      return response.data
    }
  },
  error => {
    new Vue().$Message.error('系统错误')
    return Promise.reject(error)
  }
)

export default axios
