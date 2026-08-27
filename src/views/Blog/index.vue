<template>
  <main class="blog-page">
    <Header />
    <section class="blog-empty" aria-labelledby="blog-title">
      <div class="site-container blog-empty__content" data-aos="fade-up">
        <p class="blog-empty__eyebrow">Notes in progress</p>
        <h1 id="blog-title">Writing is coming soon.</h1>
        <p>I’m focusing this space on useful lessons from building projects, learning new tools, and collaborating with good people.</p>
        <div class="blog-empty__actions">
          <router-link :to="{ name: 'Project' }">Explore projects</router-link>
          <router-link :to="{ name: 'Contact' }" class="blog-empty__secondary">Get in touch</router-link>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';

export default {
  name: 'Blog',
  components: {
    Footer,
    Header,
  },
};
</script>

<style scoped>
.blog-empty {
  display: grid;
  min-height: 100svh;
  align-items: center;
  background: var(--color-night) url('../../assets/images/Home/old-black-room.jpg') center / cover no-repeat;
  color: var(--color-on-dark);
}

.blog-empty__content {
  max-width: 48rem;
  padding-top: var(--header-height);
}

.blog-empty__eyebrow {
  margin: 0 0 1rem;
  color: var(--color-accent);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.blog-empty h1 {
  max-width: 10ch;
  margin: 0;
  font-size: clamp(3rem, 8vw, 6rem);
  letter-spacing: -0.08em;
  line-height: 0.9;
}

.blog-empty p:not(.blog-empty__eyebrow) {
  max-width: 34rem;
  margin: 1.4rem 0 0;
  color: rgba(249, 250, 251, 0.75);
  font-size: 1.1rem;
  line-height: 1.7;
}

.blog-empty__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.blog-empty__actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.7rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--color-accent);
  color: var(--color-ink);
  font-size: 0.9rem;
  font-weight: 900;
  text-decoration: none;
}

.blog-empty__actions .blog-empty__secondary {
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: transparent;
  color: var(--color-on-dark);
}
</style>
