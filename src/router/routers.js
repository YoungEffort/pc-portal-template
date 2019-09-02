export default [
  {
    path: '/',
    name: 'redhome',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '/home', // 1.2版本
        name: 'homeitem',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/homeitem.vue')
      }
    ]
  }
  // {
  //   path: '/error404',
  //   name: 'error404',
  //   meta: {
  //     title: '404'
  //   },
  //   component: () => import('@/views/error/error404.vue')
  // }
]
