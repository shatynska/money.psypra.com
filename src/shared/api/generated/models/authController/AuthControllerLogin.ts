import type { LoginResponseDto } from '../LoginResponseDto';
import type { LoginDto } from '../LoginDto';

export type AuthControllerLogin400 = any;

export type AuthControllerLogin401 = any;

export type AuthControllerLogin201 = LoginResponseDto;

export type AuthControllerLoginMutationRequest = LoginDto;

export type AuthControllerLoginMutationResponse = LoginResponseDto;
export namespace AuthControllerLoginMutation {
  export type Response = AuthControllerLoginMutationResponse;
  export type Request = AuthControllerLoginMutationRequest;
  export type Errors =
    | AuthControllerLogin201
    | AuthControllerLogin400
    | AuthControllerLogin401;
}
