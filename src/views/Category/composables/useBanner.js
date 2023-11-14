//封装轮播图函数
import { ref, onMounted } from "vue"
export function useBanner(id) {
  const bannerList = ref([])
  bannerList.value=null
  switch (id) {
    case 1:
      bannerList.value = [
        "https://img.zcool.cn/community/0154bc590440a0a801214550203bd3.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/0123515d529387a8012187f4425987.jpg@2o.jpg",
        "https://t00img.yangkeduo.com/goods/images/images/2019-09-14/c1701ffe-5eca-4a13-b0fe-7199ce9b250e.jpg"
      ];
      break;
    case 2:
      bannerList.value = [
        "https://img.zcool.cn/community/0154bc590440a0a801214550203bd3.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/0123515d529387a8012187f4425987.jpg@2o.jpg",
        "https://t00img.yangkeduo.com/goods/images/images/2019-09-14/c1701ffe-5eca-4a13-b0fe-7199ce9b250e.jpg"
      ];
      break;
    case 3:
      bannerList.value = [
        "https://img.zcool.cn/community/0154bc590440a0a801214550203bd3.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/0123515d529387a8012187f4425987.jpg@2o.jpg",
        "https://t00img.yangkeduo.com/goods/images/images/2019-09-14/c1701ffe-5eca-4a13-b0fe-7199ce9b250e.jpg"
      ];
      break;
    case 4:
      bannerList.value = [
        "https://img.zcool.cn/community/0154bc590440a0a801214550203bd3.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/0123515d529387a8012187f4425987.jpg@2o.jpg",
        "https://t00img.yangkeduo.com/goods/images/images/2019-09-14/c1701ffe-5eca-4a13-b0fe-7199ce9b250e.jpg"
      ];
      break;
    case 5:
      bannerList.value = [
        "https://img.zcool.cn/community/0154bc590440a0a801214550203bd3.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/0123515d529387a8012187f4425987.jpg@2o.jpg",
        "https://t00img.yangkeduo.com/goods/images/images/2019-09-14/c1701ffe-5eca-4a13-b0fe-7199ce9b250e.jpg"
      ];
      break;
    case 6:
      bannerList.value = [
        "https://img.zcool.cn/community/0154bc590440a0a801214550203bd3.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/0123515d529387a8012187f4425987.jpg@2o.jpg",
        "https://t00img.yangkeduo.com/goods/images/images/2019-09-14/c1701ffe-5eca-4a13-b0fe-7199ce9b250e.jpg"
      ];
      break;
    case 7:
      bannerList.value = [
        "https://img.zcool.cn/community/0154bc590440a0a801214550203bd3.jpg@1280w_1l_2o_100sh.jpg",
        "https://img.zcool.cn/community/0123515d529387a8012187f4425987.jpg@2o.jpg",
        "https://t00img.yangkeduo.com/goods/images/images/2019-09-14/c1701ffe-5eca-4a13-b0fe-7199ce9b250e.jpg"
      ];
      break;
  }
return {
  bannerList
}
}