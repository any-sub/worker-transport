import { z } from "zod";

export const StateParser = z.object({
  lastUpdated: z.date(),
  data: z.array(z.string().describe("Hashed version of the contents of every match")).nullish()
}).nullish();

export type State = z.infer<typeof StateParser>;