<template>
  <div class="postlist">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格 -->
    <el-table :data="postList" style="width: 100%;margin-top:20px" border>
      <el-table-column prop="create_date" width="200"></el-table-column>
      <el-table-column prop="title" label="标题" width=""></el-table-column>
      <el-table-column prop="type" label="类型"  width="100"></el-table-column>
      <el-table-column prop="user.nickname" label="作者"  width="150"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="分享" placement="top">
            <el-button type="success" icon="el-icon-share"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="danger" icon="el-icon-delete"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getPostList } from '@/apis/article.js';
export default {
data(){
    return{
        postList:[]
    }
},
methods:{
    edit (data){
        console.log(data);
    }
    },
    async mounted(){
        let res=await getPostList()
        console.log(res);
        this.postList=res.data.data
    
}
}
</script>

<style>

</style>