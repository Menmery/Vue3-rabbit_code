import http from "@/utils/http"

export const getBannerAPI = () => {
    return http({
        url: 'home/banner'
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

