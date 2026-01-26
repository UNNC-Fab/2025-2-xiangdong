---
layout: home

hero:
  name: "UNNC-FABLAB 2025-2"
  tagline: Explore the infinite possibilities of digital manufacturing
  # 移除原有的image配置，改为在CSS中设置背景图
  actions: []

features:
  - title: Digital Fabrication
    details: Transform ideas into reality using advanced technologies like laser cutting and 3D printing
  - title: Open Source Hardware
    details: Develop smart device prototypes based on Arduino, Raspberry Pi and other platforms
  - title: Artificial Intelligence
    details: Integrate NVIDIA technology for computer vision and machine learning applications
  - title: Open Source Licensing
    details: Understand the open source licenses and contribution guidelines for our projects
  - title: Innovative Thinking
    details: Cultivate innovative problem-solving methods and design thinking approaches
  - title: Community Collaboration
    details: Join the global maker community to share knowledge and experiences
---

<style>
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
</style>

<HomeCustomContent />