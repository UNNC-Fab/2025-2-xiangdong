// .vitepress/config.mts
import { defineConfig } from 'vitepress'

// 无图标的工具列表
const ALL_TOOLS = [
  { text: 'Project Management', link: '/Project Management' },
  { text: 'Arduino', link: '/Arduino' },
  { text: 'Fusion 360', link: '/Fusion-360' },
  { text: '3D Printer', link: '/3D-Printer' },
  { text: 'Laser Cutting', link: '/Laser-Cutting' },
  { text: 'Modeling Casting', link: '/Modeling-Casting' },
  { text: 'Interface Application', link: '/Interface-application' },
  { text: 'Electronic Design', link: '/Electronic-Design' },
  { text: 'PCB Manufacture', link: '/PCB-Manufacture' },
  { text: 'Final Presentation', link: '/Final presentation' },
  { text: 'NVIDIA', link: '/NVIDIA' },
  { text: 'OpenSource License', link: '/OpenSource-LIcense' }
]

export default defineConfig({
  title: "My Fablab Project",
  description: "A VitePress Site",
  base: '/2025-2-xiangdong/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  themeConfig: {
    // 1. 补充了导航栏 (nav) 配置
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Tools',
        items: ALL_TOOLS // 直接使用定义好的工具列表
      }
    ],

    // 2. 补充了侧边栏 (sidebar) 配置
    sidebar: {
      '/': [
        {
          text: 'Tools & Technologies',
          collapsed: false,
          items: ALL_TOOLS // 直接使用定义好的工具列表
        }
      ]
    },

    // 3. 保留原有的页脚、搜索等配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} My Fablab Project`
    },

    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    lastUpdated: { text: 'Last Updated' },
    editLink: {
      pattern: 'https://github.com/YOUR_USERNAME/YOUR_REPO/edit/main/docs/:path',
      text: 'Edit this page'
    }
  },

  appearance: 'dark',
  cleanUrls: true,
  lastUpdated: true
})