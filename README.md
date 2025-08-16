# Learn-Babel

Language : [🇺🇸 English] | [🇨🇳 中文](./README-zh.md)

---

This project is a comprehensive Babel learning and practice repository, suitable for beginners to advanced developers. It covers Babel fundamentals, configuration, common plugins, polyfill, integration with Webpack/Vite, and practical cases.

## Project Structure

- `01_babel_intro.js`: What is Babel? (theory + simple example)
- `02_babel_install_and_run.js`: Babel installation and transpilation hands-on
- `03_babel_config_explain.md`: Babel config file explanation
- `04_babel_preset_plugin_demo.js`: Using preset-env and common plugins
- `05_babel_polyfill_demo.js`: Polyfill usage scenarios and configuration
- `06_babel_with_webpack_demo.md`: Babel + Webpack integration hands-on
- `07_babel_with_vite_demo.md`: Babel + Vite integration hands-on
- `babel.config.js`: Global Babel config (ESModule syntax, for type: module)
- `webpack.config.js`: Webpack config (ESModule syntax, for type: module)
- `src/`: Source code directory, with separate entry files for Webpack (index.js) and Vite (main.js)
- `dist/`: Webpack build output
- `index.html`: Vite project entry page
- Others: transpiled outputs, experiment files, dependency configs, etc.

## Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/HowieCong/Learn-Babel.git
   cd Learn-Babel
   ```
2. Install dependencies (recommend pnpm):
   ```bash
   pnpm install
   # or npm install
   ```
3. Try Babel transpilation:
   ```bash
   npx babel 02_babel_install_and_run.js -o 02_babel_install_and_run.transpiled.js
   node 02_babel_install_and_run.transpiled.js
   ```
4. Try Webpack build:
   ```bash
   pnpm exec webpack
   node dist/bundle.js
   ```
5. Try Vite dev server:
   ```bash
   pnpm exec vite
   # Visit http://localhost:5173 in your browser
   ```

## Learning Path & Content

1. Babel fundamentals and purpose (see 01_babel_intro.js)
2. Babel installation and basic usage (see 02_babel_install_and_run.js)
3. Babel config file explanation (see 03_babel_config_explain.md)
4. Preset-env and common plugins hands-on (see 04_babel_preset_plugin_demo.js)
5. Polyfill scenarios and config (see 05_babel_polyfill_demo.js)
6. Babel + Webpack integration (see 06_babel_with_webpack_demo.md, entry: src/index.js)
7. Babel + Vite integration (see 07_babel_with_vite_demo.md, entry: src/main.js)
8. More advanced/practical content can be added

## Config & Practice Notes

- Babel config uses `babel.config.js` (ESModule syntax, for type: module)
- Webpack config uses `webpack.config.js` (ESModule syntax)
- Webpack entry: `src/index.js`, Vite entry: `src/main.js` (do not mix)
- Polyfill: recommend core-js + useBuiltIns: 'usage' for on-demand injection
- All hands-on files and markdown docs are well-commented for self-study

## References

- [Babel Official Documentation](https://babeljs.io/docs/en/)
- [Babel GitHub](https://github.com/babel/babel)
- [Webpack Official Documentation](https://webpack.js.org/)
- [Vite Official Documentation](https://vitejs.dev/)

---

Welcome to learn, practice, and share Babel experience! Feel free to open issues for questions or suggestions.
