<script setup>
// vueUse
import { useCategoryStore } from '@/stores/categoryStore'
import { useScroll } from '@vueuse/core'
 const { y } = useScroll(window)
//使用pinia中的数据
const categoryStore = useCategoryStore()
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="">
      </div> 
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
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
      </ul>

      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    display: flex;
    // 水平居中、垂直居中
    align-items: center;
    justify-content: center;
  }

  .logo {
    margin-top:5px;
    width: 150px;
    height: 70px;
    display: flex;
    // 水平居中、垂直居中
    align-items: center;
    justify-content: center;
    background-size: 160px auto;
    img{
      width: 100px;
      height: 60px;
    }
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 18px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-left: 10px;
      margin-right: 60px;
      width: 38px;
      text-align: center;

    a {
      font-size: 18px;
      line-height: 32px;
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
</style>