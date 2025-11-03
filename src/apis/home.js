import http from "@/utils/http";

export const getBannerAPI = () => {
    return http({
        url: 'home/banner'
    })
}