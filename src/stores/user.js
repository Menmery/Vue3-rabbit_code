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

  // 清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
  {
    persist: true,
  })