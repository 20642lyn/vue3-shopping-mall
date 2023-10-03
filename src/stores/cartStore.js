import { defineStore } from 'pinia'
import { ref, computed} from 'vue'

export const useCartStore = defineStore('cart', () => {
    //1.定义state-cartList
    const cartList = ref([])
    //2.添加购物车操作
    const addCart = (goods) => {
        //添加购物车操作
        //已添加 count+1
        //未添加 直接push
        //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到就是已添加
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            //找到了
            item.count++
        } else {
            cartList.value.push(goods)
        }
    }
    //3.删除商品
    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }


    //单选功能
    const singleCheck=(skuId,selected)=>{
        const item = cartList.value.find((item) => skuId === item.skuId)
            item.selected=selected
    }
    //计算属性
    //1.总的数量
    const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    //2.总价
    const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
    return {
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart,
        singleCheck
        
    }
}, {
    persist: true,
})