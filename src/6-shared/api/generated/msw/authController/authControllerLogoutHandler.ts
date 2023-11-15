import { rest } from "msw";

import { createAuthControllerLogoutQueryResponse } from "../../mocks/authController/createAuthControllerLogout";


    export const authControllerLogoutHandler = rest.get('*/api/auth/logout', function handler(req, res, ctx) {
      return res(
        ctx.json(createAuthControllerLogoutQueryResponse()),
      );
    });
    