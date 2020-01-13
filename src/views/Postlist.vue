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
      <el-table-column prop="create_date" label="发布时间" width="200"></el-table-column>
      <el-table-column prop="title" label="标题" width></el-table-column>
      <el-table-column prop="type" label="类型" width="100"></el-table-column>
      <el-table-column prop="user.nickname" label="作者" width="150"></el-table-column>
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
    <!-- 分页结构 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[2, 3, 4, 5]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { getPostList } from "@/apis/article.js";
export default {
  data() {
    return {
      postList: [],
      //3条数据一页
      pageSize: 2,
      pageIndex: 1,
      total:0
    };
  },
  methods: {
    //切换每页显示数量列表时触发
    handleSizeChange(val){
      //val就是当前用户选择的数量
      console.log(`每页${val}条`)
      // 1.重置pageSize
      this.pageSize=val
      // 2.根据重置后的pageSize再次发起数据请求，进行动态渲染
      this.init()
    },
    //切换页码时触发
    handleCurrentChange(val){
     console.log(`当前页面:${val}`)
     this.pageIndex=val
     this.init()
    },
    edit(data) {
      console.log(data);
    },
  //封装获取文章列表的分页数据,方便init()调用
  async init() {
    let res = await getPostList({
      pageSize: this.pageSize,
      pageIndex: this.pageIndex
    });
    this.postList = res.data.data;
    this.total=res.data.total
  }
  },
  mounted(){
    this.init()
  }
};
</script>

<style>
</style>