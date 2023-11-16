import { faker } from "@faker-js/faker";

import { UsersControllerFindOnePathParams } from "../../models/usersController/UsersControllerFindOne";
import { UsersControllerFindOneQueryResponse } from "../../models/usersController/UsersControllerFindOne";
import { createUserResponseDto } from "../createUserResponseDto";


export function createUsersControllerFindOnePathParams(): NonNullable<UsersControllerFindOnePathParams> {
  return {"idOrEmail": faker.string.alpha()};
}
  

export function createUsersControllerFindOneQueryResponse(): NonNullable<UsersControllerFindOneQueryResponse> {
  return createUserResponseDto();
}
  