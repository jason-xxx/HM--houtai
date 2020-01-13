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

        <!-- 长传富文本和视频 -->
        <el-form-item label="内容:">
          <!-- 添加富文本框组件 需要添加必要的配置在export default的config: 中-->
          <VueEditor :config="config" v-if="post.type===1" />
          <!--添加视频组件-->
          <el-upload class="upload-demo" action v-if="post.type===2">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传视频文件</div>
          </el-upload>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script>
//通过npm i vue-word-editor --save下载富文本框，并引入
import VueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css";
export default {
  //注册VueEditor，否则富文本无法使用
  components: {
    VueEditor
  },
  data() {
    return {
      //根据api文档获取以下数据
      post: {
        title: "",
        content: "",
        categories: [],
        cover: [],
        type: 1
      },
      config: {
        // 上传图片的配置
        uploadImage: {
          url: "http://localhost:3000/upload",
          name: "file",
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: "http://localhost:3000/upload",
          name: "file",
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        }
      }
    };
  }
};
</script>

<style>
</style>