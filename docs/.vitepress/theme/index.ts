import DefaultTheme from 'vitepress/theme'
import HomeCustomContent from './components/HomeCustomContent.vue'
import './style.css'
import type { App } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    // 注册您首页使用的自定义组件
    app.component('HomeCustomContent', HomeCustomContent)
  }
}