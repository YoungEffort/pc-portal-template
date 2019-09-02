import Cookies from 'js-cookie'

export const TOKEN_KEY = 'access_token'
/**
 * 获取url参数
 */
export const getQueryString = (key) => {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  var result = window.location.search.substr(1).match(reg)
  return result ? decodeURIComponent(result[2]) : null
}
/**
 * 时间字符串对比
 */
export const CompareDate = (d1, d2) => {
  return ((new Date(d1.replace(/-/g, '/'))) > (new Date(d2.replace(/-/g, '/'))))
}
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage Json
 */
export const getStoreJson = name => {
  if (!name) return
  let content = window.localStorage.getItem(name)
  content = JSON.parse(content)
  return content
}
/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 保存token
 * @param token
 */
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: 1 })
}

/**
 * 获取token
 * @returns {*}
 */
// export const getToken = () => {
//   const token = Cookies.get(TOKEN_KEY)
//   if (token) return token
//   else return false
// }
/**
 * 获取token
 * @returns {*}
 */
export const getToken = () => {
  const token = sessionStorage.user_info == undefined ? '' : JSON.parse(sessionStorage.user_info).token_type + ' ' + JSON.parse(sessionStorage.user_info).access_token
  if (token) return token
  else return false
}
/**
 * 时间戳转YY-MM-DD HH:MM:SS
 */
export const formatDateTime = time => {
  if (!time) return
  let date = new Date(time)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let minute = date.getMinutes()
  let second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}
/**
 * 时间戳转YYYY/MM/DD
 * @param time
 * @returns {string}
 */
export const formatDate = time => {
  if (!time) return
  let date = new Date(time)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '/' + m + '/' + d
}

/**
 *  防止频繁输入
 * @param func 输入完成的回调函数
 * @param delay 延迟时间
 * @returns {Function}
 */
export function debounce(func, delay) {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 验证身份证号
 * @param code
 * @returns {boolean}
 * @constructor
 */
export function IdentityCodeValid(code) {
  const city = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江 ', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北 ', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外 ' }
  var pass = true

  if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
    pass = false
  } else if (!city[code.substr(0, 2)]) {
    pass = false
  } else { // 18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split('')
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
      // 校验位
      var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ]
      var sum = 0
      var ai = 0
      var wi = 0
      for (var i = 0; i < 17; i++) {
        ai = code[i]
        wi = factor[i]
        sum += ai * wi
      }
      var last = parity[sum % 11]
      if (last != code[17]) {
        pass = false
      }
    }
  }
  return pass
}

/**
 * 验证手机号
 * @param phoneNo
 * @returns {boolean}
 */
export function checkPhone(phoneNo) {
  return /^1(3|4|5|7|8)\d{9}$/.test(phoneNo)
}
