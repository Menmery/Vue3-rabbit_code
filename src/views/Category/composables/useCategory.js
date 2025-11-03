import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useRoute } from 'vue-router'
import { getTopCategoryAPI } from '@/apis/category'


export function useCategory() {
  // 请求数据
  const categoryData = ref({})
  const route = useRoute()

  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }

  onMounted(() => {
    getCategory()
  })

  // 路由参数变化 重新请求数据
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}