<template>
  <div class="index">
    <!-- 左侧菜单栏开始 -->
    <el-container>
      <!-- 左侧头部 -->
      <el-aside width="200px">
        <div class="logo"></div>
        
        <!-- 左侧可折叠表格开始 -->
        <el-menu
          :router='true'
          :unique-opened='true'
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="pink"
          active-text-color="#ffd04b"
        >
        <!-- 第一行————————————————————开始 -->
        <!-- index就是跳转页面的属性 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
       <!-- 第一行————————————————————结束 -->

       <!-- 第二行————————————————————开始 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="/login">
              <template slot="title">
                <i class="el-icon-document-copy"></i>
                <span>文章列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-2">
              <template slot="title">
                <i class="el-icon-document-checked"></i>
                <span>文章发布</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <!-- 第二行————————————————————结束 -->

          <!-- 第三行————————————————————开始 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>栏目管理</span>
            </template>
            <el-menu-item index="3-1">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>栏目列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <!-- 第三行————————————————————结束 -->
        </el-menu>
        <!-- 左侧可折叠表格结束 -->
      </el-aside>
      <!-- 左侧菜单栏结束 -->
      <el-container>
        <el-header>
            <span class="el-icon-s-operation toggle-btn"></span>
            <span class="system-title">黑马头条后台管理系统</span>
            <div class="welcome">
                <span>欢迎你：41期的小伙伴</span> &nbsp;&nbsp;
                <span> 退出</span>
            </div>
        </el-header>
        <el-main>欢迎你使用后台管理系统</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.index {
  height: 100%;
  .el-menu{
      border-right: none;
  }
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #fff;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: pink;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
  }
}
</style>
