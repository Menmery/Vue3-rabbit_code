import http from "@/utils/http"

export const getBannerAPI = () => {
    return http({
        url: 'home/banner'
    })
}

export const findNewAPI = () => {
    return http({
        url: '/home/new'
    })
}