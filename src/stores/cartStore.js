import { defineStore } from "pinia"
import { ref } from "vue"

export const useCartStore = defineStore('cart', () => {
  // 购物车数据
  const cartList = ref([])
  // 添加商品到购物车
  const addCart = (goods) => {
    // 已添加的 count ++
    // 未添加的 push 到数组
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      item.count++
    } else {
      cartList.value.push(goods)
    }
  }

  return {
    cartList,
    addCart
  }
}, {
  persist: true,
})