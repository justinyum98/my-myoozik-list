import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    // Turned off to disable CORS errror. See https://docs.cypress.io/guides/guides/web-security#Set-chromeWebSecurity-to-false
    chromeWebSecurity: false,
  },
});
