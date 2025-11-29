// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Fablab Project",
  description: "A VitePress Site with Stunning Animations",
  base: '/2025-2-xiangdong/',
  
  // 添加头部元数据
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { 
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono&display=swap', 
      rel: 'stylesheet' 
    }],
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' 
    }],
    ['script', { 
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
    }],
    ['script', { 
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
    }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
  ],

  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },

    nav: [
      { 
        text: '🏠 Home', 
        link: '/',
        activeMatch: '^/$'
      },
      { 
        text: '🚀 Examples', 
        link: '/markdown-examples',
        activeMatch: '^/(markdown-examples|api-examples)/'
      },
      {
        text: '🛠️ Tools',
        items: [
          { text: '🤖 NVIDIA', link: '/NVIDIA' },
          { text: '🔌 Arduino', link: '/Arduino' },
          { text: '📐 Fusion 360', link: '/Fusion-360' },
          { text: '⚖️ OpenSource License', link: '/OpenSource-LIcense' }
        ]
      }
    ],

    // 把 sidebar 声明为 any，避开 TS 的字面量限制
    sidebar: [
      {
        text: '📚 Documentation',
        collapsible: true,
        collapsed: false,
        items: [
          { 
            text: '🎯 Markdown Examples', 
            link: '/markdown-examples',
          },
          { 
            text: '⚡ Runtime API Examples', 
            link: '/api-examples',
          }
        ]
      },
      {
        text: '🔧 Tools & Technologies',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '🤖 NVIDIA', link: '/NVIDIA' },
          { text: '🔌 Arduino', link: '/Arduino' },
          { text: '📐 Fusion 360', link: '/Fusion-360' },
          { text: '⚖️ OpenSource License', link: '/OpenSource-LIcense' }
        ]
      }
    ] as any,

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/vuejs/vitepress',
        ariaLabel: 'GitHub Repository'
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/vuejs',
        ariaLabel: 'Twitter Account'
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023-${new Date().getFullYear()} My Fablab Project`
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    docFooter: {
      prev: '⬅️ Previous page',
      next: 'Next page ➡️'
    },

    returnToTop: true,
  } as any,

  appearance: 'dark',

  markdown: {
    theme: {
      light: 'min-light',
      dark: 'nord'
    },
    config: (md) => {
      // 可以添加自定义 markdown 插件
    }
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./.vitepress/theme/styles/variables.scss";`
        }
      }
    }
  },

  cleanUrls: true,
  lastUpdated: true,
})