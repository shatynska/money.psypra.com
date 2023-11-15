import { faker } from "@faker-js/faker";

import { RegisterDto } from "../models/RegisterDto";


export function createRegisterDto(): NonNullable<RegisterDto> {
  return {"email": faker.internet.email(),"password": faker.internet.password(),"passportRepeat": faker.string.alpha()};
}
  