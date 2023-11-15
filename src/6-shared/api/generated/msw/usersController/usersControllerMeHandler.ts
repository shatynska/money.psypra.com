import { rest } from "msw";

import { createUsersControllerMeQueryResponse } from "../../mocks/usersController/createUsersControllerMe";


    export const usersControllerMeHandler = rest.get('*/api/users', function handler(req, res, ctx) {
      return res(
        ctx.json(createUsersControllerMeQueryResponse()),
      );
    });
    