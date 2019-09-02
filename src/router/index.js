import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const LOGIN_PAGE_NAME = 'login'
// const homeName = 'homeitem'
// const nouseToken = ['login', 'register', 'forgetpsd', 'forgetcode']
// router.beforeEach((to, from, next) => {
//   // var toName = to.name
//   let token = sessionStorage.user_info
//   if (!token && !nouseToken.includes(to.name)) {
//     // 未登录且要跳转的页面不是登录页
//     next({
//       name: LOGIN_PAGE_NAME // 跳转到登录页
//     })
//   } else if (!token && to.name === LOGIN_PAGE_NAME) {
//     // 未登陆且要跳转的页面是登录页
//     next() // 跳转
//   } else if (token && to.name === LOGIN_PAGE_NAME) {
//     // 已登录且要跳转的页面是登录页
//     next({
//       name: homeName // 跳转到homeName页
//     })
//   } else {
//     next()
//   }
//   // if (toName == 'homeitem') {
//   //   if (!token) {
//   //     router.replace('/login')
//   //     next()
//   //     return
//   //   }
//   // }
//   // next()
// })

export default router
