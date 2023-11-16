import { faker } from "@faker-js/faker";

import { LoginDto } from "../models/LoginDto";


export function createLoginDto(): NonNullable<LoginDto> {
  return {"email": faker.internet.email(),"password": faker.internet.password()};
}
  