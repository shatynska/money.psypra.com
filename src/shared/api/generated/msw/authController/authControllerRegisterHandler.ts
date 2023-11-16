import { rest } from "msw";

import { createAuthControllerRegisterMutationResponse } from "../../mocks/authController/createAuthControllerRegister";


    export const authControllerRegisterHandler = rest.post('*/api/auth/register', function handler(req, res, ctx) {
      return res(
        ctx.json(createAuthControllerRegisterMutationResponse()),
      );
    });
    