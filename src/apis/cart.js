import request from '@/utils/http'

//加入购物车
export const insertCartAPI=({skuId,count})=>{
    return request({
        url:'/member/cart',
        methed:'POST',
        data:{
            skuId,
            count
        }
    })
}
//获取最新的购物车列表
export const findNewCartListAPI=()=>{
    return request({
        url:'/member/cart'
    })
}