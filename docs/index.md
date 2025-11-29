---
layout: home

hero:
  name: "My Fablab Project"
  text: "创新 · 创造 · 未来"
  tagline: 探索数字制造与开源硬件的无限可能
  image:
    src: /hero-image.png
    alt: Fablab Project
  actions:
    - theme: brand
      text: 🚀 开始探索
      link: /markdown-examples
    - theme: alt
      text: ⚡ 快速开始
      link: /api-examples

features:
  - icon: 🛠️
    title: 数字制造
    details: 使用激光切割、3D打印等先进技术将创意变为现实
  - icon: 🔌
    title: 开源硬件
    details: 基于Arduino、Raspberry Pi等平台开发智能设备原型
  - icon: 🤖
    title: 人工智能
    details: 集成NVIDIA技术实现计算机视觉和机器学习应用
  - icon: 📄
    title: 开源协议
    details: 了解项目使用的开源许可证和贡献指南
  - icon: 💡
    title: 创新思维
    details: 培养解决问题的创新方法和设计思维
  - icon: 🌟
    title: 社区协作
    details: 加入全球创客社区，分享知识与经验
---

<div class="home-custom">

## 🎯 项目亮点

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">🔥</div>
    <h3>前沿技术</h3>
    <p>融合最新数字制造技术与开源硬件平台</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🚀</div>
    <h3>快速原型</h3>
    <p>从概念到实物的快速迭代开发流程</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🌍</div>
    <h3>全球社区</h3>
    <p>连接全球创客，共享知识资源</p>
  </div>
</div>

</div>

<style>
.home-custom {
  padding: 4rem 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(100, 108, 255, 0.1), transparent);
  transition: left 0.6s;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 20px 40px rgba(100, 108, 255, 0.15);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-card h3 {
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.feature-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 1rem;
}

/* 动画类 */
.will-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home-custom {
    padding: 2rem 1rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 为自定义元素添加滚动动画
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

  // 观察所有特性卡片
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.classList.add('will-animate')
    card.style.transitionDelay = `${index * 0.1}s`
    observer.observe(card)
  })
})
</script>
