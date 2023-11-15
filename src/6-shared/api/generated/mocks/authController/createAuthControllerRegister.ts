import { AuthControllerRegister400 } from "../../models/authController/AuthControllerRegister";
import { AuthControllerRegister409 } from "../../models/authController/AuthControllerRegister";
import { AuthControllerRegister201 } from "../../models/authController/AuthControllerRegister";
import { AuthControllerRegisterMutationRequest } from "../../models/authController/AuthControllerRegister";
import { AuthControllerRegisterMutationResponse } from "../../models/authController/AuthControllerRegister";
import { createRegisterDto } from "../createRegisterDto";
import { createUserResponseDto } from "../createUserResponseDto";


export function createAuthControllerRegister400(): NonNullable<AuthControllerRegister400> {
  return undefined;
}
  

export function createAuthControllerRegister409(): NonNullable<AuthControllerRegister409> {
  return undefined;
}
  

export function createAuthControllerRegister201(): NonNullable<AuthControllerRegister201> {
  return createUserResponseDto();
}
  

export function createAuthControllerRegisterMutationRequest(): NonNullable<AuthControllerRegisterMutationRequest> {
  return createRegisterDto();
}
  

export function createAuthControllerRegisterMutationResponse(): NonNullable<AuthControllerRegisterMutationResponse> {
  return createUserResponseDto();
}
  