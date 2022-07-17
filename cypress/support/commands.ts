// @ts-check
///<reference path="../global.d.ts" />
///<reference path="../../types/index.d.ts" />

import * as jwt from 'jsonwebtoken';

Cypress.Commands.add(
  'loginByAuth0Api',
  (username: string, password?: string) => {
    const log = Cypress.log({
      displayName: 'AUTH0 LOGIN',
      message: [`🔐 Authenticating | ${username}`],
      // @ts-ignore
      autoEnd: false,
    });

    const client_id = Cypress.env('next_public_auth0_client_id');
    const client_secret = Cypress.env('auth0_client_secret');
    // const audience = Cypress.env('auth0_audience');
    const scope = Cypress.env('next_public_auth0_scope');

    log.snapshot('before');

    cy.request({
      method: 'POST',
      url: `${Cypress.env('next_public_auth0_domain')}/oauth/token`,
      body: {
        grant_type: 'password',
        username,
        password,
        // audience,
        scope,
        client_id,
        client_secret,
      },
    }).then(({ body }) => {
      const user: any = jwt.decode(body.id_token);

      const userItem = {
        sub: user.sub,
        nickname: user.nickname,
        name: user.name,
        email: user.email,
      };

      cy.window().then((win) => {
        win.__user = userItem;

        log.snapshot('after');
        log.end();

        cy.visit('/');
      });
    });
  }
);

export {};
