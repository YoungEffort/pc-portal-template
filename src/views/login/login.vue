<template>
  <div class='login'>
    <div class="login-l-container">
      <h1 class="login-title">凡融 . 赋强</h1>
      <h3 class="login-sub-title">共建产业互联网基础平台   携手共生开辟行业新生态</h3>
      <p class="login-text">欢迎加入车云数科城市合伙人</p>
    </div>
    <div class="login-r-container">
      <img src="@/assets/images/logo.png" alt="" class="logo-icon"/>
      <div  class="login-content">
        <!-- <Login v-show="showType === 0" v-on:childByValue="childByValue"/>
        <Register v-show="showType === 1" v-on:childByValue="childByValue"/>
        <Password v-show="showType === 2" v-on:childByValue="childByValue"/>
        <Invitecode v-show="showType === 3" v-on:childByValue="childByValue"/> -->
        <div class="login-components">
            <h3 class="login-com-title txt-left ml-20 ft-bold">账号登录</h3>
            <div class="login-components-container mt-16">
              <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="mobile">
                  <i-input type="text" v-model="formInline.mobile" placeholder="请输入登录手机号" :maxlength='11'>
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                  </i-input>
                </FormItem>
                <FormItem prop="password">
                  <i-input type="password" v-model="formInline.password" placeholder="请输入登录密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                  </i-input>
                </FormItem>
                <div class="ft-bold bg-54 denglu fc-ff point" v-on:keyup.13.native="submit" @click="handleSubmit('formInline')">登录</div>
                <div class="flexbox cnt-betweent mt-16">
                  <p class="ft-13 fc-54 point" @click="regisTer()">没有账号，立即注册</p>
                  <p class="ft-13 fc-54 point" @click="forgetPassWord()">忘记密码?</p>
                </div>
              </Form>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postLogin } from '@/api/login'
export default {
  name: 'login',
  components: {
  },
  data() {
    return {
      formInline: {
        mobile: '',
        password: ''
      },
      // 表单验证
      ruleInline: {
        mobile: [
          { required: true, message: '请输入登录手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      },
      showType: 0 // 显示对应组件type 0=>登录 1=>注册 2=> 忘记密码 3=>邀请码
    }
  },
  created() {
    var _this = this
    document.onkeydown = function(e) {
      let key = window.event.keyCode
      if (key == 13) {
        _this.submit()
      }
    }
  },
  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      this.showType = childValue
    },
    submit() {
      this.handleSubmit('formInline')
    },
    // 登录提交
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          postLogin(this.formInline)
            .then(res => {
              if (res.code == '200') {
                sessionStorage.user_info = JSON.stringify({
                  tokenType: res.data.tokenType,
                  accessToken: res.data.accessToken,
                  accountId: res.data.accountId,
                  accountName: res.data.accountName,
                  agentId: res.data.agentId,
                  agentName: res.data.agentName,
                  phoneNumber: res.data.mobile,
                  contactName: res.data.contactName,
                  contactMobile: res.data.contactMobile,
                  userType: res.data.userType,
                  level: res.data.level
                })
                this.$Message.success('登录成功!')
                this.$router.push({ name: 'homeitem' })
              }
            })
        } else {
          this.$Message.error('登录名或者密码不能为空!')
        }
      })
    },
    regisTer () { // 注册
      this.$router.push({ name: 'register' })
    },
    forgetPassWord () { // 忘记密码
      this.$router.push({ name: 'forgetpsd' })
    }
  },
  mounted() {}
}
</script>
<style lang='less'>
.login{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login/login-bg.png') no-repeat center center;
  background-size: 100% 100%;
  font-family: "微软雅黑 Bold", '微软雅黑',serif;
  .login-l-container{
    color: #fff;
    .login-title{
      font-weight: 700;
      font-style: normal;
      font-size: 56px;
    }
    .login-sub-title{
      margin: 12% 0;
      font-weight: 700;
      font-style: normal;
      font-size: 30px;
    }
    .login-text{
      font-weight: 700;
      font-style: normal;
      font-size: 15px;
    }
  }
  .login-components {
    padding-top: 20px;
    margin-bottom: 30px;
    .denglu {
      padding: 10px 0;
    }
    .login-com-title {
      color: #072154;
    }
    .login-components-container {
      padding: 0 18px;
    }
    .ivu-form-item {
      margin-bottom: 25px;
      .ivu-icon {
        font-size: 16px;
      }
    }
  }
  .login-r-container{
    .logo-icon{
      width: 150px;
    }
    .login-content{
      margin-top: 20px;
      width: 360px;
      min-height: 310px;
      background: #fff;
    }
  }
}
</style>
