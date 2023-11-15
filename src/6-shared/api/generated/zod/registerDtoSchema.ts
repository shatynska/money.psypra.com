import { z } from "zod";


export const registerDtoSchema = z.object({"email": z.string(),"password": z.string().min(6).nullish(),"passportRepeat": z.string().min(6)});