# Learn-Babel (English Documentation)

Language: [🇺🇸 English](./README.md) | [🇨🇳 中文](./README-zh.md)

---

## Project Introduction

This repository is a systematic hands-on Babel learning tutorial, covering everything from basics to advanced topics. Whether you are new to frontend engineering or want to deeply understand code transpilation principles, you will find a clear learning path and practical cases here.

Contents include:
- Visual demonstration of Babel core principles and workflow
- Step-by-step guide from installation to configuration
- Practical usage of presets and plugins
- Detailed polyfill compatibility solutions
- AST (Abstract Syntax Tree) basics and plugin development
- Integration with build tools like Webpack/Vite
- Mainstream framework adaptation cases (React/TypeScript/Vue)
- Performance optimization and debugging guide
- AI scenario innovative plugin development examples

Each topic comes with:
- Source code with detailed comments
- Code comparison before and after transpilation
- Runnable experiment files
- Step-by-step operation documentation

---

## Quick Start (3-Minute Setup)

### Step 1: Clone the Repository

Open your terminal and run:
```bash
# Clone the repository
git clone https://github.com/HowieCong/Learn-Babel.git

# Enter the project directory
cd Learn-Babel
```

### Step 2: Install Dependencies

It is recommended to use `pnpm` (also supports `npm` or `yarn`):
```bash
# Install all dependencies
pnpm install

# Or use npm
# npm install

# Or use yarn
# yarn install
```

### Step 3: Try Your First Transpilation Example

```bash
# Use Babel to transpile ES6 code
npx babel 02_babel_install_and_run.js -o 02_babel_install_and_run.transpiled.js

# Run the transpiled file
node 02_babel_install_and_run.transpiled.js
```
You should see `Hello, Babel!` in your terminal, indicating successful transpilation.

### Step 4: Try Build Tool Integration

- **Webpack Build Example**:
  ```bash
  # Run the build command
  pnpm exec webpack

  # Run the bundled output
  node dist/bundle.js
  ```

- **Vite Dev Server Example**:
  ```bash
  # Start the dev server
  pnpm exec vite

  # Open the browser at the prompted address (usually http://localhost:5173)
  ```

---

## Directory Structure Explained

| File/Directory                | Description                                              | Learning Stage |
|-------------------------------|---------------------------------------------------------|---------------|
| `01_babel_intro.js`           | Babel basics with bilingual comments                    | Beginner      |
| `02_babel_install_and_run.js` | Full installation & usage process with terminal commands| Beginner      |
| `03_babel_config_explain.md`  | Config file details (`.babelrc` vs `babel.config.js`)   | Basic         |
| `04_babel_preset_plugin_demo.js` | Preset & plugin practice, with transpiled comparison | Basic         |
| `05_babel_polyfill_demo.js`   | Polyfill solutions, core-js usage example               | Intermediate  |
| `06_babel_with_webpack_demo.md` | Webpack integration guide with config explanation     | Intermediate  |
| `07_babel_with_vite_demo.md`  | Vite integration guide, dev server config               | Intermediate  |
| `08_babel_ast_basic.md`       | AST basics, with visualization tool tutorial            | Advanced      |
| `09_babel_plugin_easy_demo.js`| Simple plugin development (variable renaming)           | Advanced      |
| `10_babel_plugin_advanced_demo.js` | Advanced plugin (auto logging)                     | Advanced      |
| `11_babel_ai_audit_case_demo.js` | AI audit plugin case (comment parsing + type check)  | Practical     |
| `12_babel_performance_debug_tips.md` | Performance & debugging tips                     | Practical     |
| `13_babel_with_framework_demo.md` | Framework integration (React/TS/Vue)               | Practical     |
| `babel.config.js`             | Global Babel config (ESModule syntax)                   | All stages    |
| `webpack.config.js`           | Webpack config file                                     | Build         |
| `src/`                        | Source code, test files for various scenarios           | All stages    |
| `dist/`                       | Webpack build output directory                          | Build         |

---

## Step-by-Step Learning Guide

### Stage 1: Babel Basics

1. **Understand Core Functionality**: Read `01_babel_intro.js` and run the code to observe transpilation.
   ```bash
   # See how arrow functions are transpiled
   npx babel 01_babel_intro.js -o 01_babel_intro.transpiled.js
   ```

2. **Master Installation & Usage**: Follow steps in `02_babel_install_and_run.js`, focusing on:
   - The role of each dependency (`@babel/core` is core, `@babel/cli` is CLI)
   - Meaning of CLI parameters (`-o` for output file)

3. **Learn Config Files**: Read `03_babel_config_explain.md` and try modifying config:
   ```js
   // Add a plugin in babel.config.js
   export default {
     presets: ['@babel/preset-env'],
     plugins: ['@babel/plugin-transform-template-literals'] // Add template literal plugin
   }
   ```
   Rerun the transpile command and observe changes.

### Stage 2: Advanced Features & Integration

1. **Presets & Plugins Practice**:
   - Open `04_babel_preset_plugin_demo.js` to see effects of different plugins
   - Try commenting/uncommenting plugins and compare results

2. **Polyfill Compatibility**:
   - Learn core-js config in `05_babel_polyfill_demo.js`
   - Understand how `useBuiltIns: 'usage'` auto-imports polyfills as needed

3. **Build Tool Integration**:
   - Webpack: Follow `06_babel_with_webpack_demo.md`, focus on `babel-loader`
   - Vite: See `07_babel_with_vite_demo.md` for dev vs prod differences

### Stage 3: Plugin Development & Practice

1. **AST Basics**:
   - Read `08_babel_ast_basic.md` and use [AST Explorer](https://astexplorer.net/)
   - Practice identifying AST node structures for different syntax

2. **Plugin Development**:
   - Simple plugin: Study `src/my-babel-plugin.js` for variable renaming logic
   - Advanced plugin: Analyze `src/my-advanced-babel-plugin.js` for function traversal and log insertion
   - Test run:
     ```bash
     # Test advanced plugin
     npx babel src/advanced_plugin_test.js --plugins ./src/my-advanced-babel-plugin.js -o test.transpiled.js
     ```

3. **Framework Integration**:
   - Follow `13_babel_with_framework_demo.md`:
     - React: Add `@babel/preset-react`
     - TypeScript: Add `@babel/preset-typescript`
     - Vue: Use with `vue-loader` for SFCs

### Stage 4: Performance Optimization & Debugging

- Read `12_babel_performance_debug_tips.md` and practice:
  - Use `only` and `ignore` to limit transpilation scope
  - Enable Babel cache for faster builds
  - Use `babel-plugin-tester` for plugin testing

---

## FAQ

1. **No change after transpilation?**
   - Check if config file is correct (path, syntax, project `type: module`)
   - Ensure required presets/plugins are installed
   - Check for CLI error messages

2. **Duplicate polyfill imports?**
   - Only configure `useBuiltIns` in one place (either in preset-env or via manual polyfill)
   - Ensure core-js versions are consistent

3. **Syntax errors when integrating with frameworks?**
   - React JSX: Ensure `@babel/preset-react` is configured
   - TypeScript: Ensure `@babel/preset-typescript` is installed
   - Vue SFC: Use with `vue-loader` and `@vitejs/plugin-vue` (for Vite)

---

## References

- [Babel Official Docs](https://babeljs.io/docs/en/) - Authoritative config & API reference
- [AST Explorer](https://astexplorer.net/) - AST visualization & plugin debugging tool
- [Webpack Docs](https://webpack.js.org/) - Build tool integration details
- [Vite Docs](https://vitejs.dev/) - Modern build tool guide

---

## Contributing

If you find issues or have better learning cases, you are welcome to:

1. [Submit an Issue](https://github.com/HowieCong/Learn-Babel/issues/new)
2. [Create a Pull Request](https://github.com/HowieCong/Learn-Babel/compare)  
   - Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) first (or propose improvements in your PR if missing).
   - Keep PR titles concise and describe your changes and motivation clearly.
   - If you change code, please try to include simple tests or usage examples.

3. Share your learning experience in the discussion area.

Let's make this Babel learning guide

> If you find this project helpful, please give it a ⭐️ Star!