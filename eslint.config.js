import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,jsx,vue}'],
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // 如果需要 Node.js 全局变量
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': ['error', {
        'args': 'none',
        'caughtErrors': 'none',
        'varsIgnorePattern': '^_'
      }],
      'vue/no-unused-vars': 'error',
      // 其他常用规则
      'no-console': 'warn',
      'no-debugger': 'error',
      'semi': ['error', 'never']
    }
  },
])