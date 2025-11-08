import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'
import { useUserStore } from '@/stores/user.js'

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  // 购物车数据
  const cartList = ref([])

  // 获取最新购物车数据
  const getNewCartList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }

  // 添加商品到购物车
  const addCart = async (goods) => {
    // 判断是否登录
    if (isLogin.value) {
      const { skuId, count } = goods
      await insertCartAPI({ skuId, count })
      getNewCartList()
    } else {
      // 已添加的 count ++
      // 未添加的 push 到数组
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }
  }
  // 移除商品
  const delCart = async (skuId) => {
    // 判断是否登录
    if (isLogin.value) {
      await delCartAPI([skuId])
      getNewCartList()
    } else {
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }

  // 清空购物车
  const clearCart = () => {
    cartList.value = []
  }

  // 单选功能
  const singleCheck = (skuId, selected) => {
    // find返回的是对象的引用，所以直接修改selected属性
    cartList.value.find((item) => item.skuId === skuId).selected = selected
  }

  // 全选功能
  const allCheck = (selected) => {
    // 把cartList中的每一项的selected都设置为当前的全选框状态
    cartList.value.forEach(item => item.selected = selected)
  }

  // 已选择的数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))

  // 总价格
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  // 计算属性
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  const isAll = computed(() => cartList.value.every((item) => item.selected))

  return {
    cartList,
    addCart,
    delCart,
    singleCheck,
    allCount,
    allPrice,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice,
    clearCart
  }
}, {
  persist: true,
})