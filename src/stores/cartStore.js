import { defineStore } from "pinia"
import { computed, ref } from "vue"

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
  // 移除商品
  const delCart = async (skuId) => {
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx, 1)
  }

  // 计算属性
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
  }
}, {
  persist: true,
})