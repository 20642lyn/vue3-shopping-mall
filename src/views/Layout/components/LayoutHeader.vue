<script setup>
import { useCategoryStore } from '@/stores/categoryStore'
import HeaderCart from './HeaderCart.vue'
import { onMounted, ref} from 'vue'
import axios from 'axios'
const getdate=ref([])
// 获取categorylist数据
const getnewdate= async()=>{
    const res=await axios.get(`/headercategory`)
    getdate.value=res.data
}
onMounted(()=>getnewdate())
console.log(getdate)
//使用pinia中的数据
const categoryStore = useCategoryStore()
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="">
      </div> 
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/category/1005002">美食</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/category/1010000">服饰</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/category/1011000">母婴</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/category/1013001">个护</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/category/1043000">数码</RouterLink>
        </li>
        <li class="home">
          <RouterLink to="/category/109243029">运动</RouterLink>
        </li>
        
        <!-- <li class="home" v-for="item in getdate.value" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        </li> -->
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->
      <HeaderCart />
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  height: 150px;
  background: #fffefed9;
  margin-bottom: 5px;
  

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 150px;
    height: 150px;
    display: flex;
    // 水平居中、垂直居中
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    img{
      width: 125px;
      height: 100px;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
    ul{
      margin-left: 40px;
    }
    li {
      margin-left: 10px;
      margin-right: 60px;
      width: 38px;
      text-align: center;
  
      a {
        font-size: 18px;
        line-height: 30px;
        height: 32px;
        display: inline-block;
  
        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
  
      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }

  .search {
    width: 170px;
    height: 35px;
    position: relative;
    border:1px solid #e7e7e7;
    line-height: 35px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>