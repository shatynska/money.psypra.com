import type { RegisterDto } from "../RegisterDto";
import type { UserResponseDto } from "../UserResponseDto";

export type AuthControllerRegister400 = any;

export type AuthControllerRegister409 = any;

export type AuthControllerRegister201 = UserResponseDto;

export type AuthControllerRegisterMutationRequest = RegisterDto;

export type AuthControllerRegisterMutationResponse = UserResponseDto;
