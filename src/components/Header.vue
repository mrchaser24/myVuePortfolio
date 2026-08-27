<template>
  <header class="site-header">
    <div class="site-header__inner site-container">
      <router-link class="site-header__brand" :to="{ name: 'Home' }" aria-label="Chase Hermosisima home">
        <span>CHASE</span>
      </router-link>

      <button
        class="site-header__menu-toggle"
        type="button"
        :aria-expanded="menuOpen.toString()"
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span></span><span></span><span></span>
      </button>

      <nav id="primary-navigation" class="site-header__nav" :class="{ 'is-open': menuOpen }" aria-label="Primary navigation">
        <router-link v-for="item in navItems" :key="item.name" :to="{ name: item.name }" @click.native="closeMenu">
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuOpen: false,
      navItems: [
        { name: 'Home', label: 'Home' },
        { name: 'Project', label: 'Projects' },
        { name: 'Contact', label: 'Contact' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(17, 19, 24, 0.88);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
}

.site-header__inner {
  display: flex;
  min-height: var(--header-height);
  align-items: center;
  justify-content: space-between;
}

.site-header__brand {
  position: relative;
  z-index: 0;
  display: inline-block;
  color: var(--color-on-dark);
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: -0.07em;
  text-decoration: none;
}

.site-header__brand::before {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: -0.35rem;
  width: calc(100% + 0.7rem);
  height: 0.7rem;
  background: var(--color-accent);
  content: '';
  opacity: 0.88;
  transform: translateY(-30%) skewX(-14deg);
}

.site-header__nav {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.site-header__nav a {
  padding: 0.55rem 0.75rem;
  border-radius: var(--radius-sm);
  color: rgba(249, 250, 251, 0.8);
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.site-header__nav a:hover,
.site-header__nav a.router-link-exact-active {
  background: var(--color-accent);
  color: var(--color-ink);
  transform: translate(-2px, -2px);
}

.site-header__menu-toggle {
  display: none;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: var(--radius-sm);
  background: transparent;
  cursor: pointer;
}

.site-header__menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  margin: 0.23rem 0;
  background: var(--color-on-dark);
}

@media (max-width: 42rem) {
  .site-header__menu-toggle {
    display: block;
  }

  .site-header__nav {
    position: absolute;
    top: calc(100% + 0.65rem);
    right: var(--page-gutter);
    left: var(--page-gutter);
    display: grid;
    gap: 0.2rem;
    padding: 0.65rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--radius-md);
    background: var(--color-night);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.28);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-0.6rem);
    transition: opacity 160ms ease, transform 160ms ease;
  }

  .site-header__nav.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .site-header__nav a {
    padding: 0.8rem 0.9rem;
  }
}
</style>
