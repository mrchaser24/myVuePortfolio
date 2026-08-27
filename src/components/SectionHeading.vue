<template>
  <header class="section-heading" :class="{ 'section-heading--light': light }">
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-heading__description">{{ description }}</p>
  </header>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    eyebrow: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.section-heading {
  max-width: 44rem;
  margin-bottom: clamp(2rem, 5vw, 4rem);
}

.section-heading__eyebrow {
  display: inline-block;
  margin: 0 0 0.9rem;
  padding: 0.4rem 0.75rem;
  background: var(--color-accent);
  box-shadow: 5px 5px 0 rgba(26, 29, 35, 0.28);
  color: #111;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transform: skewX(-8deg);
}

.section-heading h2 {
  margin: 0;
  color: var(--color-text);
  font-size: clamp(2rem, 5vw, 4rem);
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.section-heading__description {
  max-width: 38rem;
  margin: 1rem 0 0;
  color: var(--color-text-muted);
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.7;
}

.section-heading--light h2,
.section-heading--light .section-heading__description {
  color: var(--color-on-dark);
}

.section-heading--light .section-heading__description {
  color: rgba(249, 250, 251, 0.76);
}
</style>
