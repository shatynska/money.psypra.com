import { faker } from "@faker-js/faker";

import { LoginResponseDto } from "../models/LoginResponseDto";


export function createLoginResponseDto(): NonNullable<LoginResponseDto> {
  return {"accessToken": faker.string.alpha()};
}
  