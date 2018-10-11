<template>
  <el-form>
    <el-form-item label="用户名">
      <el-input v-model="userName" placeholder="User"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="passWord" placeholder="Password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登陆啊啊啊啊</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {login} from '../../api/api'

  export default {
    name: 'Login',
    data() {
      return {
        userName: '',
        passWord: ''
      }
    },
    methods: {
      login() {
        login({
          username: this.userName,
          password: this.passWord
        }).then(res => {
          console.log(res)
          localStorage.setItem('username', this.userName)
          localStorage.setItem('pas', this.passWord)
        })
      }
    }
  }
</script>

<style scoped>

</style>
