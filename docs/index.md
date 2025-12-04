---
layout: home

hero:
  name: "My Fablab Project"
  text: "Innovation · Creation · Future"
  tagline: Explore the infinite possibilities of digital manufacturing
  image:
    src: /logo-dark.png
    alt: Fablab Project
  actions:
    - theme: brand
      text: 🚀 Explore
      link: /markdown-examples
    - theme: alt
      text: ⚡ Get Started
      link: /api-examples

features:
  - icon: 🛠️
    title: Digital Fabrication
    details: Transform ideas into reality using advanced technologies like laser cutting and 3D printing
  - icon: 🔌
    title: Open Source Hardware
    details: Develop smart device prototypes based on Arduino, Raspberry Pi and other platforms
  - icon: 🤖
    title: Artificial Intelligence
    details: Integrate NVIDIA technology for computer vision and machine learning applications
  - icon: 📄
    title: Open Source Licensing
    details: Understand the open source licenses and contribution guidelines for our projects
  - icon: 💡
    title: Innovative Thinking
    details: Cultivate innovative problem-solving methods and design thinking approaches
  - icon: 🌟
    title: Community Collaboration
    details: Join the global maker community to share knowledge and experiences
---

<div class="home-custom">

## 🎯 Project Highlights

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">🔥</div>
    <h3>Cutting-Edge Technology</h3>
    <p>Integrating the latest digital fabrication technologies with open source hardware platforms</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🚀</div>
    <h3>Rapid Prototyping</h3>
    <p>Fast iterative development process from concept to physical product</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🌍</div>
    <h3>Global Community</h3>
    <p>Connect with makers worldwide and share knowledge resources</p>
  </div>
</div>

## 🛠️ Featured Technologies

<div class="tech-grid">
  <div class="tech-item">
    <span class="tech-icon">🖨️</span>
    <span class="tech-name">3D Printing</span>
  </div>
  <div class="tech-item">
    <span class="tech-icon">🔥</span>
    <span class="tech-name">Laser Cutting</span>
  </div>
  <div class="tech-item">
    <span class="tech-icon">🔌</span>
    <span class="tech-name">Arduino</span>
  </div>
  <div class="tech-item">
    <span class="tech-icon">🤖</span>
    <span class="tech-name">NVIDIA</span>
  </div>
  <div class="tech-item">
    <span class="tech-icon">📐</span>
    <span class="tech-name">Fusion 360</span>
  </div>
  <div class="tech-item">
    <span class="tech-icon">⚡</span>
    <span class="tech-name">Raspberry Pi</span>
  </div>
</div>

</div>

<style>
.home-custom {
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  font-weight: 600;
}

.feature-card p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 1rem;
}

/* Technology Grid Styles */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.tech-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.tech-item:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 10px 25px rgba(100, 108, 255, 0.1);
}

.tech-icon {
  font-size: 2.5rem;
  display: block;
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

/* Animation Classes */
.will-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Design */
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
  
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .tech-item {
    padding: 1.25rem 0.75rem;
  }
  
  .tech-icon {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .tech-item {
    padding: 1rem 0.5rem;
  }
  
  .tech-icon {
    font-size: 1.75rem;
  }
  
  .tech-name {
    font-size: 0.8rem;
  }
}

/* Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card, .tech-item {
  animation: fadeInUp 0.6s ease-out;
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Add scroll animations for custom elements
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

  // Observe all feature cards and tech items
  const elementsToAnimate = [
    ...document.querySelectorAll('.feature-card'),
    ...document.querySelectorAll('.tech-item')
  ]
  
  elementsToAnimate.forEach((element, index) => {
    element.classList.add('will-animate')
    element.style.transitionDelay = `${index * 0.1}s`
    observer.observe(element)
  })
})
</script>