// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// 声明全局 Window.gsap（简洁处理，避免到处 cast）
declare global {
  interface Window {
    gsap?: any
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里添加插槽内容
    })
  },
  setup() {
    const route = useRoute()
    
    onMounted(() => {
      // 初始化动画
      initAnimations()
      
      // 监听路由变化
      watch(() => route.path, () => {
        nextTick(() => {
          initScrollAnimations()
        })
      })
    })

    const initAnimations = () => {
      // 使用 GSAP 动画库
      if (typeof window !== 'undefined' && window.gsap) {
        // 可以在这里添加更复杂的动画
        console.log('GSAP loaded, ready for advanced animations')
      }
    }

    const initScrollAnimations = () => {
      // 初始化滚动触发动画
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, observerOptions)

      // 观察页面中的所有章节
      document.querySelectorAll('.vp-doc h2, .vp-doc h3, .vp-doc .custom-section').forEach(el => {
        el.classList.add('will-animate')
        observer.observe(el)
      })
    }
  }
}