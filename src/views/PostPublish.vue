<template>
  <div class="PostPublish">
    <!-- 添加面包屑-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章发布</el-breadcrumb-item>
    </el-breadcrumb>

    <!--卡片（整体的发布页面在里面写）开始 -->
    <el-card class="box-card" style="margin-top:20px">
      <el-form ref="postPublish" :model="post" label-width="80px">
        <!-- 标题的文本输入框    -->
        <el-form-item label="标题:">
          <el-input v-model="post.title"></el-input>
        </el-form-item>
        <!--单选框，选择发布是文章还是视频-->
        <el-form-item label="类型:">
          <el-radio-group v-model="post.type">
            <el-radio :label="1">文章</el-radio>
            <el-radio :label="2">视频</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //根据api文档获取以下数据
      post: {
        title: "",
        content: "",
        categories: [],
        cover: [],
        type: 1
      }
    };
  }
};
</script>

<style>
</style>