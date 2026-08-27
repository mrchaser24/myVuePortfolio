<template>
  <main class="home-page">
    <Header />

    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__overlay"></div>
      <div class="hero__layout site-container">
        <div class="hero__content" data-aos="fade-up">
          <p class="hero__eyebrow">Hello, I’m</p>
          <h1 id="hero-title">Chase Arcos <span>Hermosisima.</span></h1>
          <p class="hero__role" aria-live="polite">{{ titles[currentTitle] }}</p>
          <p class="hero__summary">A senior analyst programmer from Quezon City building practical, interactive web experiences.</p>
          <div class="hero__actions">
            <a class="button button--accent" :href="resumePath" download="Chase-Resume-Updated.pdf">
              Download résumé <i class="fas fa-download" aria-hidden="true"></i>
            </a>
            <router-link class="button button--ghost" :to="{ name: 'Project' }">View projects</router-link>
          </div>
        </div>

        <div class="hero__portrait-wrap" data-aos="fade-left" data-aos-delay="120">
          <div class="hero__shape hero__shape--back"></div>
          <div class="hero__shape hero__shape--accent"></div>
          <img class="hero__portrait" src="../assets/images/Home/chase.jpg" alt="Chase Arcos Hermosisima" />
        </div>
      </div>
    </section>

    <section class="quote" aria-label="Personal philosophy">
      <div class="site-container">
        <blockquote>“If there’s a problem, then there’s always a solution.”</blockquote>
      </div>
    </section>

    <section class="about section section--dark" aria-labelledby="about-title">
      <div class="site-container about__grid">
        <SectionHeading
          id="about-title"
          eyebrow="About me"
          title="Curious by nature. Focused on useful work."
          description="From front-end interfaces to data modeling and DevOps, I build and support software that helps teams make better decisions."
          light
          data-aos="fade-up"
        />

        <div class="about__detail" data-aos="fade-up" data-aos-delay="100">
          <p>I’m <strong>Chase Arcos Hermosisima</strong>, a senior analyst programmer based in Quezon City, Philippines. My work spans front-end development, back-end services, quality assurance, and DevOps across agencies, startups, and enterprise teams.</p>
          <p>Outside of work, I stay curious through game development, Arduino and Python learning, airsoft, and Taekwondo.</p>
          <div class="about__brand">
            <img src="../assets/images/Home/CodiTiers.png" alt="CodiTiers logo" />
            <span>Game development collective</span>
          </div>
        </div>
      </div>
    </section>

    <section class="skills section" aria-labelledby="skills-title">
      <div class="site-container">
        <SectionHeading
          id="skills-title"
          eyebrow="Toolkit"
          title="Skills I bring to the build."
          description="A practical foundation across front-end development, server-side tools, and data-driven applications."
          data-aos="fade-up"
        />

        <ul class="skills__grid" aria-label="Technical skills">
          <li v-for="skill in getSkillList" :key="skill.id" class="skill-card" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
            <h3 class="skill-card__title">{{ skill.name }}</h3>
            <ul class="skill-card__items" aria-label="`${skill.name} skills`">
              <li v-for="item in skill.items" :key="item">{{ item }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section class="experience section" aria-labelledby="experience-title">
      <div class="site-container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I’ve worked and grown."
          description="A track record of building, optimizing, and supporting web applications across startups, agencies, and enterprise teams."
          data-aos="fade-up"
        />

        <ol class="timeline">
          <li v-for="exp in getExperienceList" :key="exp.id" class="timeline__item" data-aos="fade-up">
            <div class="timeline__marker" aria-hidden="true"></div>
            <article class="timeline__card">
              <header class="timeline__header">
                <div>
                  <h3>{{ exp.role }}</h3>
                  <p class="timeline__company">{{ exp.company }} · {{ exp.location }}</p>
                </div>
                <span class="timeline__period">{{ exp.period }}</span>
              </header>
              <ul class="timeline__highlights">
                <li v-for="highlight in exp.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </article>
          </li>
        </ol>
      </div>
    </section>

    <section class="profile section section--photo" aria-labelledby="profile-title">
      <div class="site-container profile__grid">
        <div class="profile__card" data-aos="fade-up">
          <p class="profile__eyebrow">A little more</p>
          <h2 id="profile-title">Let’s make something that matters.</h2>
          <p>I’m available to connect about web projects, thoughtful product ideas, and collaborative work.</p>
          <dl class="profile__details">
            <div><dt>Based in</dt><dd>38 Bignay Street, Quezon City, 1102</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:chase.hermosisima@gmail.com">chase.hermosisima@gmail.com</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+639696474112">(+63) 969-647-4112</a></dd></div>
          </dl>
          <div class="profile__socials" aria-label="Social profiles">
            <a href="https://chaseweb101.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Chase portfolio website"><i class="fas fa-globe" aria-hidden="true"></i></a>
            <a href="https://github.com/mrchaser24" target="_blank" rel="noopener noreferrer" aria-label="Chase on GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/chase-arcus-hermosisima-2a13141ab/" target="_blank" rel="noopener noreferrer" aria-label="Chase on LinkedIn"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
          </div>
          <p class="profile__hobbies"><strong>Beyond the code:</strong> Airsoft, game development, Arduino &amp; Python learning, and Taekwondo.</p>
        </div>

        <!-- <div class="profile__image-wrap" data-aos="fade-left" data-aos-delay="100">
          <img src="../assets/images/Home/person-me-3.jpg" alt="Portrait of Chase Arcos Hermosisima" />
        </div> -->
      </div>
    </section>

    <section class="contact-cta section" aria-labelledby="contact-cta-title">
      <div class="site-container contact-cta__inner" data-aos="fade-up">
        <div>
          <p class="contact-cta__eyebrow">Have an idea?</p>
          <h2 id="contact-cta-title">Let’s start a conversation.</h2>
        </div>
        <router-link class="button button--dark" :to="{ name: 'Contact' }">Contact me <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import SectionHeading from '../components/SectionHeading.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    SectionHeading,
  },
  data() {
    return {
      currentTitle: 0,
      titleTimer: null,
      titles: ['Senior Analyst Programmer', 'Fullstack Developer', 'Game Developer'],
    };
  },
  computed: {
    ...mapGetters(['getSkillList', 'getExperienceList']),
    resumePath() {
      return `${process.env.BASE_URL}cv/Chase%20Resume%20-%20Updated.pdf`;
    },
  },
  mounted() {
    this.titleTimer = window.setInterval(() => {
      this.currentTitle = (this.currentTitle + 1) % this.titles.length;
    }, 3200);
  },
  beforeDestroy() {
    window.clearInterval(this.titleTimer);
  },
};
</script>

<style scoped>
.home-page {
  background: var(--color-surface);
}

.hero {
  position: relative;
  display: grid;
  min-height: max(43rem, 100svh);
  overflow: hidden;
  background: #121419 url('../assets/images/Home/old-black-room.jpg') center / cover no-repeat;
  color: var(--color-on-dark);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(10, 11, 14, 0.94) 0%, rgba(10, 11, 14, 0.76) 45%, rgba(10, 11, 14, 0.2) 100%);
}

.hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.5rem;
  align-items: center;
  padding-top: calc(var(--header-height) + 3rem);
  padding-bottom: 3rem;
}

.hero__content {
  max-width: 42rem;
}

.hero__eyebrow,
.profile__eyebrow,
.contact-cta__eyebrow {
  display: inline-block;
  margin: 0 0 1rem;
  color: var(--color-accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 12ch;
  margin: 0;
  font-size: clamp(3.2rem, 10vw, 7.5rem);
  letter-spacing: -0.08em;
  line-height: 0.88;
}

.hero h1 span {
  color: var(--color-accent);
}

.hero__role {
  min-height: 1.4em;
  margin: 1.4rem 0 0;
  font-size: clamp(1.25rem, 3vw, 1.8rem);
  font-weight: 800;
}

.hero__summary {
  max-width: 34rem;
  margin: 1rem 0 0;
  color: rgba(249, 250, 251, 0.76);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
}

.button {
  display: inline-flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  min-height: 3.1rem;
  padding: 0.75rem 1.1rem;
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  font-weight: 800;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
}

.button:hover {
  box-shadow: var(--shadow-offset);
  transform: translate(-4px, -4px);
}

.button--accent {
  background: var(--color-accent);
  color: var(--color-ink);
}

.button--ghost {
  border-color: rgba(255, 255, 255, 0.55);
  color: var(--color-on-dark);
}

.button--ghost:hover {
  background: var(--color-paper);
  color: var(--color-ink);
}

.button--dark {
  background: var(--color-night);
  color: var(--color-on-dark);
}

.hero__portrait-wrap {
  position: relative;
  width: min(100%, 28rem);
  margin: 0 auto;
}

.hero__portrait {
  position: relative;
  z-index: 2;
  width: 100%;
  aspect-ratio: 0.82;
  object-fit: cover;
  clip-path: polygon(12% 0, 100% 0, 86% 100%, 0 100%);
  filter: grayscale(0.22) contrast(1.06);
}

.hero__shape {
  position: absolute;
  inset: 1rem -0.4rem -1rem 0.4rem;
  clip-path: polygon(12% 0, 100% 0, 86% 100%, 0 100%);
}

.hero__shape--back {
  z-index: 0;
  background: rgba(255, 255, 255, 0.38);
  transform: translate(-1rem, -1rem);
}

.hero__shape--accent {
  z-index: 1;
  background: var(--color-accent);
  transform: translate(0.65rem, 0.65rem);
}

.quote {
  padding: clamp(3.5rem, 8vw, 7rem) 0;
  background: var(--color-accent);
}

.quote blockquote {
  max-width: 19ch;
  margin: 0;
  color: var(--color-ink);
  font-size: clamp(2rem, 5vw, 4.4rem);
  font-weight: 900;
  letter-spacing: -0.07em;
  line-height: 0.96;
}

.section {
  padding: clamp(4rem, 10vw, 8rem) 0;
}

.section--dark {
  background: var(--color-night) url('../assets/images/Home/desk-black1980.png') center / cover no-repeat;
}

.about__grid,
.profile__grid {
  display: grid;
  gap: clamp(2rem, 6vw, 5rem);
}

.about__detail {
  max-width: 42rem;
  color: rgba(249, 250, 251, 0.78);
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  line-height: 1.75;
}

.about__detail p {
  margin: 0 0 1.2rem;
}

.about__detail strong {
  color: var(--color-accent);
}

.about__brand {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius-md);
  background: rgba(17, 19, 24, 0.65);
  color: var(--color-on-dark);
  font-size: 0.88rem;
  font-weight: 700;
}

.about__brand img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.skills {
  background: var(--color-surface);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-card {
  display: grid;
  gap: 1rem;
  align-content: start;
  min-height: 10rem;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background: var(--color-paper);
  box-shadow: 3px 3px 0 rgba(21, 24, 29, 0.1);
  text-align: left;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.skill-card:hover {
  box-shadow: var(--shadow-offset);
  transform: translate(-4px, -4px);
}

.skill-card__title {
  margin: 0;
  color: var(--color-ink);
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.skill-card__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-card__items li {
  padding: 0.35rem 0.6rem;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text-muted);
  font-size: 0.76rem;
  font-weight: 700;
}

.experience {
  background: var(--color-night-muted);
}

.timeline {
  position: relative;
  display: grid;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline::before {
  position: absolute;
  top: 0.4rem;
  bottom: 0.4rem;
  left: 0.55rem;
  width: 2px;
  background: var(--color-line);
  content: '';
}

.timeline__item {
  position: relative;
  display: grid;
  grid-template-columns: 1.25rem minmax(0, 1fr);
  gap: 1rem;
}

.timeline__marker {
  position: relative;
  z-index: 1;
  width: 1.1rem;
  height: 1.1rem;
  margin-top: 0.4rem;
  border: 3px solid var(--color-accent);
  border-radius: 50%;
  background: var(--color-night);
  box-shadow: 0 0 0 4px rgba(255, 230, 0, 0.16);
}

.timeline__card {
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background: var(--color-paper);
  box-shadow: 4px 4px 0 rgba(21, 24, 29, 0.14);
}

.timeline__header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.timeline__header h3 {
  margin: 0;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  letter-spacing: -0.045em;
}

.timeline__company {
  margin: 0.25rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 700;
}

.timeline__period {
  flex: 0 0 auto;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: var(--color-accent);
  color: var(--color-ink);
  font-size: 0.76rem;
  font-weight: 900;
  white-space: nowrap;
}

.timeline__highlights {
  display: grid;
  gap: 0.55rem;
  margin: 1.25rem 0 0;
  padding: 0;
  list-style: none;
}

.timeline__highlights li {
  position: relative;
  padding-left: 1.25rem;
  color: var(--color-text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

.timeline__highlights li::before {
  position: absolute;
  top: 0.6em;
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 2px;
  background: var(--color-accent);
  content: '';
  transform: rotate(45deg);
}

.section--photo {
  background: var(--color-night) url('../assets/images/Home/network-mainboard1980.png') center / cover no-repeat;
}

.profile__card {
  align-self: center;
  padding: clamp(1.4rem, 4vw, 3rem);
  border-radius: var(--radius-lg);
  background: var(--color-paper);
  box-shadow: var(--shadow-offset);
}

.profile__card h2 {
  max-width: 12ch;
  margin: 0;
  color: var(--color-text);
  font-size: clamp(2rem, 5vw, 3.4rem);
  letter-spacing: -0.065em;
  line-height: 0.98;
}

.profile__card > p:not(.profile__eyebrow) {
  margin: 1.25rem 0 0;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.profile__details {
  display: grid;
  gap: 0.85rem;
  margin: 2rem 0;
}

.profile__details div {
  display: grid;
  gap: 0.2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--color-line);
}

.profile__details dt {
  color: var(--color-text-muted);
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.profile__details dd {
  margin: 0;
  font-weight: 700;
}

.profile__details a {
  color: inherit;
  text-decoration-color: var(--color-accent-deep);
  text-decoration-thickness: 2px;
}

.profile__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.profile__socials a {
  display: inline-grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-night);
  color: var(--color-on-dark);
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.profile__socials a:hover {
  background: var(--color-accent);
  color: var(--color-ink);
  transform: translateY(-3px);
}

.profile__hobbies {
  margin: 1.5rem 0 0;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-line);
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.profile__hobbies strong {
  color: var(--color-text);
}

.profile__image-wrap {
  position: relative;
  width: min(100%, 31rem);
  margin: 0 auto;
}

.profile__image-wrap::after {
  position: absolute;
  z-index: 0;
  right: -0.7rem;
  bottom: -0.7rem;
  width: 100%;
  height: 100%;
  background: var(--color-accent);
  content: '';
  transform: skewX(-5deg);
}

.profile__image-wrap img {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 0.84;
  border-radius: var(--radius-md);
  object-fit: cover;
  filter: grayscale(0.15);
}

.contact-cta {
  background: var(--color-accent);
}

.contact-cta__inner {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: space-between;
}

.contact-cta__eyebrow {
  color: var(--color-text-muted);
}

.contact-cta h2 {
  margin: 0;
  color: var(--color-ink);
  font-size: clamp(2rem, 5vw, 3.75rem);
  letter-spacing: -0.07em;
  line-height: 0.95;
}

@media (min-width: 48rem) {
  .hero__layout {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.7fr);
  }

  .hero__portrait-wrap {
    justify-self: end;
  }

  .about__grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
    align-items: start;
  }

  .profile__grid {
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.82fr);
    align-items: center;
  }

  .skills__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 33rem) {
  .hero {
    min-height: 42rem;
  }

  .hero__overlay {
    background: linear-gradient(90deg, rgba(10, 11, 14, 0.9), rgba(10, 11, 14, 0.48));
  }

  .hero__portrait-wrap {
    width: min(78vw, 19rem);
  }

  .contact-cta__inner {
    flex-direction: column;
  }

  .contact-cta__inner .button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__role {
    transition: none;
  }
}
</style>
