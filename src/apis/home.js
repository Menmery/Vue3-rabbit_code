import http from "@/utils/http"

// 设置默认参数为空对象
export const getBannerAPI = (params = {}) => {
    // 设置默认数据为1
    const { distributionSite = '1' } = params
    return http({
        url: 'home/banner',
        params: {
            distributionSite
        }
    })
}

// 新鲜好物接口
export const findNewAPI = () => {
    return http({
        url: '/home/new'
    })
}

// 人气推荐接口
export const findHotAPI = () => {
    return http({
        url: '/home/hot'
    })
}

// 产品列表
export const productAPI = () => {
    return http({
        url: '/home/goods'
    })
}