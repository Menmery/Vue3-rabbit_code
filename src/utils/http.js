import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

// 创建axios实例
const http = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 请求拦截器
http.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// 响应拦截器
http.interceptors.response.use(res => res.data, e => {
  ElMessage({ type: 'warning', message: e.response.data.message })
  return Promise.reject(e)
})

export default http