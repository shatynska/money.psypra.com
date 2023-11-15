import { z } from "zod";

import { userResponseDtoSchema } from "../userResponseDtoSchema";

export const usersControllerUpdateUserMutationResponseSchema = z.lazy(() => userResponseDtoSchema).schema;