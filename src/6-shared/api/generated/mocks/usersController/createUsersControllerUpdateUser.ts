import { UsersControllerUpdateUserMutationResponse } from "../../models/usersController/UsersControllerUpdateUser";
import { createUserResponseDto } from "../createUserResponseDto";


export function createUsersControllerUpdateUserMutationResponse(): NonNullable<UsersControllerUpdateUserMutationResponse> {
  return createUserResponseDto();
}
  