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
  title: "UNNC-FABLAB 2025-2",
  description: "Explore the infinite possibilities of digital manufacturing",
  base: '/2025-2-xiangdong/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    // 添加自定义CSS
    ['style', {}, `
      /* 设置英雄区域为背景图 */
      .home-hero {
        position: relative;
        background-image: url('/logo-dark.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fff;
      }

      /* 添加半透明遮罩层提高文字可读性 */
      .home-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }

      /* 确保文字在遮罩层上方 */
      .home-hero .vp-hero-info {
        position: relative;
        z-index: 2;
        width: 100%;
      }

      /* 居中对齐标题和副标题 */
      .vp-hero h1 {
        text-align: center !important;
        margin: 0 auto !important;
        width: 100% !important;
      }

      .vp-hero .vp-description {
        text-align: center !important;
        margin: 1rem auto !important;
        max-width: 600px !important;
        width: 100% !important;
      }

      /* 响应式调整 */
      @media (max-width: 768px) {
        .home-hero {
          min-height: 400px;
          padding: 2rem 1rem;
        }
      }

      @media (max-width: 480px) {
        .home-hero {
          min-height: 300px;
          padding: 1.5rem 1rem;
        }
      }
    `]
  ],

  themeConfig: {
    // 1. 补充了导航栏 (nav) 配置
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Work',
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

    // 4. 保留原有的页脚、搜索等配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} UNNC-FABLAB`
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