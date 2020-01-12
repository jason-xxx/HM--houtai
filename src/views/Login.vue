<template>
  <div class="login">
   <div class="container">
       <!-- 头像 -->
      <img src="../assets/图/c (3).jpg" class="avatar" alt="">
      <el-form :model="loginForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <!-- 用户 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="icon-key"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        loginForm:{
            username:'',
            password:''
        },
        //添加数据验证规则
        rules:{
            username:[
                {reqired:true,message:'请输入用户名',trigger:'blur'}
            ],
            password:[
                {reqired:true,message:'请输入密码',trigger:'blur'},
                {min:3,max:16,message:'请输入3-16位密码',trigger:'blur'}
            ]
        }
      }
    }

}
</script>

<style lang='less' scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #173a3f;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: rgb(0, 170, 161);
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}

</style>