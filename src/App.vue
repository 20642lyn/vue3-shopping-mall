<script setup>
// fact mock线上接口
// import axios from 'axios'
// import { onMounted } from 'vue';
//    const mount=()=>{
//         const baseURL='https://www.fastmock.site/mock/86f5569cb8a46d01f2aa8c8b1622641d/home';
//         axios.get(`${baseURL}/text`)
//         .then(({data})=>{
//             console.log('data',data)
//         })
//     }
// onMounted(()=>mount())

import { onMounted, ref} from 'vue'
import axios from 'axios'
const getdata=ref({})
const body={
  id:'',
  title:'流浪的歌手',
  author:'许巍',
}
const bodt={
  id:2,
  title:'流浪',
  author:'许巍',
}

// // 获取数据
// const getnewdate= async()=>{
//     const res=await axios.get(`/headercategory`)
//     getdata.value=res.data
// }
// onMounted(()=>getnewdate())
// console.log(getdata)
// // 添加数据
// const adddate= async()=>{
//     await axios.post(`/posts`,body)
//     await getnewdate()
// }
// onMounted(()=>adddate())
// // 删除数据
// const id = "1"
// const deletedate= async(id)=>{
//     await axios.delete(`/posts/${id}`)
//     await getnewdate()
// }
// onMounted(()=>deletedate(id))
// //修改、更新数据
// const update=async()=>{
//   await axios.put(`/posts`,bodt)
//   await getnewdate()
// }
// onMounted(()=>update())


//第三次
// import axios from 'axios'
// import { onMounted } from 'vue';
// const created=async()=>{
//   axios.get('/api/userinfo').then(result=>{
//     console.log(result)
//   })
// }
// onMounted(()=>created())
// import { reqgetBannerList } from '@/apis/index'
// import { resgetBannerList } from '@/apis/index'
// import axios from 'axios'
// import { onMounted ,ref} from 'vue';
// const updataBannerList =async ()=>{
//     let result = await reqgetBannerList();
//     if(result) {
//       console.log(11111)
//         console.log(result.data)
//     }
// }
// onMounted(()=>updataBannerList())
// const getdata=ref({})
// const body=ref({
//   id:'5',
//   imgUrl:'/images/banner5.jpg'
// })
// const addBannerList =async ()=>{
//     let result = await resgetBannerList(body);
//     if(result) {
//       console.log(2222)
//         console.log(result.data)
//     }
//     axios.put('src/mock/banner.json',{
//       age:"26"
//     })
// }
// onMounted(()=>addBannerList())

// import banner from '@/mock/banner.json'
// import fs from 'fs'
// var myJSON = require(banner);
// console.log("before change-->", myJSON);
// myJSON.data.age = 26;
// console.log("after change-->", myJSON);
// fs.writeFileSync('myjson.json', JSON.stringify(myJSON));
</script>

<template>
<!-- 一级路由出口组件 -->
<RouterView />
</template>

<style scoped lang="scss">
.test{
  color: $priceColor;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
