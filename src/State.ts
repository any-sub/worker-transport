import { z } from "zod";

export const StateParser = z.object({
  lastUpdated: z.date(),
  data: z.array(z.string().describe("Hashed version of the contents of every match")).optional()
}).optional();

export type State = z.infer<typeof StateParser>;