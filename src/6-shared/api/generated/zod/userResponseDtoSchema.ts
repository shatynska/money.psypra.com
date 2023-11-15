import { z } from "zod";


export const userResponseDtoSchema = z.object({"id": z.string(),"email": z.string(),"roles": z.array(z.enum([`ADMIN`,`USER`]))});