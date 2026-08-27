<template>
  <footer class="site-footer">
    <div class="site-container">
      <div class="site-footer__grid">
        <div class="site-footer__intro">
          <router-link class="site-footer__brand" :to="{ name: 'Home' }">CHASE</router-link>
          <p>Software engineer building practical, interactive experiences from Quezon City, Philippines.</p>
        </div>

        <div class="site-footer__group">
          <h2>Explore</h2>
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'Project' }">Projects</router-link>
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </div>

        <div class="site-footer__group">
          <h2>Connect</h2>
          <a href="mailto:chase.hermosisima@gmail.com">Email Chase</a>
          <a href="https://chaseweb101.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          <a href="https://github.com/mrchaser24" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/chase-arcus-hermosisima-2a13141ab/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>© {{ currentYear }} Chase Arcos Hermosisima. All rights reserved.</p>
        <a href="mailto:chase.hermosisima@gmail.com">Let’s work together <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.site-footer {
  padding: clamp(3rem, 7vw, 6rem) 0 1.25rem;
  background: var(--color-night);
  color: var(--color-on-dark);
}

.site-footer__grid {
  display: grid;
  gap: 2.5rem;
  padding-bottom: 3rem;
}

.site-footer__intro {
  max-width: 24rem;
}

.site-footer__brand {
  position: relative;
  z-index: 0;
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--color-on-dark);
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 900;
  letter-spacing: -0.1em;
  line-height: 0.9;
  text-decoration: none;
}

.site-footer__brand::before {
  position: absolute;
  z-index: -1;
  right: -0.15rem;
  bottom: 0.25rem;
  left: -0.35rem;
  height: 0.7rem;
  background: var(--color-accent);
  box-shadow: 6px 6px 0 rgba(255, 255, 255, 0.22);
  content: '';
  transform: skewX(-14deg);
}

.site-footer p {
  margin: 0;
  color: rgba(249, 250, 251, 0.65);
  line-height: 1.7;
}

.site-footer__group {
  display: grid;
  align-content: start;
  gap: 0.65rem;
}

.site-footer__group h2 {
  margin: 0 0 0.45rem;
  color: var(--color-accent);
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.site-footer__group a,
.site-footer__bottom a {
  color: rgba(249, 250, 251, 0.78);
  text-decoration: none;
}

.site-footer__group a:hover,
.site-footer__bottom a:hover {
  color: var(--color-accent);
}

.site-footer__bottom {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.82rem;
}

.site-footer__bottom a {
  flex: 0 0 auto;
  font-weight: 700;
}

@media (min-width: 44rem) {
  .site-footer__grid {
    grid-template-columns: minmax(18rem, 1.8fr) 1fr 1fr;
  }
}

@media (max-width: 34rem) {
  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
