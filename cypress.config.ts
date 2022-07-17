import { defineConfig } from 'cypress';

require('dotenv').config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    env: {
      next_public_auth0_client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
      next_public_auth0_scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE,
      next_public_auth0_domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
      next_public_base_url: process.env.NEXT_PUBLIC_BASE_URL,
      next_public_redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      next_public_post_logout_redirect_uri:
        process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI,
      auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
      session_cookie_secret: process.env.SESSION_COOKIE_SECRET,
      session_cookie_lifetime: process.env.SESSION_COOKIE_LIFETIME,
    },
  },
});
