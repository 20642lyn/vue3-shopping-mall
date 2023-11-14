import Mock from 'mockjs'
import getMockDate from '@/mock/index'

const getmockdate = getMockDate()
// 导航栏名称数据请求拦截
Mock.mock('/headercategory', 'get', {
    code: 1,
    data: getmockdate.categoryList
})


// 拦截请求
// Mock.mock('/posts', 'get', {
//     code: 1,
//     data: list
// })

//  新增数据 body为需要传入的数据
// Mock.mock(/posts/, 'post', ({ body }) => {
//     let dataItem = JSON.parse(body);
//     dataItem.id = Mock.mock('@increment');
//     list.value.push(dataItem)
//     return {
//         code: 1,
//         message: '成功添加'
//     }

// })

//  删除数据 bod为需要传入的数据
// Mock.mock(/posts/, 'delete', ({ url }) => {
//     const id = url.split('/')[2]
//     const index = list.value.findIndex(item => item.id == id)
//     if (index > -1) {
//         list.value.splice(index, 1)
//         return {
//             code: 200,
//             message: '成功删除'
//         }
//     } else {
//         return {
//             code: 201,
//             message: '操作失败'
//         }
//     }
// })
//修改数据
// Mock.mock(/posts/, 'put', ({ body }) => {
//     let dataItem = JSON.parse(body);
//     const item = list.value.find((item) => item.id == dataItem.id)
//     if (item) {
//         for (const key in item) {
//             item[key] = dataItem[key]
//         }
//         return {
//             code: 200,
//             message: '成功修改'
//         }
//     } else {
//         return {
//             code: 201,
//             message: '操作失败'
//         }
//     }
// })