import { AuthControllerLogin400 } from "../../models/authController/AuthControllerLogin";
import { AuthControllerLogin401 } from "../../models/authController/AuthControllerLogin";
import { AuthControllerLogin201 } from "../../models/authController/AuthControllerLogin";
import { AuthControllerLoginMutationRequest } from "../../models/authController/AuthControllerLogin";
import { AuthControllerLoginMutationResponse } from "../../models/authController/AuthControllerLogin";
import { createLoginDto } from "../createLoginDto";
import { createLoginResponseDto } from "../createLoginResponseDto";


export function createAuthControllerLogin400(): NonNullable<AuthControllerLogin400> {
  return undefined;
}
  

export function createAuthControllerLogin401(): NonNullable<AuthControllerLogin401> {
  return undefined;
}
  

export function createAuthControllerLogin201(): NonNullable<AuthControllerLogin201> {
  return createLoginResponseDto();
}
  

export function createAuthControllerLoginMutationRequest(): NonNullable<AuthControllerLoginMutationRequest> {
  return createLoginDto();
}
  

export function createAuthControllerLoginMutationResponse(): NonNullable<AuthControllerLoginMutationResponse> {
  return createLoginResponseDto();
}
  