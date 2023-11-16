import { faker } from "@faker-js/faker";

import { UsersControllerRemoveMutationResponse } from "../../models/usersController/UsersControllerRemove";
import { UsersControllerRemovePathParams } from "../../models/usersController/UsersControllerRemove";


export function createUsersControllerRemoveMutationResponse(): NonNullable<UsersControllerRemoveMutationResponse> {
  return undefined;
}
  

export function createUsersControllerRemovePathParams(): NonNullable<UsersControllerRemovePathParams> {
  return {"id": faker.string.alpha()};
}
  