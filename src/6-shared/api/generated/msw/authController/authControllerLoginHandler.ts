import { rest } from "msw";

import { createAuthControllerLoginMutationResponse } from "../../mocks/authController/createAuthControllerLogin";


    export const authControllerLoginHandler = rest.post('*/api/auth/login', function handler(req, res, ctx) {
      return res(
        ctx.json(createAuthControllerLoginMutationResponse()),
      );
    });
    