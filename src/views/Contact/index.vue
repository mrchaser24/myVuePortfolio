<template>
  <main class="contact-page">
    <Header />

    <section class="contact-hero" aria-labelledby="contact-title">
      <div class="contact-hero__overlay"></div>
      <div class="site-container contact-hero__content" data-aos="fade-up">
        <p class="contact-hero__eyebrow">Contact</p>
        <h1 id="contact-title">Let’s build the next good idea.</h1>
        <p>Have a project, a collaboration, or a question? Reach out through the details below and I’ll get back to you.</p>
      </div>
    </section>

    <section class="contact-details section" aria-label="Contact details">
      <div class="site-container">
        <div class="contact-details__grid">
          <a class="contact-card" href="mailto:chase.hermosisima@gmail.com" data-aos="fade-up">
            <span class="contact-card__icon"><i class="fas fa-envelope" aria-hidden="true"></i></span>
            <span class="contact-card__label">Email</span>
            <strong>chase.hermosisima@gmail.com</strong>
            <span class="contact-card__action">Send an email <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
          </a>

          <a class="contact-card" href="tel:+639696474112" data-aos="fade-up" data-aos-delay="80">
            <span class="contact-card__icon"><i class="fas fa-phone" aria-hidden="true"></i></span>
            <span class="contact-card__label">Phone</span>
            <strong>(+63) 969-647-4112</strong>
            <span class="contact-card__action">Call Chase <i class="fas fa-arrow-right" aria-hidden="true"></i></span>
          </a>

          <div class="contact-card" data-aos="fade-up" data-aos-delay="160">
            <span class="contact-card__icon"><i class="fas fa-location-dot" aria-hidden="true"></i></span>
            <span class="contact-card__label">Based in</span>
            <strong>Quezon City, Philippines</strong>
            <span class="contact-card__action">Available for remote collaboration</span>
          </div>
        </div>

        <div class="contact-social" data-aos="fade-up">
          <div>
            <p class="contact-social__eyebrow">Find me online</p>
            <h2>Follow the work and stay in touch.</h2>
          </div>
          <div class="contact-social__links" aria-label="Social profiles">
            <a href="https://chaseweb101.netlify.app/" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe" aria-hidden="true"></i><span>Portfolio</span></a>
            <a href="https://github.com/mrchaser24" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/chase-arcus-hermosisima-2a13141ab/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in" aria-hidden="true"></i><span>LinkedIn</span></a>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="site-container contact-cta__inner" data-aos="fade-up">
        <div>
          <p>Prefer email?</p>
          <h2>Start with a simple hello.</h2>
        </div>
        <a class="contact-cta__button" href="mailto:chase.hermosisima@gmail.com?subject=Project%20inquiry%20for%20Chase">Write an email <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';

export default {
  name: 'Contact',
  components: {
    Footer,
    Header,
  },
};
</script>

<style scoped>
.contact-page {
  background: var(--color-surface);
}

.contact-hero {
  position: relative;
  display: grid;
  min-height: min(35rem, 70svh);
  align-items: end;
  overflow: hidden;
  background: var(--color-night) url('../../assets/images/contact/cityscape-view1980.jpg') center / cover no-repeat;
  color: var(--color-on-dark);
}

.contact-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(10, 12, 16, 0.96), rgba(10, 12, 16, 0.5));
}

.contact-hero__content {
  position: relative;
  z-index: 1;
  max-width: 53rem;
  padding-top: calc(var(--header-height) + 3rem);
  padding-bottom: clamp(3.5rem, 8vw, 6rem);
}

.contact-hero__eyebrow,
.contact-social__eyebrow,
.contact-cta p {
  margin: 0 0 1rem;
  color: var(--color-accent);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.contact-hero h1 {
  max-width: 11ch;
  margin: 0;
  font-size: clamp(3rem, 8vw, 6.8rem);
  letter-spacing: -0.08em;
  line-height: 0.9;
}

.contact-hero p:not(.contact-hero__eyebrow) {
  max-width: 38rem;
  margin: 1.3rem 0 0;
  color: rgba(249, 250, 251, 0.76);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
}

.section {
  padding: clamp(4rem, 9vw, 8rem) 0;
}

.contact-details__grid {
  display: grid;
  gap: 1rem;
}

.contact-card {
  display: flex;
  min-height: 16rem;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(1.4rem, 3vw, 2rem);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background: var(--color-paper);
  box-shadow: 4px 4px 0 rgba(25, 28, 33, 0.1);
  color: var(--color-text);
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

a.contact-card:hover {
  box-shadow: var(--shadow-offset);
  transform: translate(-4px, -4px);
}

.contact-card__icon {
  display: grid;
  width: 2.8rem;
  height: 2.8rem;
  margin-bottom: auto;
  place-items: center;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-ink);
}

.contact-card__label {
  margin-top: 1.5rem;
  color: var(--color-text-muted);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-card strong {
  margin-top: 0.45rem;
  font-size: clamp(1.15rem, 2.3vw, 1.5rem);
  letter-spacing: -0.04em;
  line-height: 1.15;
  overflow-wrap: anywhere;
}

.contact-card__action {
  margin-top: 1.25rem;
  color: var(--color-text-muted);
  font-size: 0.86rem;
  font-weight: 700;
}

.contact-social {
  display: grid;
  gap: 2rem;
  margin-top: clamp(4rem, 9vw, 7rem);
  padding: clamp(1.5rem, 5vw, 4rem);
  border-radius: var(--radius-lg);
  background: var(--color-night);
  color: var(--color-on-dark);
}

.contact-social h2 {
  max-width: 15ch;
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.8rem);
  letter-spacing: -0.07em;
  line-height: 0.96;
}

.contact-social__links {
  display: grid;
  gap: 0.7rem;
  align-content: center;
}

.contact-social__links a {
  display: flex;
  gap: 0.85rem;
  align-items: center;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-sm);
  color: var(--color-on-dark);
  font-weight: 800;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.contact-social__links a:hover {
  background: var(--color-accent);
  color: var(--color-ink);
  transform: translateX(4px);
}

.contact-social__links i {
  width: 1.2rem;
  text-align: center;
}

.contact-cta {
  padding: clamp(3.5rem, 7vw, 6rem) 0;
  background: var(--color-accent);
}

.contact-cta__inner {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: space-between;
}

.contact-cta p {
  color: var(--color-text-muted);
}

.contact-cta h2 {
  margin: 0;
  color: var(--color-ink);
  font-size: clamp(2rem, 5vw, 3.8rem);
  letter-spacing: -0.07em;
  line-height: 0.95;
}

.contact-cta__button {
  display: inline-flex;
  gap: 0.6rem;
  align-items: center;
  flex: 0 0 auto;
  min-height: 3.1rem;
  padding: 0.75rem 1.1rem;
  border-radius: var(--radius-sm);
  background: var(--color-night);
  color: var(--color-on-dark);
  font-size: 0.9rem;
  font-weight: 900;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.contact-cta__button:hover {
  box-shadow: var(--shadow-offset-dark);
  transform: translate(-4px, -4px);
}

@media (min-width: 45rem) {
  .contact-details__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .contact-social {
    grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.7fr);
    align-items: center;
  }
}

@media (max-width: 34rem) {
  .contact-cta__inner {
    flex-direction: column;
  }

  .contact-cta__button {
    width: 100%;
  }
}
</style>
