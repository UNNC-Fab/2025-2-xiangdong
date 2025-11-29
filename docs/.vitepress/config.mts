import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/2025-2-xiangdong/',
  
  // 引入自定义样式和脚本
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    ['script', { src: '/custom.js', defer: '' }],
    // 引入字体和图标库
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600;700&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }],
    // 引入粒子效果库
    ['script', { src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'OpenSource-LIcense', link: '/OpenSource-LIcense' },
          { text: 'NVIDIA', link: '/NVIDIA' },
          { text: 'Arduino', link: '/Arduino' },
          {text: 'Fusion 360', link: '/Fusion-360' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})