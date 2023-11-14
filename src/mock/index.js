import Mock from 'mockjs'
// import list from './list.json'
import banner from '@/mock/banner' assert{type: 'JSON'};
import { ref } from 'vue'
export default function getMockDate() {
    // 导航栏数据
    const categoryList=[]
    categoryList.push(Mock.mock({
        listdate: [
            {
                id: 1005002,
                name: '美食',

            },
            {
                id: 1010000,
                name: '服饰',

            },
            {
                id: 1011000,
                name: '母婴',

            },
            {
                id: 1013001,
                name: '个护',

            },
            {
                id: 1043000,
                name: '数码',

            },
            {
                id: 109243029,
                name: '运动',

            }
        ]
    }
    ))
    return {
        categoryList
    }
}

// 拦截请求
// Mock.mock('/categoryList', 'get', {
//     code: 1,
//     data: categoryList
// })


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


// // 随机生成一个对象
// var data =Mock.mock({
//     id:'@id',
//     username:'@cname',
//     data:'@data(yyyy-MM-dd)',
//     description:'@pargraph',
//     email:'@email',
//     'age|18-40':0
// })
