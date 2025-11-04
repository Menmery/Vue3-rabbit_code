import http from '@/utils/http'

// 获取面包屑导航
export const getTopCategoryAPI = (id) => {
  return http({
    url: '/category',
    params: {
      id
    }
  })
}

// 获取二级面包屑导航数据
export const getCategoryFilterAPI = (id) => {
  return http({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

// 获取商品列表数据
export const getSubCategoryAPI = (data) => {
  return http({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}