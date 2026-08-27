<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
:root {
  --color-ink: #111318;
  --color-surface: #f6f5f1;
  --color-surface-muted: #e7e6df;
  --color-paper: #ffffff;
  --color-night: #17191f;
  --color-night-muted: #23262d;
  --color-accent: #ffe600;
  --color-accent-deep: #e3ca00;
  --color-text: #1c1f26;
  --color-text-muted: #5d626c;
  --color-on-dark: #f9fafb;
  --color-line: rgba(22, 25, 31, 0.14);
  --shadow-offset: 8px 8px 0 rgba(28, 31, 37, 0.22);
  --shadow-offset-dark: 8px 8px 0 rgba(255, 230, 0, 0.2);
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --page-gutter: clamp(1rem, 4vw, 4rem);
  --header-height: 4.75rem;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--color-surface);
}

body {
  min-width: 320px;
  margin: 0;
  background: var(--color-surface);
  color: var(--color-text);
}

body,
button,
input,
textarea {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}

button,
input,
textarea {
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
}

a:focus-visible,
button:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 4px;
}

#app {
  min-height: 100vh;
  overflow-x: clip;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.site-container {
  width: min(100% - (var(--page-gutter) * 2), 75rem);
  margin-inline: auto;
}

.eyebrow {
  display: inline-block;
  margin: 0 0 0.8rem;
  padding: 0.35rem 0.65rem;
  background: var(--color-accent);
  box-shadow: 4px 4px 0 rgba(25, 27, 32, 0.35);
  color: #111;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transform: skewX(-8deg);
}

.eyebrow > * {
  display: inline-block;
  transform: skewX(8deg);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
