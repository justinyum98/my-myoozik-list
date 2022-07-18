import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    env: {
      auth0_test_username: process.env.AUTH0_TEST_USERNAME,
      auth0_test_password: process.env.AUTH0_TEST_PASSWORD,
    },
  },
});
