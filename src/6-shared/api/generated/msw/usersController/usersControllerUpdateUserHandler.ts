import { rest } from "msw";

import { createUsersControllerUpdateUserMutationResponse } from "../../mocks/usersController/createUsersControllerUpdateUser";


    export const usersControllerUpdateUserHandler = rest.put('*/api/users', function handler(req, res, ctx) {
      return res(
        ctx.json(createUsersControllerUpdateUserMutationResponse()),
      );
    });
    