import {defineStore} from 'pinia'
import {ref}from 'vue'
import { loginAPI}from '@/apis/user'
import {useCartStore} from './cartStore'
import { mergeCartAPI } from '@/apis/cart'
export const useUserStore = defineStore('user',()=>{
    const cartStore =useCartStore()
    //1.管理用户数据的state
    const userInfo=ref({})
    //定义获取接口数据的action函数
    const getUserInfo= async({account,password})=>{
        const res = await loginAPI({account,password})
        userInfo.value=res.result
    //合并购物车
    await mergeCartAPI(cartStore.cartList.map(item=>{
        return{
            skuId:item.skuId,
            selected:item.selected,
            count:item.count
        }
    }))
    cartStore.updateNewList()
}
    //退出时清除用户信息
    const clearUserInfo= ()=>{
        userInfo.value={}
        //清空购物车
        cartStore.clearCart()
    }
    //3.以对象的格式把state和action return出去
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true,
})