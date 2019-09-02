<template>
  <div class='agent-head mrb-30'>
    <header class="clear">
      <div class="left c-left">
        <img src="@/assets/images/agent-head/logo.png" alt="" class="logo mr-16">
        <p class="ft-15 ft-bold pl-16 title">{{userName}}</p>
      </div>
      <!-- <div class="left c-text" :title="userName || ''">欢迎您，{{ userName || '' }}</div> -->
      <div class="left link-box">
        <Menu mode="horizontal" active-name="home" @on-select="routeTo">
          <MenuItem name="/home">
          首页
          </MenuItem>
          <Submenu name="/agentManage">
            <template slot="title">
              <router-link to="/agentManage">代理商管理</router-link>
            </template>
            <MenuItem name="/agentManage">代理商管理</MenuItem>
            <MenuItem name="/agentStatistical">代理商统计</MenuItem>
          </Submenu>
          <MenuItem name="/financeManage">
          <!-- <template slot="title">
              <router-link to="/financeManage"></router-link>
            </template> -->
          财务管理
          <!-- <MenuItem name="/financeManage">收益统计</MenuItem>
            <MenuItem name="/financeDivide">代理商分润</MenuItem> -->
          </MenuItem>
          <Submenu name="4">
            <template slot="title">
              <router-link to="/finanialStatistic">业务统计</router-link>
            </template>
            <MenuItem name="/finanialStatistic">金融统计</MenuItem>
            <MenuItem name="/businessManage">结算统计</MenuItem>
          </Submenu>
          <MenuItem name="/staffManage">
          员工管理
          </MenuItem>
        </Menu>
        <!-- <router-link v-for="(item,i) in nav" :to="item.to" :key=i class="link-item">{{item.title}}</router-link> -->
      </div>
      <div class="left person-box">
        <p class="person mrb-5 fw">
          <i class="icon iconfont icon-personnone cl3"></i>
          {{myName || ''}}
        </p>
        <div class="person-item">
          <p @click="goPersonalDetail" class="mrb-5 border-b point">
            <i class="icon iconfont icon-geren cl3 fw"></i>
            查看资料
          </p>
          <p class="point" @click="loginOut">
            <i class="icon iconfont icon-tuichu cl3 fw"></i>
            退出登录
          </p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'agentHead',
  data() {
    return {
      nav: [
        { to: '/home', title: '首页' },
        { to: '/operManage', title: '业务数据' },
        { to: '/agentManage', title: '代理商管理' },
        { to: '/financeManage', title: '财务管理' },
        { to: '/businessManage', title: '业务统计' },
        { to: '/staffManage', title: '员工管理' }
      ],
      userName: '',
      myName: ''
    }
  },
  mounted() {
    let userInfo = window.sessionStorage.getItem('user_info') ? JSON.parse(window.sessionStorage.getItem('user_info')) : {}
    this.userName = userInfo.agentName
    this.myName = userInfo.accountName
  },
  methods: {
    testOne() {
    },
    goPersonalDetail() { // 个人资料查看
      this.$router.push({ name: 'personalDetail' })
    },
    routeTo(e) {
      this.$router.push(e)
    },
    loginOut() {
      window.sessionStorage.removeItem('user_info')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang='less'>
.ivu-menu {
  position: relative;
  z-index: 2 !important;
}
.ivu-menu-item {
  font-size: 18px;
  color: #fff !important;
  font-weight: bold;
}
.ivu-menu-item:hover {
  background: #528efc!important;
}
.ivu-menu-drop-list .ivu-menu-item:hover {
  background: #F1F1F1 !important;
}
a,.router-link-active {
  color: #fff;
}
a:hover,a:active {
  color: #fff;
}
.ivu-menu-drop-list .ivu-menu-item {
  color: #2b2d2b !important;
  font-weight: normal;
}
.link-box .ivu-menu-light {
  background: rgba(64, 111, 221, 1);
  color: #fff !important;
}
.ivu-menu-submenu-title {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.ivu-menu-drop-list .ivu-menu-item-active {
  background: #fff !important;
}
.ivu-menu-item-active {
  background: #528efc !important;
}
.ivu-menu-submenu:hover {
  background: #528efc;
}
@media (min-width: 1360px) and (max-width: 1500px) {
  .ivu-menu-item {
    font-size: 16px;
    color:#fff !important;
    font-weight: bold;
  }
  .ivu-menu-item:hover{
    background: #528EFC !important;
  }
  a,.router-link-active{
    color: #fff;
  }
 .ivu-menu-drop-list .ivu-menu-item{
    color:#2B2D2B !important;
    font-weight: normal;
  }
  .ivu-menu-drop-list .ivu-menu-item:hover{
    background: #EAEAEA !important;
  }
  .link-box .ivu-menu-light{
    background: rgba(64,111,221,1);
    color: #fff !important;
  }
  .ivu-menu-submenu-title{
    font-size: 16px;
    font-weight: bold;
    color:#fff;
  }
  .ivu-menu-drop-list .ivu-menu-item-active{
    background: #fff !important;
  }
  .ivu-menu-item-active{
    background: #528EFC !important;
  }
  .ivu-menu-submenu:hover{
    background: #528EFC;
  }
  .person-box {
    position: absolute;
    right: 6%;
  }
}
@media (max-width: 1360px) {
  .ivu-menu-item,.ivu-menu-submenu{
    padding: 0 10px !important;
  }
}
</style>

<style scoped lang='less'>
.agent-head {
  width: 100%;
  height: 60px;
  // background: url('../assets/images/agent-head/title.png');
  background: rgba(64,111,221,1);
  color: #fff;
  position: relative;
  .logo {
    width: 100px;
  }
  .title{
    border-left: 2px solid #fff;
  }
  .c-left {
    padding-left:10%;
    display: flex;
    align-items: center;
    height: 60px;
  }
  .c-text {
    margin: 55px 0 0 25px;
    width:150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .link-box {
    margin-left: 5%;
  }
  .link-item {
    display: inline-block;
    line-height: 60px;
    font-size: 18px;
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
    padding:0 20px;
  }
  .link-item:hover{
    background: #528EFC;
  }
  .person-box {
    position: absolute;
    right: 10%;
    z-index: 4;
    overflow: hidden;
    height: 26px;
    top:16px;
    transition: 0.5s;
    p{
      padding:5px;
    }
  }
  .person {
    font-size: 16px;
    cursor: pointer;
  }
  .person-box:hover {
    height: 90px;
  }
  .person-item{
    border:1px solid #fff;
    background: #528EFC;
    width: 120px;
    margin: 0 auto;
    // background: url('../assets/images/agent-head/title.png');
  }
  .active{
    font-size:26px;
  }
  .router-link-active {
    background: #528EFC;
  }
  .border-b{
    border-bottom: 1px solid #fff;
  }
}
</style>
