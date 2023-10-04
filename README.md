## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [Tailwind CSS](https://tailwindcss.com/
- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./locales)

- 🔎 [Component Preview](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview)

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-vue-markdown)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🔤 [Webfont self-hosting](https://github.com/feat-agency/vite-plugin-webfont-dl)

- 🦾 TypeScript, of course

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions)

<br>


## Pre-packed

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros) - Explore and extend more macros and syntax sugar to Vue.
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-vue-component-preview`](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview) - Preview single component in VSCode
- [`vite-plugin-vue-markdown`](https://github.com/antfu/vite-plugin-vue-markdown) - Markdown as components / components in Markdown
  - [`markdown-it-shiki`](https://github.com/antfu/markdown-it-shiki) - [Shiki](https://github.com/shikijs/shiki) for syntax highlighting
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - unplugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - Sitemap generator
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively
- [`vite-plugin-webfont-dl`](https://github.com/feat-agency/vite-plugin-webfont-dl) - Zero-config webfont (Google Fonts) downloader and injector to improve website's performance.
- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - Designed to enhance the Vue developer experience.

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools
> requires Node >=14.18

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [Cypress](https://cypress.io/) - E2E testing
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Static-site generation
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  
## Usage

### Development

Just run and visit http://localhost:4000

```bash
pnpm i
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Docker Production Build

First, build the vitesse image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t vitesse:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 vitesse:latest
```
