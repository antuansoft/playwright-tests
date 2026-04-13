import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  use: {
    channel: 'msedge',        // usa el Edge instalado en tu máquina
    headless: false,          // verás el navegador en local
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: 'http://antuangames.mygamesonline.org/',
  },

  retries: 0,
});