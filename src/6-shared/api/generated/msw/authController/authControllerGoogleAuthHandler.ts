import { rest } from "msw";

import { createAuthControllerGoogleAuthQueryResponse } from "../../mocks/authController/createAuthControllerGoogleAuth";


    export const authControllerGoogleAuthHandler = rest.get('*/api/auth/google', function handler(req, res, ctx) {
      return res(
        ctx.json(createAuthControllerGoogleAuthQueryResponse()),
      );
    });
    