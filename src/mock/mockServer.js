import Mock from 'mockjs'
// 引入 json 数据
import banner from '@/mock/banner.json'
// 设置响应
Mock.mock('/mock/banner', {
    data: banner,
})

Mock.mock('/mock/banner', ({ body }) => {
        let dataItem = JSON.parse(body);
        banner.value.push(dataItem)
        return {
            code: 1,
            message: '成功添加'
        }
        })
    