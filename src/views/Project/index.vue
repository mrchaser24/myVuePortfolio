<template>
  <main class="projects-page">
    <Header />

    <section class="projects-hero" aria-labelledby="projects-title">
      <div class="projects-hero__overlay"></div>
      <div class="site-container projects-hero__content" data-aos="fade-up">
        <p class="projects-hero__eyebrow">Selected work</p>
        <h1 id="projects-title">Projects built for real-world movement.</h1>
        <p>Two examples of work focused on making digital experiences clearer, more useful, and easier to use.</p>
      </div>
    </section>

    <section class="projects-list section" aria-label="Project portfolio">
      <div class="site-container">
        <div class="projects-list__intro" data-aos="fade-up">
          <p class="eyebrow"><span>Portfolio</span></p>
          <h2>Recent highlights</h2>
        </div>

        <article v-for="project in getProjectList" :key="project.id" class="project-card" data-aos="fade-up">
          <div class="project-card__image-wrap">
            <img :src="project.image" :alt="project.imageAlt" />
          </div>
          <div class="project-card__content">
            <p class="project-card__index">0{{ project.id }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <ul class="project-card__stack" aria-label="Technology stack">
              <li v-for="tool in project.stack" :key="tool">{{ tool }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section class="projects-cta">
      <div class="site-container projects-cta__inner">
        <div>
          <p>Have a project in mind?</p>
          <h2>Let’s talk about it.</h2>
        </div>
        <router-link class="projects-cta__link" :to="{ name: 'Contact' }">Get in touch <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';

export default {
  name: 'Project',
  components: {
    Footer,
    Header,
  },
  computed: {
    ...mapGetters(['getProjectList']),
  },
};
</script>

<style scoped>
.projects-page {
  background: var(--color-surface);
}

.projects-hero {
  position: relative;
  display: grid;
  min-height: min(36rem, 74svh);
  align-items: end;
  overflow: hidden;
  background: var(--color-night) url('../../assets/images/Project/BackGround/Black-And-White-Laptop-Keyboards.jpg') center / cover no-repeat;
  color: var(--color-on-dark);
}

.projects-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, rgba(12, 14, 18, 0.96), rgba(12, 14, 18, 0.55));
}

.projects-hero__content {
  position: relative;
  z-index: 1;
  max-width: 52rem;
  padding-top: calc(var(--header-height) + 3rem);
  padding-bottom: clamp(3.5rem, 8vw, 6rem);
}

.projects-hero__eyebrow {
  display: inline-block;
  margin: 0 0 1rem;
  padding: 0.4rem 0.7rem;
  background: var(--color-accent);
  color: var(--color-ink);
  font-size: 0.73rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  transform: skewX(-8deg);
}

.projects-hero h1 {
  max-width: 12ch;
  margin: 0;
  font-size: clamp(3rem, 8vw, 6.8rem);
  letter-spacing: -0.08em;
  line-height: 0.9;
}

.projects-hero p:not(.projects-hero__eyebrow) {
  max-width: 38rem;
  margin: 1.3rem 0 0;
  color: rgba(249, 250, 251, 0.75);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
}

.section {
  padding: clamp(4rem, 9vw, 8rem) 0;
}

.projects-list__intro {
  margin-bottom: clamp(2rem, 5vw, 4rem);
}

.projects-list__intro h2 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4.3rem);
  letter-spacing: -0.07em;
  line-height: 0.95;
}

.project-card {
  display: grid;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-lg);
  background: var(--color-paper);
  box-shadow: 5px 5px 0 rgba(25, 28, 33, 0.12);
}

.project-card__image-wrap {
  min-height: 17rem;
  overflow: hidden;
  background: var(--color-night-muted);
}

.project-card__image-wrap img {
  width: 100%;
  height: 100%;
  min-height: 17rem;
  object-fit: cover;
  transition: transform 300ms ease;
}

.project-card:hover .project-card__image-wrap img {
  transform: scale(1.04);
}

.project-card__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(1.5rem, 4vw, 3.5rem);
}

.project-card__index {
  margin: 0 0 1.5rem;
  color: var(--color-text-muted);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.13em;
}

.project-card h3 {
  max-width: 15ch;
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: -0.065em;
  line-height: 1;
}

.project-card__content > p:not(.project-card__index) {
  max-width: 34rem;
  margin: 1rem 0 0;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem 0 0;
  padding: 0;
  list-style: none;
}

.project-card__stack li {
  padding: 0.4rem 0.65rem;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  background: var(--color-surface);
  font-size: 0.78rem;
  font-weight: 800;
}

.projects-cta {
  padding: clamp(3.5rem, 7vw, 6rem) 0;
  background: var(--color-night);
  color: var(--color-on-dark);
}

.projects-cta__inner {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
}

.projects-cta p {
  margin: 0 0 0.5rem;
  color: var(--color-accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.projects-cta h2 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.8rem);
  letter-spacing: -0.07em;
  line-height: 0.95;
}

.projects-cta__link {
  display: inline-flex;
  gap: 0.6rem;
  align-items: center;
  flex: 0 0 auto;
  min-height: 3.1rem;
  padding: 0.75rem 1.1rem;
  border-radius: var(--radius-sm);
  background: var(--color-accent);
  color: var(--color-ink);
  font-size: 0.9rem;
  font-weight: 900;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.projects-cta__link:hover {
  box-shadow: var(--shadow-offset-dark);
  transform: translate(-4px, -4px);
}

@media (min-width: 48rem) {
  .project-card {
    grid-template-columns: minmax(16rem, 0.85fr) minmax(0, 1fr);
    min-height: 26rem;
  }

  .project-card:nth-of-type(odd) .project-card__image-wrap {
    order: 2;
  }

  .project-card:nth-of-type(odd) .project-card__content {
    order: 1;
  }

  .project-card__image-wrap,
  .project-card__image-wrap img {
    min-height: 100%;
  }
}

@media (max-width: 34rem) {
  .projects-cta__inner {
    flex-direction: column;
  }

  .projects-cta__link {
    width: 100%;
  }
}
</style>
