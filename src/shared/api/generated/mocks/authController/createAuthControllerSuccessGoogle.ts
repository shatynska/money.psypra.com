import { faker } from "@faker-js/faker";

import { AuthControllerSuccessGoogleQueryParams } from "../../models/authController/AuthControllerSuccessGoogle";
import { AuthControllerSuccessGoogleQueryResponse } from "../../models/authController/AuthControllerSuccessGoogle";


export function createAuthControllerSuccessGoogleQueryParams(): NonNullable<AuthControllerSuccessGoogleQueryParams> {
  return {"token": faker.string.alpha()};
}
  

export function createAuthControllerSuccessGoogleQueryResponse(): NonNullable<AuthControllerSuccessGoogleQueryResponse> {
  return undefined;
}
  