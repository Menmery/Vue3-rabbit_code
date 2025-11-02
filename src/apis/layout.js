import http from "@/utils/http"

export const getCategoryAPI = () => {
  return http({
    url: '/home/category/head'
  })
}