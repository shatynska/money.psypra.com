import { rest } from "msw";

import { createAuthControllerSuccessGoogleQueryResponse } from "../../mocks/authController/createAuthControllerSuccessGoogle";


    export const authControllerSuccessGoogleHandler = rest.get('*/api/auth/success-google', function handler(req, res, ctx) {
      return res(
        ctx.json(createAuthControllerSuccessGoogleQueryResponse()),
      );
    });
    