import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
// vue3中在setup外不能使用useRouter
import router from '@/router'
import 'element-plus/theme-chalk/el-message.css'

// 创建axios实例
const http = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 100000
})

// 请求拦截器
http.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// 响应拦截器
http.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  ElMessage({ type: 'warning', message: e?.response?.data.message })
  if (e.response?.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})

export default http