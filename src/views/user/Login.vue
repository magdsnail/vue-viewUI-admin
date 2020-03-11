<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" :title="WEBNAME" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">随便填点什么</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import LoginForm from '_c/login-form';
import util from '@/util' //测试环境

export default {
  name: "Login",
  components: {
    LoginForm
  },
  data() {
    return {
       WEBNAME: this.$config.CONSTANTS.WEBNAME
    }
  },
  methods: {
    ...mapActions(['Login']),
    handleSubmit ({ userName, password }) {
      //正式环境
      // this.Login({
      //   userName,
      //   password
      // }).then((data) => {
      //   this.$Message.success('登录成功');
      //   this.$router.push('/');
      // });
      util.storage.set('loginuser', true);//测试环境
      this.$Message.success('登录成功');
      this.$router.push('/');
    }
  }
}
</script>

<style lang="less">
  @import './login.less';
</style>
