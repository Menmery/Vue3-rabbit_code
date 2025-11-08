import http from '@/utils/http'

export const getCheckoutInfo = () => {
  return http({
    url: '/member/order/pre'
  })
}