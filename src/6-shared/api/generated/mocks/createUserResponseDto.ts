import { faker } from "@faker-js/faker";

import { UserResponseDto } from "../models/UserResponseDto";


export function createUserResponseDto(): NonNullable<UserResponseDto> {
  return {"id": faker.string.alpha(),"email": faker.internet.email(),"roles": faker.helpers.arrayElements([faker.helpers.arrayElement<any>([`ADMIN`, `USER`])]) as any};
}
  