import { z } from "zod";


export const loginDtoSchema = z.object({"email": z.string(),"password": z.string().min(6).nullish()});