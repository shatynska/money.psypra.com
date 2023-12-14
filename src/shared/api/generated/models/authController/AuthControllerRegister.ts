import type { UserResponseDto } from '../UserResponseDto';
import type { RegisterDto } from '../RegisterDto';

export type AuthControllerRegister400 = any;

export type AuthControllerRegister409 = any;

export type AuthControllerRegister201 = UserResponseDto;

export type AuthControllerRegisterMutationRequest = RegisterDto;

export type AuthControllerRegisterMutationResponse = UserResponseDto;
export namespace AuthControllerRegisterMutation {
  export type Response = AuthControllerRegisterMutationResponse;
  export type Request = AuthControllerRegisterMutationRequest;
  export type Errors =
    | AuthControllerRegister201
    | AuthControllerRegister400
    | AuthControllerRegister409;
}
