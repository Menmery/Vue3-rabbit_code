import { defineStore } from "pinia"
import { ref } from "vue"
import { loginAPI } from "@/apis/user.js"

export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userInfo = ref({})

  // 获取用户信息
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }

  return {
    userInfo,
    getUserInfo
  }
})