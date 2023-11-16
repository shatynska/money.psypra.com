import { rest } from "msw";

import { createAuthControllerRefreshTokensQueryResponse } from "../../mocks/authController/createAuthControllerRefreshTokens";


    export const authControllerRefreshTokensHandler = rest.get('*/api/auth/refresh-tokens', function handler(req, res, ctx) {
      return res(
        ctx.json(createAuthControllerRefreshTokensQueryResponse()),
      );
    });
    