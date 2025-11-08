import http from '@/utils/http'

// 获取订单数据
export const getOrderAPI = (id) => {
  return http({
    url: `/member/order/${id}`
  })
}