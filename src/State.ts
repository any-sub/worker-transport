import { z } from "zod";
import { ResultUnitParser } from "./ResultUnit";

export const StateParser = z.object({
  id: z.string().uuid(),
  lastUpdated: z.string().datetime(),
  data: z.array(ResultUnitParser)
});

export type State = z.infer<typeof StateParser>;
