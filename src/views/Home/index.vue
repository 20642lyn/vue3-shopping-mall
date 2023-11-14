<script setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel  from './components/HomePanel.vue'
import HomeCategory from './components/HomeCategory.vue'
</script>

<template>
  <div class="homecontainer"> 
    <HomeBanner />
    <HomeCategory />
  </div>
  <HomeNew />
  <HomeProduct />
  <HomePanel/>
</template>