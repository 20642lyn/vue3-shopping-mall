import mockRequests from '@/mock/mockRequests'

// mock 接口函数
export const reqgetBannerList = function () {
    return mockRequests.get('/banner');
}
export const resgetBannerList = function (body) {
    return mockRequests.post(
        '/banner',
        body
    )
}
