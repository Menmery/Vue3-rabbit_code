// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 图片懒加载
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令所绑定的元素
        // binding: binding.value 指令等号右边的值
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              el.src = binding.value
              // 加载完图片后停止监听
              stop()
            }
          }
        )
      }
    })
  }
}