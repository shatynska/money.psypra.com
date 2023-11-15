import { rest } from "msw";

import { createUsersControllerRemoveMutationResponse } from "../../mocks/usersController/createUsersControllerRemove";


    export const usersControllerRemoveHandler = rest.delete('*/api/users/:id', function handler(req, res, ctx) {
      return res(
        ctx.json(createUsersControllerRemoveMutationResponse()),
      );
    });
    