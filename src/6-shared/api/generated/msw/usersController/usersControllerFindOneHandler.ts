import { rest } from "msw";

import { createUsersControllerFindOneQueryResponse } from "../../mocks/usersController/createUsersControllerFindOne";


    export const usersControllerFindOneHandler = rest.get('*/api/users/:idOrEmail', function handler(req, res, ctx) {
      return res(
        ctx.json(createUsersControllerFindOneQueryResponse()),
      );
    });
    