import { rest } from "msw";

import { createAuthControllerGoogleAuthCallbackQueryResponse } from "../../mocks/authController/createAuthControllerGoogleAuthCallback";


    export const authControllerGoogleAuthCallbackHandler = rest.get('*/api/auth/google/callback', function handler(req, res, ctx) {
      return res(
        ctx.json(createAuthControllerGoogleAuthCallbackQueryResponse()),
      );
    });
    