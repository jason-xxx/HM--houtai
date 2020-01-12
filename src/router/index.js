import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import  Index from '@/views/Index.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name:'Index',
      path:'/index',
      component:Index
    }
  ]
})

//添加导航守卫
router.beforeEach((to,from,next)=>{
  //判断当前是否跳转登入页，如果是登入页就next，不需要守卫
  if(to.path==='/login'){
    next()
  }else{
    //判断是否有登录状态
    let token=localStorage.getItem('heima_toutiao_houtai_41')
  if(token){
    next()
  }else{
    next('login')
  }
  }
})

export default router